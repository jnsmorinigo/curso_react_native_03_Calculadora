import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalculadoraComponent } from '../components/BotonCalculadoraComponent';
import { styles } from '../themes/AppTheme';

enum operadores {
    sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNunero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto == '.') {
            return;
        }

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)

                // evaluar si es otro cero y hay otro punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
                // evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
                //evitar 0000.
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {
        if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
            setNumero('0');
        } else {
            setNumero(numero.slice(0, -1));
        }
    }

    const cambiarNumeroPoranterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumeroPoranterior()
        ultimaOperacion.current = operadores.dividir
    }

    const btnMultiplicar = () => {
        cambiarNumeroPoranterior()
        ultimaOperacion.current = operadores.multiplicar
    }

    const btnRestar = () => {
        cambiarNumeroPoranterior()
        ultimaOperacion.current = operadores.restar
    }

    const btnSumar = () => {
        cambiarNumeroPoranterior()
        ultimaOperacion.current = operadores.sumar
    }

    const calcular = () => {
        let tempNumero = Number(numero);
        let tempNumeroAnterior = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case operadores.dividir:
                setNumero(`${tempNumero / tempNumeroAnterior}`);
                break;
            case operadores.multiplicar:
                setNumero(`${tempNumero * tempNumeroAnterior}`);
                break;
            case operadores.restar:
                setNumero(`${tempNumero - tempNumeroAnterior}`);
                break;
            case operadores.sumar:
                setNumero(`${tempNumero + tempNumeroAnterior}`);
                break;

            default:
                break;
        }
        setNumeroAnterior('0');
    }

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoAnterior}>{numeroAnterior}</Text>
                )
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadoraComponent texto="C" color="#9B9B9B" action={limpiar} />
                <BotonCalculadoraComponent texto="+/-" color="#9B9B9B" action={positivoNegativo} />
                <BotonCalculadoraComponent texto="del" color="#9B9B9B" action={btnDelete} />
                <BotonCalculadoraComponent texto="/" color="#FF9427" action={btnDividir} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadoraComponent texto="7" action={armarNunero} />
                <BotonCalculadoraComponent texto="8" action={armarNunero} />
                <BotonCalculadoraComponent texto="9" action={armarNunero} />
                <BotonCalculadoraComponent texto="X" color="#FF9427" action={btnMultiplicar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadoraComponent texto="4" action={armarNunero} />
                <BotonCalculadoraComponent texto="5" action={armarNunero} />
                <BotonCalculadoraComponent texto="6" action={armarNunero} />
                <BotonCalculadoraComponent texto="-" color="#FF9427" action={btnRestar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadoraComponent texto="1" action={armarNunero} />
                <BotonCalculadoraComponent texto="2" action={armarNunero} />
                <BotonCalculadoraComponent texto="3" action={armarNunero} />
                <BotonCalculadoraComponent texto="+" color="#FF9427" action={btnSumar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadoraComponent texto="0" action={armarNunero} ancho />
                <BotonCalculadoraComponent texto="." action={armarNunero} />
                <BotonCalculadoraComponent texto="=" color="#FF9427" action={calcular} />
            </View>
        </View>
    )
}

import { useRef, useState } from 'react';

enum operadores {
    sumar, restar, multiplicar, dividir
}
export const useCalculadora = () => {
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
                if (tempNumero != 0) {
                    setNumero(`${tempNumeroAnterior / tempNumero}`);
                } else {
                    setNumero('No se puede dividir por cero')
                    setTimeout(() => {
                        setNumero('0');
                    }, 5000)
                }
                break;
            case operadores.multiplicar:
                setNumero(`${tempNumero * tempNumeroAnterior}`);
                break;
            case operadores.restar:
                setNumero(`${tempNumeroAnterior - tempNumero}`);
                break;
            case operadores.sumar:
                setNumero(`${tempNumero + tempNumeroAnterior}`);
                break;

            default:
                break;
        }
        setNumeroAnterior('0');
    }

    return {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNunero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}

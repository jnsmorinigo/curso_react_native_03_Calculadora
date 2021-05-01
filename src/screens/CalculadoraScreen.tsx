import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalculadoraComponent } from '../components/BotonCalculadoraComponent';
import { useCalculadora } from '../Hooks/useCalculadora';
import { styles } from '../themes/AppTheme';

export const CalculadoraScreen = () => {
    const {
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
        calcular } = useCalculadora();
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

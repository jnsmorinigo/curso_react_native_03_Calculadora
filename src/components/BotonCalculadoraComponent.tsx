import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../themes/AppTheme';

interface Props {
    texto: string,
    color?: '#2D2D2D' | '#FF9427' | '#9B9B9B',
    ancho?: boolean,
    action: (numeroTexto: string) => void,
}

export const BotonCalculadoraComponent = ({ texto, color = '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(texto)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B') ? '#020003' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#020003',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: '#f2f5ff',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoAnterior: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 80,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }

});
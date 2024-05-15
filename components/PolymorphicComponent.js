import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    base: {
        padding: 10,
        margin: 10,
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

const PolymorphicComponent = ({ as: Component = Text, style, children, ...props }) => {
    // Podemos agregar lógica para ajustar estilos basados en el tipo de componente
    let additionalStyles = [];
    if (Component === 'h1') {
        additionalStyles.push(styles.h1);
        Component = Text; // Reasignar a Text si se supone que es un 'h1'
    }

    return <Component style={[styles.base, ...additionalStyles, style]} {...props}>
        {children}
    </Component>;
};

export default PolymorphicComponent;

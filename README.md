# Proyecto React Native: Componente Polimórfico

Este proyecto de React Native demuestra el uso de un componente polimórfico que puede transformarse en diferentes elementos de la interfaz de usuario basados en las props que recibe. El objetivo es mostrar cómo un único componente puede ser utilizado de manera flexible para renderizar diferentes tipos de UI, como Text y TouchableOpacity.

## Conceptos Clave

### Componente Polimórfico
Un componente polimórfico en React Native es un componente diseñado para actuar como múltiples tipos de componentes de UI. Este componente acepta una prop especial llamada as que determina qué tipo de elemento de React Native debe renderizar. El componente maneja diferentes propiedades y comportamientos basados en lo que se especifica a través de esta prop, permitiendo una gran reutilización y flexibilidad dentro de la aplicación.

### Ejemplo de Implementación
El componente polimórfico, definido como PolymorphicComponent, puede ser configurado para funcionar como un componente Text por defecto o como cualquier otro componente (por ejemplo, TouchableOpacity) a través de la prop as. Además, acepta estilos y otras props que son apropiados para el tipo de componente que se está renderizando.

```javascript
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

```

### Cómo Empezar

Para utilizar este proyecto, sigue los pasos a continuación:

1. Clona el repositorio.
2. Intenta levantarlo y ejecutarlo en un dispositivo, este codigo solo sirve para mostrar el polimorfismo en el mundo de react-native
3. Para ver el funcionamiento ir a la siguiente liga: [Demo Live!](https://snack.expo.dev/0hOw99LBDYMX9IUg7iqzP)
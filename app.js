import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PolymorphicComponent from './components/PolymorphicComponent';

const App = () => (
    <View>
        <PolymorphicComponent as="h1" style={{ color: 'red' }}>
            This is a heading (h1)
        </PolymorphicComponent>
        <PolymorphicComponent style={{ color: 'black' }}>
            This is a text
        </PolymorphicComponent>
        <PolymorphicComponent as={TouchableOpacity} style={{ backgroundColor: 'blue', color: 'white' }} onPress={() => alert('Button pressed!')}>
            Press Me
        </PolymorphicComponent>
    </View>
);

export default App;

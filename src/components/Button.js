import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { COLORS, SIZES } from '../styles/constants';

function Button({onPress, text, type, styles={}}) {
  return (
    <Pressable onPress={onPress}>
        <Text style={[getStyle(type), styles]}>{text}</Text>
    </Pressable>
  )
}

const getStyle = (type) => {
    const result = {
        backgroundColor: COLORS.primary ,
        color: COLORS.font,
        borderRadius: 20,
        fontSize: SIZES.p,
        fontWeight: "600",
        paddingHorizontal: 50,
        paddingVertical: 10
    };

    switch(type) {
        case "primary":
            result.backgroundColor = COLORS.primary;
            break;
        case "secondary":
            result.backgroundColor = COLORS.secondary;
            break;
    }

    return result;
};

export default Button
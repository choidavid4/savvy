import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { COLORS, SIZES } from '../styles/constants';

function Button({onPress, text, type}) {
  return (
    <Pressable onPress={onPress}>
        <Text style={getStyle(type)}>{text}</Text>
    </Pressable>
  )
}

const getStyle = (type) => {
    const result = {
        backgroundColor: COLORS.accent ,
        color: COLORS.font,
        borderRadius: 20,
        fontSize: SIZES.p,
        fontWeight: "600",
        paddingHorizontal: 50,
        paddingVertical: 10
    };

    switch(type) {
        case "primary":
            result.backgroundColor = COLORS.accent;
            break;
        case "secondary":
            result.backgroundColor = COLORS.secondary;
            break;
    }

    return result;
};

export default Button
import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "./constants";

export const globalStyles = StyleSheet.create({
    h1: {
        fontSize: SIZES.h1,
        fontWeight: "600",
        color: COLORS.font
    },
    h2: {
        fontSize: SIZES.h2,
        fontWeight: "600",
        color: COLORS.font
    },
    h3: {
        fontSize: SIZES.h3,
        fontWeight: "600",
        color: COLORS.font
    },
    p: {
        fontSize: SIZES.p,
        color: COLORS.font
    }
});
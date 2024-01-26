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
    },
    bold: {
        fontSize: SIZES.p,
        color: COLORS.font,
        fontWeight: "600"
    },
    horizontalContainer: {
        flexDirection: 'row', 
        gap: 10,
        width: "100%"
    },
    mainContainer: {
        flex: 1, 
        padding: 16, 
        alignItems: 'center',
        gap: 20
    },
    card: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        width: "100%"
    }
});
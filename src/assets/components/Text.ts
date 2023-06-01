import { StyleSheet } from "react-native";
import { IKeys } from "../../Interfaces";
import { light } from "../abstracts/colors";

const TextStyle = (theme: IKeys = light, fontSize?: number, lineHeight?: number) => StyleSheet.create({
    type: {
        color: theme.white,
        fontSize: fontSize,
        lineHeight: lineHeight,
    }
})
export default TextStyle;
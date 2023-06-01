import { StyleSheet } from "react-native";
import { IKeys } from "../../Interfaces";
import { light } from "../abstracts/colors";
import { SharedStyles } from "./SharedStyles";

const ButtonStyle = (theme?: string, height?: number, width?: number, borderRadius?: number) => StyleSheet.create({
    btnType: {
        backgroundColor: theme,
        height: height,
        width: width,
        borderRadius: borderRadius,
        ...SharedStyles.flexCenter
    }
})
export default ButtonStyle;
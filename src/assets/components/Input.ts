import { StyleSheet } from "react-native";
import { commonColor, light } from "../abstracts/colors";
import { IKeys } from "../../Interfaces";

const InputStyle = (theme:IKeys = light, iconSize?: number, paddingIcon?: number, containerHeight?: number) => StyleSheet.create({
    backgroundColor: {
        backgroundColor: theme.bgInput
    },
    validStyle: {
        borderWidth: 1,
        borderColor: commonColor.success1
    },
    InvalidStyle: {
        borderWidth: 1,
        borderColor: commonColor.error1
    },
    defaultContainer: {
        position: 'relative',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    defaultInput: {
        color: theme.white,
        paddingLeft: (paddingIcon && iconSize) && iconSize + paddingIcon,
        height: '100%',
        width:"100%",  
    },
    iconStyle: {
        position: 'absolute',
        top: (containerHeight && iconSize) && (containerHeight-iconSize)/2,
        left: 0,
        right: 0,
    }
})
export default InputStyle

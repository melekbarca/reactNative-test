import { GestureResponderEvent, StyleProp, TextProps, TextStyle, TouchableHighlightProps, TouchableOpacityProps, ViewStyle } from "react-native";
import { IKeys } from "../style";

export interface IButton extends TouchableOpacityProps, TouchableHighlightProps {
    children?: React.ReactNode
    text?: string
    btnStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    isCustom?: boolean
    isTouchableOpacity?: boolean
    isTouchableHighlight?: boolean
    type?: string
    theme?: IKeys
    textType?: string
}

export interface IText extends TextProps {
    onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    textStyle?: StyleProp<TextStyle>
    type?: string
    theme?: IKeys
    weight?: string | undefined
    
}
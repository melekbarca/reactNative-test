import { Keyboard, TouchableWithoutFeedback } from "react-native";
import React from "react";

type Props = {
    children: React.ReactNode
}

export const DismissKeyboard = ({ children }: Props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}
import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { ButtonStyle, SharedStyles } from '../../assets/components'
import { IButton } from '../../Interfaces'
import { ThemeContext } from '../../providers/ThemeProvider/ThemeProvider'

export default function Button({ type, ...props }: IButton): JSX.Element {

    const theme = useContext(ThemeContext)

    let containerClassName = {}
       
    if (type) {
        switch (type) {
            case 'primary':
                containerClassName = ButtonStyle(theme.themeColor, 50, 100, 10).btnType
                break;
            case 'secondary':
                containerClassName = ButtonStyle(theme.commonWhite, 50, 100, 20).btnType
                break;
            default:
                break;
        }
    }

    const btnContent = () => {
        return (
            <View style={StyleSheet.compose(containerClassName, props.btnStyle)}>
                <Text style={props.textStyle}>{props.text}</Text>
            </View>
        )
    }
    const renderBtn = () => {
        if (props.isTouchableHighlight) {
            return (
                <TouchableHighlight {...props} style={SharedStyles.flexCenter}>
                    {btnContent()}
                </TouchableHighlight>
            )
        }
        else {
            return (
                <TouchableOpacity {...props} style={SharedStyles.flexCenter}>
                    {btnContent()}
                </TouchableOpacity>
            )
        }
    }

    return (
        renderBtn()
    );
}

 
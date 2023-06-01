import React, { Ref, useImperativeHandle, useState } from 'react'
import { Modal as ModalReactNative, View } from 'react-native'
import { ModalStyle } from '../../assets/components'
import Text from '../../atoms/Text/Text'
import { Button } from '../../atoms'

export type RefType = {
    onOpen: () => void
    onClose: () => void
}

const Modal = React.forwardRef((props: any, ref: Ref<RefType | undefined>) => {



    const [open, setOpen] = useState<boolean>(false)

    useImperativeHandle(ref, () => {
        return {
            onOpen,
            onClose
        }
    }, [])


    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    return (
        <ModalReactNative
            animationType={props.animationType}
            transparent={true}
            visible={open}
            onRequestClose={onClose}
            onShow={props.onShow}
            style={props.style}
        >
            <View style={ModalStyle.modalContainer}>
                <View style={props.contentStyle}>
                    <Text>cccccccccccccc</Text>
                    <Button
                        onPress={onClose}
                        text='close'
                    />
                </View>
            </View >


        </ModalReactNative>
    )
})

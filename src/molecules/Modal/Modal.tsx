import React, { Ref, useEffect, useImperativeHandle, useState } from 'react'
import { Modal as ModalReactNative, Text, View } from 'react-native'
import { ModalStyle } from '../../assets/components'

import { Button } from '../../atoms'

export type RefType = {
    onOpen: () => void
    onClose: () => void
}

const Modal = React.forwardRef((props: any, ref: Ref<RefType | undefined>) => {



    const [open, setOpen] = useState<boolean>(false)


    useImperativeHandle(ref, () => ({
        onClose,
        onOpen,
    }));


    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    useEffect(() => {

        if (!open) {
            if (props.onExit) props.onExit()
        }

    }, [open])

    return (
        <ModalReactNative
            animationType={props.animationType}
            transparent={true}
            visible={open}
            onRequestClose={onClose}
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
export default Modal
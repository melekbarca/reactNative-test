import React, { Ref, forwardRef } from 'react'
import { View } from 'react-native'
import { RefType } from '../Interfaces'
import { Modal } from '../Molecules'

import { ModalStyle } from '../Assets/components'

function ModalTest(props: any, ref: Ref<RefType | undefined>) {
    const btnSubmitProps = {
        onPress: ()=>{props.onExit()},
        
    }
    return (
        <Modal
            ref={ref}
            onExit={props.onExit}
            withCloseAction = {true}
            animationType="slide"
            contentStyle={ModalStyle.modalContent}
            transparent={true}
            containerBtnStyle={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
            btnSubmitProps= {btnSubmitProps}
        >
            <View><Text>ModalTestttttttttttttttttttttttttttttttttt</Text></View>

        </Modal>
    )
}
export default forwardRef(ModalTest)
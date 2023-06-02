import React, { Ref, forwardRef } from 'react'
import { View } from 'react-native'
import { RefType } from '../molecules/Modal/Modal'
import Modal from '../molecules/Modal/Modal'
import Text from '../atoms/Text/Text'
import { ModalStyle } from '../assets/components'




function ModalTest1(props: any, ref: Ref<RefType | undefined>) {
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
            <View><Text>ModalTestttttttttt</Text></View>

        </Modal>
    )
}
export default forwardRef(ModalTest1)
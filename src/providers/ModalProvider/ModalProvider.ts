import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Interfaces'
import { RefType } from '../../molecules/Modal/Modal'

export default function ModalProvider() {
    const modalName = useRef<string>('')
    const { name, data } = useSelector((state: RootState) => state.modal)
    const modalRef = useRef<RefType>()

    modalName.current = name
    const onShow = (key: string) => {
        if (name) {
            modalRef.current?.onOpen()
        }
    }

    const onExit = (key: string) => {
        if (name) {
            modalRef.current?.onClose()
        }
    }

}


import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Interfaces'
import { RefType } from '../../molecules/Modal/Modal'
import ModalTest1 from '../../Modal/Modal'
import { setCloseModal } from '../../Redux/Reducers/modalReducer'

export default function ModalProvider() {
    const dispatch = useDispatch()
    const modalName = useRef<string>('')
    const { name, data } = useSelector((state: RootState) => state.modal)
    const modalRef = useRef<RefType>()

    const onShow = (key: string) => {
        modalName.current = key
        switch (key) {
            case "modalTest":
                modalRef.current?.onOpen()
                break;
            default:
                break;
        }
    }

    const onExit = (key: string) => {
        modalName.current = key
        switch (key) {
            case 'modalTest':
                modalRef.current?.onClose()
                break;

            default:
                break;
        }

        dispatch(setCloseModal())

        modalName.current = ""
    }

    useEffect(() => {
        if (name) {
            onShow(name)
        }
    }, [name])

    return (      
            <ModalTest1
                onExit={() => onExit('modalTest')}
                onShow={() => onShow('modalTest')}
                data={data}
                ref={modalRef}
            />

    
    )

}


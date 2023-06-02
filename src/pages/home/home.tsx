import React, { useContext, useDeferredValue } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../atoms'
import { Elang, RootState } from '../../Interfaces'
import { LangContext } from '../../providers/LangProvider/LangProvider'
import { setLang } from '../../Redux'
import { HomeScreenProps } from '../../types'
import { setOpenModal } from '../../Redux/Reducers/modalReducer'

const Home: React.FC<HomeScreenProps> = (props) => {
    const currentLanguage = useSelector((state: RootState) => state.setting.lang)
    const lang = useContext(LangContext)
    console.log(currentLanguage);

    const dispatch = useDispatch()
    return (
        <View>
            <Button
                text={lang.envoyer}
                isTouchableOpacity
                textStyle={{ color: 'red' }}
                onPress={() => { dispatch(setLang({ lang: currentLanguage === Elang.fr ? Elang.ar : Elang.fr })) }}
            />

            <Button
                text={'openModal'}
                isTouchableOpacity
                textStyle={{ color: 'red' }}
                onPress={()=>{dispatch(setOpenModal({name:'modalTest'}))}}
            />
        </View>
    )
}
export default Home

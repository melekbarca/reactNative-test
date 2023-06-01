import React, { useState } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    Pressable,
    Text
} from 'react-native'

import { DismissKeyboard } from '../../components';
import { LoginScreenProps } from '../../types';
const Login: React.FC<LoginScreenProps> = (props) => {
    type LoginForm = {
        email: string,
        password: string
    }

    type FormEvent = NativeSyntheticEvent<TextInputChangeEventData>

    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: ""
    })

    const onChange = (e: FormEvent, key: string) => {
        setForm({ ...form, [key]: e.nativeEvent.text })
    }


    return (
        <View>
            <DismissKeyboard>
                <View style={styles.loginBox}>
                    <View style={styles.wrapper}>
                        <View>
                            <TextInput
                                placeholder='EMAIL'
                                style={styles.formInput}
                                value={form.email}
                                onChange={(e) => { onChange(e, "email") }}
                            />
                            <TextInput
                                placeholder='PASSWORD'
                                style={styles.formInput}
                                value={form.password}
                                onChange={(e) => { onChange(e, "password") }}
                            />
                        </View>
                        <View>
                            <Pressable
                                style={styles.submitButton}
                                onPress={() => { props.navigation.push('Home') }}>
                                <View style={styles.textWrapper}>
                                    <Text style={styles.submitButtonText}>submit</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </DismissKeyboard>
        </View>
    )
}

const styles = StyleSheet.create({
    loginBox: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    wrapper: {

    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    formInput: {
        color: 'black',
        fontSize: 20,
        height: 60,
        borderRadius: 10,
        margin: 12,
        borderColor: 'blue',
        borderWidth: 2,
        padding: 10,

    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    submitButton: {
        marginTop: 20,
        margin: 10,
        backgroundColor: 'blue',
        height: 60,
        borderRadius: 20,

    },
    submitButtonText: {
        color: 'white',
        padding: 10,
        textAlign: "center",
        fontSize: 20,
    }

})
export default Login
import React, { useRef, useState } from 'react';
import { SafeAreaView, View, Alert, ScrollView, Image } from 'react-native';
import SocialLogin from "./SocialLogin";
import styles from "./styles";
import {Button,Checkbox,Text,TextInput,useTheme} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import axios from 'axios';
//import * as loginApi from '../../api/login';
//import { SafeAreaView } from 'react-native-safe-area-context';

const reviewSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const initialValues = {
    email: '',
    password: '',
};

const Login = ({ navigation }) => {
    const { colors } = useTheme();
    const [recordarme, setRecordarme] = useState(false);
    const passwordTextInput = useRef();

    let isLoading = false;
    /*const { mutate, isLoading } = useMutation(loginApi.login, {
        onError: (error) => {
        Alert.alert('😞', error.response?.data?.message ?? 'Algo salió mal');
        },
    });*/

    async function handleFormikSubmit(values, actions) {
        console.log("Submit!")
        /*actions.setFieldValue('password', '');
        mutate(values, {
            onSuccess: (data) => {
                if (!recordarme) {
                    actions.setFieldValue('email', '');
                }
                axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
                if (!data.registrado) {
                    navigation.navigate('Registracion3', data);
                } else {
                    navigation.navigate('AppNavigator');
                }
            },
        });*/
    }

  function onRecordarmeCheckboxClick() {
    console.log(recordarme);
    setRecordarme(prevState => !prevState);
  }

  function onRegistrateButtonClick() {
    console.log("Registrarme...")
    //navigation.navigate('Registracion1');
  }

  function onRecuperoButtonClick() {
    //navigation.navigate('Recupero1');
  }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.item}>
                    <Text style={styles.title}>Deliverar</Text>
                </View>
                <View style={styles.formView}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={reviewSchema}
                        onSubmit={handleFormikSubmit}
                    >
                        {({
                        handleChange, handleBlur, handleSubmit, isValid, errors, touched, values,
                        }) => (
                        <>
                            <TextInput
                                mode="flat"
                                label="Email"
                                style={styles.textInput}
                                textContentType="emailAddress"
                                keyboardType="email-address"
                                onSubmitEditing={() => passwordTextInput.current.focus()}
                                blurOnSubmit={false}
                                returnKeyType="next"
                                onBlur={handleBlur('email')}
                                error={touched.email && errors.email}
                                value={values.email}
                                onChangeText={handleChange('email')}
                            />
                            <TextInput
                                mode="flat"
                                label="Contraseña"
                                style={styles.textInput}
                                secureTextEntry
                                textContentType="password"
                                ref={passwordTextInput}
                                onSubmitEditing={handleSubmit}
                                onBlur={handleBlur('password')}
                                error={touched.password && errors.password}
                                value={values.password}
                                onChangeText={handleChange('password')}
                            />
                            {/* Checkbox */}
                            <View style={styles.checkbox}>
                                <Checkbox
                                    uncheckedColor="rgba(208,9,9,0.8)"
                                    color="rgba(208,9,9,0.8)"
                                    status={recordarme ? 'checked' : 'unchecked'}
                                    onPress={onRecordarmeCheckboxClick}
                                />
                                <Text style={{ fontWeight: 'bold' }}>Recordarme</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                                <Button
                                    mode="contained"
                                    onPress={handleSubmit}
                                    style={{ marginTop: 20, alignSelf: 'stretch' }}
                                    disabled={!isValid || isLoading}
                                    loading={isLoading}
                                    color='rgb(208, 9, 9)'
                                >
                                    Iniciar Sesión
                                </Button>
                            </View>
                            <View style={styles.socialLogin}>
                                <SocialLogin />
                            </View>
                        </>
                        )}
                    </Formik>
                    <View style={styles.registerView}>
                        <Button
                        mode="text"
                        onPress={onRecuperoButtonClick}
                        style={{ marginTop: 20, alignSelf: 'flex-end' }}
                        uppercase={false}
                        color={colors.text}
                        compact
                        >
                        Olvidaste tu contraseña?
                        </Button>
                        <Button
                        mode="text"
                        onPress={onRegistrateButtonClick}
                        uppercase={false}
                        color={colors.text}
                        compact
                        >
                        No tenés una cuenta? Registrate
                        </Button>
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}

/*
<View style={styles.socialLogin}>
    
</View>
*/

export default Login;
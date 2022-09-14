import React from "react";
import { SafeAreaView } from "react-native";
import SocialLogin from "./SocialLogin";
import styles from "./styles";

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SocialLogin />
        </SafeAreaView>
    );
}

export default Login;
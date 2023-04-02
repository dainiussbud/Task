import React from "react";
import styles from './styles';
import { View, Text } from 'react-native';
import Button from "../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../../components/Title";
import Input from "../../../components/Input";

const Signin = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>

            <Input placeholder="Email" keyboardType="email-address"/>
            <Input placeholder="Password" secureTextEntry />

            <Button>Login</Button>

            <Text style={styles.footerText}>
                Not Registered?
                <Text
                    onPress={() => navigation.navigate('Signup')}
                    style={styles.footerLink}> 
                    Sign up!
                </Text>
            </Text>
        </SafeAreaView>
    );  
};

export default React.memo(Signin);
import React from "react";
import styles from './styles';
import { Text, SafeAreaView } from 'react-native';
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Title from "../../../components/Title";


const Signup = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Title> Join the hub! </Title>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" keyboardType="email-address"/>
            <Input placeholder="Password" secureTextEntry/>
            <Input placeholder="Confirm Password" secureTextEntry/>
        <Button type="blue">Create new account</Button>

        <Text style={styles.footerText}>
                Already Registered?
                <Text
                    onPress={() => navigation.navigate('Signin')}
                    style={styles.footerLink}> 
                    Sign in!
                </Text>
            </Text>
        </SafeAreaView>
    );  
};

export default React.memo(Signup);
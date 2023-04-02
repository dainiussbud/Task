import React from "react";
import styles from './styles';
import { View, Image, Text } from 'react-native';
import Button from "../../../components/Button";

const Signup = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/task.png')} 
            />

            <View style={styles.content}>
                <Text style={styles.title}>Task management app</Text>
                <Text style={styles.subTitle}>
                    Get organised by sorting out all your tasks and boost your productivity.
                </Text>

                <Button onPress={() => navigation.navigate('Signin')}>Log in</Button>
                <Button onPress={() => navigation.navigate('Signup')} type={'blue'}>
                    Get started
                </Button>
            </View>
        </View>
    );
};

export default React.memo(Signup)
import React from "react";
import { Text, TextInput } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";


const Input = ({...props}) => {
    return (
        <TextInput 
            placeholderTextColor={colors.navy}
            style={styles.input}
            {...props}
        />
    );
};

export default React.memo(Input);
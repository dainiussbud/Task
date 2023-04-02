import { StyleSheet } from "react-native";
import colors from "../../constants/colors.js";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //flex: 1,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    blueBg: {
        backgroundColor: colors.blue,
    },
})

export default styles;
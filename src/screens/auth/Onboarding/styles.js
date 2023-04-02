import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 450,
    },
    content: {
        padding: 46,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
    },
    title: {
        color: colors.black,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    subTitle: {
        color: colors.lightGray,
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 16,
    }
})

export default styles;
import { StyleSheet } from 'react-native';
import { colors, layout, dimensions } from '../../../global/theme';

export default StyleSheet.create({
    login: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    whatsappButton: {
        backgroundColor: "#25d366",
        ...layout.fullRounded,
        ...layout.p1,
        width: '50%'
    },
    
    registerButton: {
        borderWidth: 2,
        borderColor: "white",
        ...layout.fullRounded,
        ...layout.p1,
        ...layout.ml1,
        width: '50%'
    },
    whatsappText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    formWrapper: {
        ...layout.p3
    },
    buttonWrapper: {
        flexDirection: 'row',
        ...layout.mt1
    },
    registerText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});
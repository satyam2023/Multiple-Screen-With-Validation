import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingTop: 25,
        backgroundColor: '#FFFFFF'
    },

    HeaderContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: 100,
    },
    firstCircle: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 0,
        marginBottom: 10,
        height: 70,
        width: 70,
        backgroundColor: '#00BFFF',
        borderRadius: 50,
        color: '#FFFFFF',

    },
    SecondCircle: {
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 10,
        height: 70,
        width: 70,
        backgroundColor: '#00BFFF',
        borderRadius: 50,
    },
    thirdCircle: {
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 10,
        height: 70,
        width: 70,
        backgroundColor: '#00BFFF',
        borderRadius: 50,
    },
    firstline: {
        backgroundColor: '#AFDBF5',
        height: 5,
        width: 70,
        marginTop: 38,
    },
    secondline: {
        backgroundColor: '#AFDBF5',
        height: 5,
        width: 70,
        marginTop: 38,
    },
    SecondCircleEmpty: {
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 10,
        height: 70,
        width: 70,
        backgroundColor: '#E6E6E6',
        borderRadius: 50,
    },
    EmptyThirdCircle: {
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 10,
        height: 70,
        width: 70,
        backgroundColor: '#E6E6E6',
        borderRadius: 50,
    },
    EmptyFirstLine: {
        backgroundColor: '#E6E6E6',
        height: 5,
        width: 70,
        marginTop: 38,
    },
    EmptySecondLine: {
        backgroundColor: '#E6E6E6',
        height: 5,
        width: 70,
        marginTop: 38,
    },
    
});
export default styles;

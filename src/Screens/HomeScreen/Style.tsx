import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#B2FFFF'
    },
    btn: {
        backgroundColor: '#AFDBF5',
        padding: 10,
        borderWidth: 3,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16.00,
        elevation: 24,

    },
    des: {
        position: 'relative',
        padding: 100,
        bottom: 400,
        zIndex: -1,
        left: 110,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(152, 164, 233, 0.4)',
        marginRight: 370,

    },
    des1: {
        position: 'relative',
        padding: 100,
        left: 200,
        bottom: 500,
        zIndex: -1,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(231, 178, 240, 0.28)',
    },
    des2: {
        position: 'relative',
        padding: 100,
        left: 20,
        bottom: 650,
        zIndex: -1,
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'rgba(189, 252, 158, 0.28)',
    },
    design: {
        height: '50%',
        width: '100%',
        borderBottomEndRadius: 400,
        flexDirection: 'column',
        backgroundColor: '#324AB2',
        shadowColor: "#000",
        shadowOffset: {
            width: -10,
            height: 70,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16.00,
        elevation: 24,

    },
    designone: {
        height: '50%',
        width: '100%',
        borderBottomEndRadius: 80,
        flexDirection: 'column',
        backgroundColor: '#324AB2',
    }
})

export default styles;
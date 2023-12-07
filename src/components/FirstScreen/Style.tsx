import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 110,
        marginTop: 0,
    },
    errormsg: {
        color: 'red',
        marginRight: 170,
    },
    outer: {
        //  marginRight:170,
    },
    des: {
        position: 'relative',
        padding: 100,
        bottom: 250,
        zIndex: -1,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(152, 164, 233, 0.4)',
        marginRight: 370,

    },
    des1: {
        position: 'relative',
        padding: 100,
        left: 150,
        bottom: 350,
        zIndex: -1,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(231, 178, 240, 0.28)',


    },
    des2: {
        position: 'relative',
        padding: 100,
        right: 70,
        bottom: 350,
        zIndex: -1,
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'rgba(189, 252, 158, 0.28)',
    },
    box: {
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: '#91A3B0',
        borderTopWidth: 0.5,
        borderLeftWidth: 2,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        width: '90%',
        margin: 15,
        backgroundColor: '#FFFFFF',
    },
    boxfocus:{
        zIndex:3,
        position:'relative',
        bottom:10,
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: '#91A3B0',
        left:10,
        borderTopWidth:0.5,
        borderLeftWidth:2,
        borderRightWidth:4,
        borderBottomWidth:4,
        width: '90%',
        margin: 15,
        backgroundColor: '#FFFFFF',
      },
});

export default styles;

import { StyleSheet } from 'react-native';
import { Constants, Colors } from '@common';

export default StyleSheet.create({
    dev_border: {
        // borderWidth:1,
        // borderColor:'#FF0000'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bg2
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    error: {
        color: Colors.red
    },
    text: {
        fontSize: 16,
        fontFamily: Constants.FontFamily,
        color: Colors.bg2_font
        // lineHeight:  30,
        // alignContent: 'center',
    },
    item_holder: {
        backgroundColor: '#fff',

        flex: 1,
        // borderRadius: 5,
        // padding: 10,
        height: 150
    },
    item: {
        // flexDirection:  'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1
    },
    content: {
        paddingBottom: 10
    },
    separator: {
        width: '100%',
        height: 4,
        backgroundColor: Colors.bg2
    },
    logo_holder: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    logo: {
        flex: 1,
        resizeMode: 'cover'
    },
    name_holder: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 25,
        color: Colors.btn1
    }
});

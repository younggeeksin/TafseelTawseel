import { StyleSheet } from 'react-native';
import { Constants, Colors } from '@common';

export default StyleSheet.create({
    dev_border: {
        // borderWidth:1,
        // borderColor:'#FF0000'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bg2,
        padding: 5
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
        // lineHeight: 30,
        // alignContent:'center',
    },

    page_header_container: {
        // alignItems:'center',
        // justifyContent:'center',
        // paddingVertical:5,
    },
    page_header_holder: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    page_header: {
        color: Colors.bg2_font,
        fontSize: 16,
        fontFamily: Constants.FontFamily
    },
    thobe_item_holder: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        borderRadius: 5,
        flex: 1,
        margin: 3,
        height: 150,
        overflow: 'hidden'
    },
    thobe_item: {
        flex: 1
    },

    thobe_image_holder: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    thobe_image: {
        flex: 1,
        resizeMode: 'cover'
    },
    thobe_name_holder: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    thobe_name: {
        fontSize: 25,
        color: Colors.btn1
    },
    item_holder: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.18,
        // shadowRadius: 1.00,
        // elevation: 1,
        // width: '50%',
        borderRadius: 5,
        //padding:10,
        flex: 0.5,
        // marginHorizontal:4,
        // marginVertical:1,
        margin: 3,
        height: 150,
        overflow: 'hidden'
    },
    item: {
        // flexDirection: 'row',
        // alignItems:'center',
        // justifyContent:'center',
        flex: 1
    },

    separator: {
        width: '100%',
        height: 4,
        backgroundColor: Colors.bg2
    },
    cat_image_holder: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    cat_image: {
        flex: 1,
        resizeMode: 'cover'
    },
    name_holder: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    name: {
        fontSize: 25,
        color: Colors.btn1
    }
})

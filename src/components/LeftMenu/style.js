import { StyleSheet } from 'react-native';
import { Colors, Constants } from '@common';

export default StyleSheet.create({
    dev_border: {
        // borderWidth:1,
        // borderColor:'#FF0000'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bg1
    },
    text: {
        fontSize: 16,
        fontFamily: Constants.FontFamily,
        color: Colors.bg1_font
        // lineHeight: 30,
        // alignContent:'center',
    },
    header_holder: {
        justifyContent: 'center',
        // height:240,
        padding: 20,
        borderBottomWidth: 2,
        borderColor: Colors.bg1_border2
        // flex:1,
    },
    header_content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar_holder: {
        backgroundColor: Colors.btn2,
        // height: 44,
        padding: 10,
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    display_name: {
        fontSize: 18,
        marginVertical: 20
    },
    btn_sign_in: {
        // flex:1,
        backgroundColor: Colors.btn1,
        // height: 44,
        paddingHorizontal: 10,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_sign_in_text: {
        color: Colors.btn1_font
    },

    content_holder: {
        // flex:1,
    },
    menu_item: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20
    },
    menu_item_icon_holder: {
        flex: 0.5,
        justifyContent: 'center'
    },
    menu_item_icon: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 25,
        height: 25
    },
    menu_item_text_holder: {
        flex: 5,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    menu_item_text: {
        textAlign: 'left'
    }
});

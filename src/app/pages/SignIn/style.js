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
    content: {
        flex: 1,
        padding: 20
        // backgroundColor: 'white',
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        // borderRadius: 3
    },
    text: {
        fontSize: 16,
        fontFamily: Constants.FontFamily,
        color: Colors.bg1_font
        // lineHeight: 30,
        // alignContent:'center',
    },
    btn_close: {
        padding: 10,
        width: 45,
        height: 45
    },
    close_icon: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    logo_holder: {
        height: 160,
        alignSelf: 'stretch',
        marginVertical: 30
        // paddingHorizontal:'10%',
    },
    logo: {
        // width: '70%',
        //height: (((70*434)/682))+'%',
        // height: '30%',
        flex: 1,
		height: 160,
		width: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
        // tintColor: Colors.AppColor
    },
    text_input_container: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text_input_icon_holder: {
        flex: 0.5,
        justifyContent: 'center'
    },
    text_input_holder: {
        flex: 5,
        padding: 10
    },
    text_input_icon: {
        // flex:1,
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 25,
        height: 25
    },
    text_input: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: Colors.bg1_border
    },

    remember_me_holder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6
    },

    remember_me: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    remember_me_text_holder: {
        flex: 10
    },
    remember_me_text: {
        textAlign: 'left',
        paddingHorizontal: 10
    },
    remember_me_check_box_holder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    remember_me_check_box_wrapper: {
        // flex: 1,
        width: 20,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        // backgroundColor:'#FFFFFF',
        borderColor: Colors.bg2_border,
        borderRadius: 5,
        overflow: 'hidden',
        padding: 10
    },
    remember_me_check_box_icon: {
        width: 16,
        height: 16,
        // flex:1,
        resizeMode: 'contain'
    },

    forgot_password: {
        // flex:1,
    },
    forgot_password_text: {},

    btn_sign_in: {
        flex: 1,
        backgroundColor: Colors.btn1,
        // height: 44,
        padding: 10,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    btn_sign_in_text: {
        color: Colors.btn1_font
    },

    sign_up_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        // marginVertical:10,
    },
    sign_up_text: {},
    btn_sign_up: {
        // flex:1,
        // backgroundColor: Colors.btn2,
        // height: 44,
        // padding:10,
        // borderRadius: 80,
    },
    btn_sign_up_text: {
        paddingHorizontal: 5,
        color: Colors.mango
    },
});

import { StyleSheet } from 'react-native';
import { Colors, Constants } from '@common';

export default StyleSheet.create({
    dev_border: {
        // borderWidth: 1,
        // borderColor: '#FF0000'
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
    text: {
        fontSize: 16,
        fontFamily: Constants.FontFamily,
        color: Colors.bg2_font
        // lineHeight:  30,
        // alignContent: 'center',
    },
    header_holder: {},
    avatar_holder: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    avatar: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
    name_holder: {
        backgroundColor: Colors.white,
        padding: 20,
        // marginBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.bg2_border
    },
    name: {
        fontSize: 18,
        // padding: 20,
        textAlign: 'center',
        // color: Colors.grey1,
        fontFamily: Constants.FontFamilyBold
    },

    menu_item: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: Colors.bg2_border
    },
    menu_item_icon_holder: {
        flex: 0.5,
        justifyContent: 'center'
    },
    menu_item_icon: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: '100%',
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

    // container: {
    //     flex: 1,
    //     backgroundColor: Colors.LightGray
    // },
    // Group: {
    //
    //     backgroundColor: 'white',
    //     paddingHorizontal: 10,
    //     marginTop: 10
    // },
    // GroupItem: {
    //     flexDirection: 'row'
    // },
    // bottomContainer: {
    //     backgroundColor: 'white',
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // bottomText: {
    //     fontSize: 10,
    //     color: Colors.LighterGray
    //
    // },
    // bottomImage: {
    //     tintColor: Colors.AppColor,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: 15
    // }
})

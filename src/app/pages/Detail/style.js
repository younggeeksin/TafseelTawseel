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
    cat_image_holder: {
        height: 200
    },
    cover_image: {
        height: 200,
        width: '100%',
        resizeMode: 'cover'
    },
    text: {
        fontSize: 16,
        fontFamily: Constants.FontFamily,
        color: Colors.bg2_font
        // lineHeight:  30,
        // alignContent: 'center',
    },
    product_name_container: {
        backgroundColor: Colors.white,
        padding: 10,
        // marginBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.bg2_border
    },
    product_name_holder: {
        flexDirection: 'row'
        // justifyContent:  'space-between',
    },
    name_holder: {
        flex: 2,
        justifyContent: 'center'
    },
    price_holder: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        // color: Colors.bg2_font,

        textAlign: 'left'
    },
    price: {
        color: Colors.bg2_font2,

        textAlign: 'center'
    },

    status_out_of_stock_text_holder: {
        flex: 1,
        padding: 0
        // paddingBottom: 0,
    },
    status_out_of_stock_text: {
        color: Colors.red,
        textAlign: 'center'
    },

    product_description_holder: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    label_holder: {
        // paddingBottom: 10,
        // justifyContent: 'center',
        justifyContent: 'center'
    },
    label: {
        fontFamily: Constants.FontFamilyBold,
        textAlign: 'left'
    },
    description_holder: {
        paddingTop: 10
    },
    description: {
        textAlign: 'left'
    },

    cart_actions_holder: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    product_quantity_holder: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.btn3
    },
    btn_product_quantity: {
        alignItems: 'center',
        padding: 8
    },
    btn_product_quantity_text: {
        color: Colors.btn3_font
    },
    btn_add_to_cart_holder: {
        flex: 4,
        justifyContent: 'center',
        backgroundColor: Colors.btn1
    },
    btn_add_to_cart: {
        alignItems: 'center',
        padding: 8
    },
    btn_add_to_cart_text: {
        color: Colors.btn1_font
    },

    modal_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
    modal_content: {
        // justifyContent: 'center',
        backgroundColor: Colors.bg2
    },
    modal_header_holder: {
        backgroundColor: Colors.bg1,
        padding: 10
    },
    modal_header_text: {
        color: Colors.bg1_font,
        fontSize: 18,
        textAlign: 'center'
    },

    product_quantity_modal_container: {
        paddingHorizontal: 30
    },
    product_quantity_modal_slider_holder: {
        paddingVertical: 20
    },
    product_quantity_slider_text_holder: {
        // color:  Colors.bg2_font,
        padding: 10
    },
    product_quantity_slider_text: {
        color: Colors.bg2_font,
        textAlign: 'center'
    },
    product_quantity_modal_slider: {},
    btn_submit_qty: {
        backgroundColor: Colors.btn1,
        padding: 10
    },
    btn_submit_qty_text: {
        color: Colors.btn1_font,
        textAlign: 'center'
    },

    accordion_header: {
        borderTopWidth: 1,
        borderColor: Colors.bg2_border,

        flexDirection: 'row',
        justifyContent: 'center',

        padding: 10
    },
    accordion_header_text_holder: {
        flex: 10
    },
    accordion_header_text: {
        textAlign: 'left'
    },
    accordion_header_icon_holder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    accordion_header_icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    accordion_content: {
        // borderBottomWidth: 1,
        // borderColor: Colors.bg2_border,

        flexDirection: 'row',
        justifyContent: 'center',

        padding: 10
    },
    accordion_content_text_holder: {
        flex: 10
    },
    accordion_content_text: {
        textAlign: 'left',
        paddingHorizontal: 5
    },
    accordion_content_radio_holder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    accordion_content_radio_wrapper: {
        // flex:  1,
        borderRadius: 20 / 2,
        width: 20,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: Colors.bg2,
        borderColor: Colors.bg2_border,
        overflow: 'hidden'
    },
    accordion_content_radio_dot: {
        borderRadius: 14 / 2,
        width: 14,
        height: 14,
        backgroundColor: Colors.bg1
    }
});

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
    image_holder: {
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
    disabled: {
        opacity: 0.5
    },
    product_name_container: {
        backgroundColor: 'rgba(255,255,255,1)',
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

    measurement_holder: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    measurement_picker: {
        height: 44
    },
    measurement_picker_items: {
        height: 44
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
        // paddingHorizontal:  30
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

    product_components_holder: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 5,
        justifyContent: 'center'
    },

    product_option_modal_content: {
        flex: 1
        // alignSelf: 'center',
    },
    product_option_modal_header_holder: {
        flex: 0.5
    },
    product_option_modal_options_holder: {
        flex: 10,
        paddingVertical: 3
    },
    product_option_modal_footer_holder: {
        flex: 1
    },

    component_item_holder: {
        backgroundColor: '#fff',
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 5,
        height: 140,
        overflow: 'hidden'
    },
    component_item: {
        flex: 1
    },
    component_image_holder: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    component_image: {
        flex: 1,
        resizeMode: 'cover'
    },
    component_name_holder: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    component_name: {
        color: Colors.mango,
        textAlign: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap'
        //fontSize: 18,
        // lineHeight:  22,
    },

    component_product_item_holder: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 3 * 2,
        marginVertical: 3,
        height: 140,
        overflow: 'hidden'
    },
    component_product_item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    component_product_image_holder: {
        flex: 1
    },
    component_product_image: {
        flex: 1,
        resizeMode: 'cover'
    },
    component_product_label_holder: {
        backgroundColor: 'rgba(255,255,255,1)',
        flex: 1,
        padding: 5,

        // flexDirection:  'row',
        // justifyContent:  'space-between',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    component_product_name_holder: {
        // flex: 3,
        // justifyContent: 'center',
    },
    component_product_price_holder: {
        // flex: 1,
        // justifyContent: 'center',
    },
    component_product_name: {
        color: Colors.bg2_font,
        textAlign: 'center',
        paddingHorizontal: 10
    },
    component_product_price: {
        color: Colors.bg2_font2,
        textAlign: 'center',
        paddingHorizontal: 10
    },

    selected_option: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mango80
        // opacity: 0.8,
    },
    selected_option_image: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    }
});

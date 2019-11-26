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
    // content: {
    //     // paddingBottom: 10
    //     flexDirection:  'row',
    //     flexWrap:  'wrap',
    //     alignItems:  'flex-start',
    //     flex:  1,
    //     padding: 5,
    // },
    page_header_holder: {
        // flex:1,
        flexDirection: 'row',
        // alignItems:'center',
        justifyContent: 'center',
        padding: 5
    },
    page_header: {
        color: Colors.bg2_font,
        fontSize: 16,
        fontFamily: Constants.FontFamily
    },
    search: {
        flex: 4,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(217,217,217,1)',
        textAlign: 'left'
    },
    filter_btn: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
        // backgroundColor: '#FFCCCC',
    },
    filter_btn_icon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
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
        // height:180,
        overflow: 'hidden'
    },
    item_wrapper: {
        borderWidth: 1,
        borderColor: '#FF0000',
        padding: 3
    },
    item: {
        // flexDirection: 'row',
        // alignItems:'center',
        // justifyContent:'center',
        overflow: 'hidden',
        flex: 1,
        borderRadius: 5
    },

    separator: {
        width: '100%',
        height: 4,
        backgroundColor: Colors.bg2
    },
    cat_image_holder: {
        // position:'absolute',
        // height:'100%',
        // width:'100%',
        overflow: 'hidden',
        height: 140
    },
    cat_image: {
        flex: 1,
        resizeMode: 'cover'
    },
    label_holder: {
        // position:'absolute',
        // height:'100%',
        // width:'100%',
        backgroundColor: 'rgba(255,255,255,1)',
        flex: 1,
        // alignItems:'center',
        // justifyContent:'center',
        padding: 5
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: Constants.FontFamily,
        color: Colors.bg2_font,
        lineHeight: 30,
        textAlign: 'left'
        // padding:5,
        // alignContent:'center',
    },
    name_holder: {
        // flex:2,
        justifyContent: 'center'
    },
    price_holder: {
        // flex:1,
        // alignItems:'center',
        justifyContent: 'center'
    },
    name: {
        // color:Colors.bg2_font,

        textAlign: 'center'
    },
    price: {
        // color:Colors.bg2_font2,

        textAlign: 'center'
    }
});

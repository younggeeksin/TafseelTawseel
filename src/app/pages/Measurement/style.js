import {StyleSheet} from 'react-native'
import { Colors, Constants } from '@common'

export default StyleSheet.create({
    dev_border:{
        // borderWidth:1,
        // borderColor:'#FF0000'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bg2,
    },
    loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    error:{
        color:Colors.red
    },
    text:{
        fontSize:16,
        fontFamily: Constants.FontFamily,
        color:Colors.bg2_font,
        lineHeight: 30,
        textAlign:'left',
        padding:5,
        // alignContent:'center',
    },

    item:{
        flexDirection: 'row',
        justifyContent:'center',

        paddingHorizontal:10,
        paddingVertical:14,
        borderBottomWidth:1,
        borderColor:Colors.bg2_border,
    },
    item_btn_holder:{
        flex:1,
        justifyContent:'center',

    },
    item_btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
    },
    item_btn_icon:{
        resizeMode: 'contain',
        width: 25,
        height: 25,
    },
    item_text_holder:{
        flex:5,
        // paddingHorizontal:20,
        justifyContent:'center',
    },
    item_text:{
        textAlign:'left',
    },


    float_btn:{
        position:'absolute',
        bottom:34,
        left:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.btn1,
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    float_btn_icon:{
        resizeMode: 'contain',
        width: 18,
        height: 18,
    },

    edit_container:{
        position:'absolute',
        top:0,
        left:0,
        height:'100%',
        width:'100%',
        backgroundColor: Colors.bg2,
        // padding:10,
    },
    form_field_holder_double:{
        flexDirection: 'row',
        // justifyContent:'center',
    },
    form_field_holder:{

    },
    form_field: {
        flex:1,
        paddingVertical:5,
        paddingHorizontal:20,
    },
    label_holder: {
        // padding:0,
        flex:1,
        justifyContent:'center',
    },
    label: {
        // flex:1,
        // padding:0,
        // padding:0,
    },
    text_input_holder: {
        // padding:10,

    },
    text_input: {
        backgroundColor:Colors.white,
        borderRadius:10,
        // padding:5,

    },

    form_btn_holder:{
        flexDirection: 'row',
    },
    form_btn:{
        flex:1,
    },
    form_btn_text:{
        textAlign:'center',
    },
    form_btn_save:{
        backgroundColor:Colors.btn1,
    },
    form_btn_text_save:{
        color:Colors.btn1_font,
    },
    form_btn_cancel:{
        backgroundColor:Colors.btn3,
    },
    form_btn_text_cancel:{
        color:Colors.btn3_font,
    },

    // container:{
    //     flex:1,
    //     backgroundColor:Colors.LightGray
    // },
    // Group:{
    //
    //     backgroundColor:'white',
    //     paddingHorizontal:10,
    //     marginTop:10
    // },
    // GroupItem:{
    //     flexDirection:'row'
    // },
    // bottomContainer:{
    //     backgroundColor:'white',
    //     flex:1,
    //     alignItems:'center',
    //     justifyContent:'center',
    // },
    // bottomText:{
    //     fontSize:10,
    //     color:Colors.LighterGray
    //
    // },
    // bottomImage:{
    //     tintColor:Colors.AppColor,
    //     alignItems:'center',
    //     justifyContent:'center',
    //     marginTop:15
    // }
})

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

	form_field_holder_double:{
		flexDirection: 'row',
        // justifyContent:'center',
	},
	form:{
		flex:1,
	},
	form_field: {
		// flex:1,
		paddingVertical:5,
		paddingHorizontal:20,
	},
	label_holder: {
		// padding:0,
		// flex:1,
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

})

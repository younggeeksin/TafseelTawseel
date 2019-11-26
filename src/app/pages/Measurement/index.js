import React from 'react'
import {
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    FlatList,
    ActivityIndicator,
    Alert,
    RefreshControl,
    TextInput,
    Platform,
    // Share,
    // Linking,
    // Alert
} from 'react-native'
import styles from './style'
import { Icons, Global, Constants, Colors } from '@common'
// import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';
// import { UserInfo, SettingItem } from '@components'
// import Mailer from 'react-native-mail';

import { connect } from 'react-redux'
import { ActionCreators } from '@actions'
import { bindActionCreators } from 'redux'
import * as ActionTypes from '@actions/ActionTypes'

class Measurement extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: tr('Measurements'),
    });
    constructor(props) {
        super(props)
        this.state = {
            // activeSections: [],
            init: true,
            form: false,
            id: null,
            revision: null,
            name: '',
            notes: '',
            length_front: '0',
            length_back: '0',
            shoulder: '0',
            neck: '0',
            chest: '0',
            waist: '0',
            arm_length: '0',
            bicep: '0',
            wrist: '0',
            bottom: '0',
            cuff: '0',
            loose: '0',
        }
        this.firstLoadVariantions = false;
    }
    componentDidMount(){
        // this.onLogout = Global.EventEmitter.addListener(Constants.EventEmitterName.onLogout, this.sign_out)
        this.props.get_measurement({})
    }

    componentWillUnmount(){
        // this.onLogout.remove()
    }
    componentDidUpdate(prevProps) {
        // console.log('Measurement :: componentDidUpdate :: (prevProps) ',prevProps.type,this.props.type)
        if ( prevProps.is_error === false && prevProps.is_error !== this.props.is_error) {
            //alert(nextProps.message)
            //console.log(this.props.message);
            //Global.EventEmitter.emit(Constants.EventEmitterName.showToast,this.props.message)
            alert(this.props.message.replace(/<(?:.|\n)*?>/gm, ''));
        }

        if ((
            this.props.type === ActionTypes.SAVE_MEASUREMENT_SUCCESS ||
            this.props.type === ActionTypes.DELETE_MEASUREMENT_SUCCESS) && prevProps.type !== this.props.type) {
            //alert(this.props.message);
            // this.props.goBack()
            Global.EventEmitter.emit(Constants.EventEmitterName.showToast,this.props.message);
            this.setState({form:false},()=>{
                this.props.get_measurement({})
            })
            //this.props.navigation.navigate(Constants.Screen.SignIn,this.state)
        }
        if(prevProps.is_loading !== this.props.is_loading && this.props.is_loading === false){
            this.setState({init:false});
        }
    }
    // setSections = sections => {
    //     this.setState({
    //         activeSections: sections.includes(undefined) ? [] : sections,
    //     });
    // };

    // renderHeader = (field, i, isActive) => {
    //     return (
    //         <View
    //             key={`field_${i}`}
    //             style={[styles.accordion_header, styles.dev_border]}
    //         >
    //             <View  style={[styles.accordion_header_text_holder, styles.dev_border]} >
    //                 <Text
    //                     style={[styles.text, styles.accordion_header_text, styles.dev_border]}
    //                 >{attrib.name}</Text>
    //             </View>
    //             <View  style={[styles.accordion_header_icon_holder, styles.dev_border]} >
    //                 <Image
    //                     style={[ styles.accordion_header_icon]}
    //                     source={isActive ? Icons.chevron_down_darkg : Icons.chevron_up_darkg}
    //                 />
    //             </View>
    //         </View>
    //     );
    // };
    //
    // renderContent = (attrib, i, isActive) => {
    //     console.log("renderContent :: Begin ",attrib,"renderContent :: End ");
    //     // console.log("renderContent :: Begin ", i,"renderContent :: End ");
    //     // console.log("renderContent :: Begin ", isActive,"renderContent :: End ");
    //     return attrib.options_custom.map((op,j)=>{
    //         return (
    //             <TouchableOpacity
    //                 // elevation={1}
    //                 activeOpacity={0.5}
    //
    //                 onPress={() => {
    //                     // this.props.products[0].attributes[i].options_custom[j].selected = true;
    //                     // attr_ops_selected;
    //                     this.props.attribute_option_select(i,j);
    //                 }}
    //                 key={`attrib_ops_${i}_${j}`}
    //                 style={[styles.accordion_content, styles.dev_border]}
    //
    //             >
    //                 <View  style={[styles.accordion_content_radio_holder, styles.dev_border]} >
    //                     <View style={[styles.accordion_content_radio_wrapper, styles.dev_border]}>
    //                         {(op.selected)
    //                           ? <View style={[styles.accordion_content_radio_dot]} />
    //                           : null }
    //                     </View>
    //                 </View>
    //                 <View  style={[styles.accordion_content_text_holder, styles.dev_border]} >
    //                     <Text
    //                         style={[styles.text, styles.accordion_content_text, styles.dev_border]}
    //                     >{op.value}<Text>
    //                 </)View ? String(/Text>
    //                 </)View> : null
    //             </TouchableOpacity>
    //         );
    //     });
    //
    // }

    render() {
        // if (this.props.is_loading) {
        //     return (
        //         <View style={styles.loading}>
        //             <ActivityIndicator size="large" color={Colors.grey1}/>
        //         </View>
        //     );
        // }
        if(this.props.is_error && this.props.type === ActionTypes.GET_MEASUREMENT_FAIL){
            return(
                <View style={styles.loading}>
                    <Text style={[styles.text,styles.error]}>{this.props.message}</Text>
                </View>
            );
        }
        return (
            <SafeAreaView style={[styles.container, styles.dev_border]}>
                {Platform.OS === 'ios' && this.props.is_loading && this.state.init && <ActivityIndicator size="large" style={{marginVertical:20}} color={Colors.grey1}/>}
                <FlatList
                    style={{flex:1}}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.is_loading}
                            onRefresh={()=>{
                                this.props.get_measurement({})
                            }}
                        />
                    }
                    data={this.props.measurements}
                    keyExtractor={(item, index) => `measurement_${item.id}`}
                    renderItem={
                        ({item}) => {
                            // console.log(item)
                            return (
                                <View
                                    style={[styles.item, styles.dev_border]}
                                >
                                    <View  style={[styles.item_text_holder, styles.dev_border]} >
                                        <Text style={[styles.text, styles.item_text, styles.dev_border]}>{item.name}</Text>
                                    </View>
                                    <View  style={[styles.item_btn_holder, styles.dev_border]} >
                                        <TouchableOpacity
                                            style={[styles.item_btn, styles.dev_border]}
                                            activeOpacity={0.5}
                                            onPress={()=>{
                                                this.setState({
                                                    form:true,
                                                    id: item.id,
                                                    revision: item.revision,
                                                    name: item.name,
                                                    notes: item.notes,
                                                    length_front: item.length_front,
                                                    length_back: item.length_back,
                                                    shoulder: item.shoulder,
                                                    neck: item.neck,
                                                    chest: item.chest,
                                                    waist: item.waist,
                                                    arm_length: item.arm_length,
                                                    bicep: item.bicep,
                                                    wrist: item.wrist,
                                                    bottom: item.bottom,
                                                    cuff: item.cuff,
                                                    loose: item.loose,
                                                })
                                            }}
                                        >
                                            <Image source={Icons.edit_darkg} style={[styles.item_btn_icon, styles.dev_border]} />
                                        </TouchableOpacity>
                                    </View>
                                    <View  style={[styles.item_btn_holder, styles.dev_border]} >
                                        <TouchableOpacity
                                            style={[styles.item_btn, styles.dev_border]}
                                            activeOpacity={0.5}
                                            onPress={()=>{
                                                // this.props.onOpenPage(Constants.Screen.VendorCategory);
                                                // alert('Coming soon!')
                                                Alert.alert(
                                                    'Delete!',
                                                    'Are you sure?',
                                                    [
                                                        // {
                                                        //     text: 'Ask me later',
                                                        //     onPress: () => {
                                                        //         console.log('Ask me later pressed')
                                                        //     }
                                                        // },
                                                        {
                                                            text: 'Cancel',
                                                            onPress: () =>{
                                                                console.log('Cancel Pressed')
                                                            },
                                                            style: 'cancel',
                                                        },
                                                        {
                                                            text: 'OK',
                                                            onPress: () =>{
                                                                this.props.delete_measurement({
                                                                    id:item.id
                                                                })
                                                            }
                                                        },
                                                    ],
                                                    {cancelable: false},
                                                );
                                            }}
                                        >
                                            <Image source={Icons.delete_darkg} style={[styles.item_btn_icon, styles.dev_border]} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    }
                />



                <TouchableOpacity
                    style={[styles.float_btn, styles.dev_border]}
                    activeOpacity={0.5}
                    onPress={()=>{
                        this.setState({
                            form:true,
                            id: null,
                            revision: null,
                            name:'',
                            notes:'',
                            length_front:'0',
                            length_back:'0',
                            shoulder:'0',
                            neck:'0',
                            chest:'0',
                            waist:'0',
                            arm_length:'0',
                            bicep:'0',
                            wrist:'0',
                            bottom:'0',
                            cuff:'0',
                            loose:'0',
                        })
                    }}
                >
                    <Image source={Icons.plus_darkg} style={[styles.float_btn_icon, styles.dev_border]} />
                </TouchableOpacity>
                {
                    this.state.form &&
                    <View style={[styles.edit_container, styles.dev_border]}>
                        <ScrollView >
                            <View
                                style={[styles.form_field_holder_double, styles.dev_border]}
                            >
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('ID')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            editable={false}
                                            keyboardType={'numeric'}
                                            value={this.state.id ? String(this.state.id) : null}
                                            onChangeText={(val) => this.setState({ id:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Revision')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            editable={false}
                                            keyboardType={'numeric'}
                                            value={this.state.revision ? String(this.state.revision) : null}
                                            onChangeText={(val) => this.setState({ revision:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[styles.form_field_holder, styles.dev_border]}
                            >
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Name')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            value={this.state.name ? String(this.state.name) : null}
                                            onChangeText={(val) => this.setState({ name:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Notes')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            multiline={true}
                                            numberOfLines={3}
                                            value={this.state.notes ? String(this.state.notes) : null}
                                            onChangeText={(val) => this.setState({ notes:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[styles.form_field_holder_double, styles.dev_border]}
                            >
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Length Front')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.length_front ? String(this.state.length_front) : null}
                                            onChangeText={(val) => this.setState({ length_front:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Length Back')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.length_back ? String(this.state.length_back) : null}
                                            onChangeText={(val) => this.setState({ length_back:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[styles.form_field_holder_double, styles.dev_border]}
                            >
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Shoulder')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.shoulder ? String(this.state.shoulder) : null}
                                            onChangeText={(val) => this.setState({ shoulder:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Neck')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.neck ? String(this.state.neck) : null}
                                            onChangeText={(val) => this.setState({ neck:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[styles.form_field_holder_double, styles.dev_border]}
                            >
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Chest')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.chest ? String(this.state.chest) : null}
                                            onChangeText={(val) => this.setState({ chest:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Waist')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.waist ? String(this.state.waist) : null}
                                            onChangeText={(val) => this.setState({ waist:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[styles.form_field_holder_double, styles.dev_border]}
                            >
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Arm Length')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.arm_length ? String(this.state.arm_length) : null}
                                            onChangeText={(val) => this.setState({ arm_length:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Bicep')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.bicep ? String(this.state.bicep) : null}
                                            onChangeText={(val) => this.setState({ bicep:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[styles.form_field_holder_double, styles.dev_border]}
                            >
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Wrist')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.wrist ? String(this.state.wrist) : null}
                                            onChangeText={(val) => this.setState({ wrist:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Bottom')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.bottom ? String(this.state.bottom) : null}
                                            onChangeText={(val) => this.setState({ bottom:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[styles.form_field_holder_double, styles.dev_border]}
                            >
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Cuff')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.cuff ? String(this.state.cuff) : null}
                                            onChangeText={(val) => this.setState({ cuff:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.form_field, styles.dev_border]}
                                >
                                    <View style={[styles.label_holder, styles.dev_border]}>
                                        <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Loose')}</Text>
                                    </View>
                                    <View style={[styles.text_input_holder, styles.dev_border]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            value={this.state.loose ? String(this.state.loose) : null}
                                            onChangeText={(val) => this.setState({ loose:val })}
                                            style={[styles.text, styles.text_input , styles.dev_border]}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/*<Accordion
                                activeSections={this.state.activeSections}
                                sections={}
                                touchableComponent={TouchableOpacity}
                                expandMultiple={true}
                                renderHeader={this.renderHeader}
                                renderContent={this.renderContent}
                                duration={400}
                                onChange={this.setSections}
                            />

                                [
                                    {
                                        column: 'id',
                                        label:'ID',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'revision',
                                        label:'Revision',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'name',
                                        label:'Name',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'notes',
                                        label:'Notes',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'length_front',
                                        label:'Length Front',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'length_back',
                                        label:'Length Back',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'shoulder',
                                        label:'Shoulder',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'neck',
                                        label:'Neck',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'chest',
                                        label:'Chest',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'waist',
                                        label:'Waist',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'arm_length',
                                        label:'Arm Length',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'bicep',
                                        label:'Bicep',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'wrist',
                                        label:'Wrist',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'bottom',
                                        label:'Bottom',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'cuff',
                                        label:'Cuff',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                    {
                                        column: 'loose',
                                        label:'Loose',
                                        unit: 'inch',
                                        descriptions:'',
                                        images:[],
                                    },
                                ].map((obj,i)=>{
                                    return (
                                        <View
                                            key={`field_${i}`}
                                            style={[styles.form_field, styles.dev_border]}
                                        >
                                            <View style={[styles.label_holder, styles.dev_border]}>
                                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr(obj.label)}</Text>
                                            </View>
                                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                                <TextInput
                                                    editable={obj.column === 'id' || obj.column === 'revision' ? false : true}
                                                    keyboardType={obj.column === 'name' || obj.column === 'notes' ? 'default' : 'decimal-pad'}
                                                    value={this.state[obj ? String(this.state[obj) : null.column]}
                                                    onChangeText={(val) => this.setState({ [obj.column]:val })}
                                                    style={[styles.text, styles.text_input, , styles.dev_border]}
                                                />
                                            </View>
                                        </View>
                                    );
                                })
                            */}

                        </ScrollView>
                        <View style={[styles.form_btn_holder, styles.dev_border]}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => {
                                    let params = {
                                        id: this.state.id,
                                        revision: this.state.revision,
                                        name: this.state.name,
                                        notes: this.state.notes,
                                        length_front: this.state.length_front,
                                        length_back: this.state.length_back,
                                        shoulder: this.state.shoulder,
                                        neck: this.state.neck,
                                        chest: this.state.chest,
                                        waist: this.state.waist,
                                        arm_length: this.state.arm_length,
                                        bicep: this.state.bicep,
                                        wrist: this.state.wrist,
                                        bottom: this.state.bottom,
                                        cuff: this.state.cuff,
                                        loose: this.state.loose,
                                    }
                                    if(this.state.id){
                                        this.props.update_measurement(params);
                                    }
                                    else{
                                        this.props.store_measurement(params);
                                    }
                                }}
                                style={[styles.form_btn,  styles.form_btn_save, styles.dev_border]}
                            >
                                <Text
                                    style={[styles.text, styles.form_btn_text, styles.form_btn_text_save, styles.dev_border]}
                                >{tr("Save")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => {
                                    this.setState({
                                        form:false,
                                        id: null,
                                        revision: null,
                                        name:'',
                                        notes:'',
                                        length_front:'0',
                                        length_back:'0',
                                        shoulder:'0',
                                        neck:'0',
                                        chest:'0',
                                        waist:'0',
                                        arm_length:'0',
                                        bicep:'0',
                                        wrist:'0',
                                        bottom:'0',
                                        cuff:'0',
                                        loose:'0',
                                    })
                                }}
                                style={[styles.form_btn,  styles.form_btn_cancel, styles.dev_border]}
                            >
                                <Text
                                    style={[styles.text, styles.form_btn_text, styles.form_btn_text_cancel, styles.dev_border]}
                                >{tr("Cancel")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return {
        is_loading:state.measurementReducers.is_loading,
        is_requesting:state.measurementReducers.is_requesting,
        is_error:state.measurementReducers.is_error,
        message:state.measurementReducers.message,
        type:state.measurementReducers.type,
        measurements:state.measurementReducers.measurements
        // user:state.signInReducers.user,
        // is_logged_in:state.signInReducers.is_logged_in,
        // lang:state.settingsReducers.lang,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurement)

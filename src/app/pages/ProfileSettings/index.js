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

class ProfileSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // activeSections: [],
            password: null,

            email: null,
            first_name: null,
            last_name: null,

            billing_first_name: null,
            billing_last_name: null,
            billing_company: null,
            billing_address_1: null,
            billing_address_2: null,
            billing_city: null,
            billing_state: null,
            billing_postcode: null,
            billing_country: null,
            billing_email: null,
            billing_phone: null,

            shipping_first_name: null,
            shipping_last_name: null,
            shipping_company: null,
            shipping_address_1: null,
            shipping_address_2: null,
            shipping_city: null,
            shipping_state: null,
            shipping_postcode: null,
            shipping_country: null,

        }
    }
    componentDidMount(){
        // this.onLogout = Global.EventEmitter.addListener(Constants.EventEmitterName.onLogout, this.sign_out)
        // this.props.get_measurement({})
        if(this.props.is_logged_in){
            let {user} = this.props;
            this.setState({
                email: user.email || null,
                first_name: user.first_name || null,
                last_name: user.last_name || null,

                billing_first_name: user.billing.first_name || null,
                billing_last_name: user.billing.last_name || null,
                billing_company: user.billing.company || null,
                billing_address_1: user.billing.address_1 || null,
                billing_address_2: user.billing.address_2 || null,
                billing_city: user.billing.city || null,
                billing_state: user.billing.state || null,
                billing_postcode: user.billing.postcode || null,
                billing_country: user.billing.country || null,
                billing_email: user.billing.email || null,
                billing_phone: user.billing.phone || null,

                shipping_first_name: user.shipping.first_name || null,
                shipping_last_name: user.shipping.last_name || null,
                shipping_company: user.shipping.company || null,
                shipping_address_1: user.shipping.address_1 || null,
                shipping_address_2: user.shipping.address_2 || null,
                shipping_city: user.shipping.city || null,
                shipping_state: user.shipping.state || null,
                shipping_postcode: user.shipping.postcode || null,
                shipping_country: user.shipping.country || null,
            })
        }
    }

    componentWillUnmount(){
        // this.onLogout.remove()
    }
    componentDidUpdate(prevProps) {
        console.log('ProfileSettings :: componentDidUpdate :: (prevProps) ',prevProps.type,this.props.type)
        if ( prevProps.is_error === false && prevProps.is_error !== this.props.is_error) {
            //alert(nextProps.message)
            //console.log(this.props.message);
            //Global.EventEmitter.emit(Constants.EventEmitterName.showToast,this.props.message)
            alert(this.props.message.replace(/<(?:.|\n)*?>/gm, ''));
        }

        if ((
            this.props.type === ActionTypes.UPDATE_PROFILE_SUCCESS ||
            this.props.type === ActionTypes.UPDATE_PROFILE_SUCCESS) && prevProps.type !== this.props.type) {
            //alert(this.props.message);
            // this.props.goBack()
            Global.EventEmitter.emit(Constants.EventEmitterName.showToast,this.props.message);
            // this.setState({form:false},()=>{
            //     this.props.get_measurement({})
            // })
            //this.props.navigation.navigate(Constants.Screen.SignIn,this.state)
        }
    }


    render() {
        // if (this.props.is_loading) {
        //     return (
        //         <View style={styles.loading}>
        //             <ActivityIndicator size="large" color={Colors.grey1}/>
        //         </View>
        //     );
        // }
        // if(this.props.is_error && this.props.type === ActionTypes.UPDATE_PROFILE_FAIL){
        //     return(
        //         <View style={styles.loading}>
        //             <Text style={[styles.text,styles.error]}>{this.props.message}</Text>
        //         </View>
        //     );
        // }
        return (
            <SafeAreaView style={[styles.container, styles.dev_border]}>
                <ScrollView >
                    <View
                        style={[styles.form_field_holder_double, styles.dev_border]}
                    >
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('First name')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.first_name ? String(this.state.first_name) : null}
                                    onChangeText={(val) => this.setState({ first_name:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Last name')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.last_name ? String(this.state.last_name) : null}
                                    onChangeText={(val) => this.setState({ last_name:val })}
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
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Email')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.email ? String(this.state.email) : null}
                                    onChangeText={(val) => this.setState({ email:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Phone')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_phone ? String(this.state.billing_phone) : null}
                                    onChangeText={(val) => this.setState({ billing_phone:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={[styles.form_seperator, styles.dev_border]}
                    >
                    </View>
                    <View
                        style={[styles.form_field_header_holder, styles.dev_border]}
                    >
                        <Text style={[styles.text, styles.form_field_header, styles.dev_border]}>{tr('Change password')}</Text>
                    </View>
                    <View
                        style={[styles.form_field_holder_double, styles.dev_border]}
                    >
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('New password')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    secureEntry={true}
                                    value={this.state.password ? String(this.state.password) : null}
                                    onChangeText={(val) => this.setState({ password:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={[styles.form_seperator, styles.dev_border]}
                    >
                    </View>
                    <View
                        style={[styles.form_field_header_holder, styles.dev_border]}
                    >
                        <Text style={[styles.text, styles.form_field_header, styles.dev_border]}>{tr('Billing & Shipping')}</Text>
                    </View>
                    {/*<View
                        style={[styles.form_field_holder_double, styles.dev_border]}
                    >
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('First name')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_first_name ? String(this.state.billing_first_name) : null}
                                    onChangeText={(val) => this.setState({ billing_first_name:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Last name')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_last_name ? String(this.state.billing_last_name) : null}
                                    onChangeText={(val) => this.setState({ billing_last_name:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                    </View>*/}
                    <View
                        style={[styles.form_field_holder, styles.dev_border]}
                    >
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Company')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_company ? String(this.state.billing_company) : null}
                                    onChangeText={(val) => this.setState({ billing_company:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>

                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Address 1')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_address_1 ? String(this.state.billing_address_1) : null}
                                    onChangeText={(val) => this.setState({ billing_address_1:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Address 2')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_address_2 ? String(this.state.billing_address_2) : null}
                                    onChangeText={(val) => this.setState({ billing_address_2:val })}
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
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('City')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_city ? String(this.state.billing_city) : null}
                                    onChangeText={(val) => this.setState({ billing_city:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        {/*<View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('State')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_state ? String(this.state.billing_state) : null}
                                    onChangeText={(val) => this.setState({ billing_state:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>*/}
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Postcode')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_postcode ? String(this.state.billing_postcode) : null}
                                    onChangeText={(val) => this.setState({ billing_postcode:val })}
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
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Country')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_country ? String(this.state.billing_country) : null}
                                    onChangeText={(val) => this.setState({ billing_country:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                    </View>
                    {/*<View
                        style={[styles.form_field_holder_double, styles.dev_border]}
                    >
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Email')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_email ? String(this.state.billing_email) : null}
                                    onChangeText={(val) => this.setState({ billing_email:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>

                    </View>
                    <View
                        style={[styles.form_seperator, styles.dev_border]}
                    >
                    </View>
                    <View
                        style={[styles.form_field_header_holder, styles.dev_border]}
                    >
                        <Text style={[styles.text, styles.form_field_header, styles.dev_border]}>{tr('Shipping')}</Text>
                    </View>
                    <View
                        style={[styles.form_field_holder_double, styles.dev_border]}
                    >
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('First name')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.shipping_first_name ? String(this.state.shipping_first_name) : null}
                                    onChangeText={(val) => this.setState({ shipping_first_name:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Last name')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.shipping_last_name ? String(this.state.shipping_last_name) : null}
                                    onChangeText={(val) => this.setState({ shipping_last_name:val })}
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
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Company')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.shipping_company ? String(this.state.shipping_company) : null}
                                    onChangeText={(val) => this.setState({ shipping_company:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>

                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Address 1')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.shipping_address_1 ? String(this.state.shipping_address_1) : null}
                                    onChangeText={(val) => this.setState({ shipping_address_1:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Address 2')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.shipping_address_2 ? String(this.state.shipping_address_2) : null}
                                    onChangeText={(val) => this.setState({ shipping_address_2:val })}
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
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('City')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.shipping_city ? String(this.state.shipping_city) : null}
                                    onChangeText={(val) => this.setState({ shipping_city:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('State')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_state ? String(this.state.billing_state) : null}
                                    onChangeText={(val) => this.setState({ billing_state:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Postcode')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_postcode ? String(this.state.billing_postcode) : null}
                                    onChangeText={(val) => this.setState({ billing_postcode:val })}
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
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Country')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.billing_country ? String(this.state.billing_country) : null}
                                    onChangeText={(val) => this.setState({ billing_country:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                    </View>*/}

                </ScrollView>
                <View style={[styles.form_btn_holder, styles.dev_border]}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            let params = {
                                email: this.state.email,
                                first_name: this.state.first_name,
                                last_name: this.state.last_name,
                                billing:{
                                    first_name: this.state.first_name,
                                    last_name: this.state.last_name,
                                    company: this.state.billing_company,
                                    address_1: this.state.billing_address_1,
                                    address_2: this.state.billing_address_2,
                                    city: this.state.billing_city,
                                    state: this.state.billing_state,
                                    postcode: this.state.billing_postcode,
                                    country: this.state.billing_country,
                                    email: this.state.email,
                                    phone: this.state.billing_phone,
                                },
                                shipping:{
                                    first_name: this.state.first_name,
                                    last_name: this.state.last_name,
                                    company: this.state.billing_company,
                                    address_1: this.state.billing_address_1,
                                    address_2: this.state.billing_address_2,
                                    city: this.state.billing_city,
                                    state: this.state.billing_state,
                                    postcode: this.state.billing_postcode,
                                    country: this.state.billing_country,
                                }
                            }
                            if(this.state.password){
                                params.password = this.state.password
                            }

                            this.props.update_profile(params);
                        }}
                        style={[styles.form_btn,  styles.form_btn_save, styles.dev_border]}
                    >
                    {!(this.props.is_requesting) &&
                        <Text
                            style={[styles.text, styles.form_btn_text, styles.form_btn_text_save, styles.dev_border]}
                        >{tr("Save")}</Text>}
                    {(this.props.is_requesting) &&
                        <ActivityIndicator
                            style={[styles.text, styles.form_btn_text, styles.form_btn_text_save, styles.dev_border]}
                            color={Colors.grey1} />}
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return {
        is_loading:state.profileSettingsReducers.is_loading,
        is_requesting:state.profileSettingsReducers.is_requesting,
        is_error:state.profileSettingsReducers.is_error,
        message:state.profileSettingsReducers.message,
        type:state.profileSettingsReducers.type,
        // measurements:state.measurementReducers.measurements
        user:state.signInReducers.user,
        is_logged_in:state.signInReducers.is_logged_in,
        // lang:state.settingsReducers.lang,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)

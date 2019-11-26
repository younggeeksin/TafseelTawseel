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
} from 'react-native';
import styles from './style';
import { Icons, Global, Constants, Colors } from '@common';
// import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';
// import { UserInfo, SettingItem } from '@components'
// import Mailer from 'react-native-mail';

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '@actions/ActionTypes';

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            old_password: null,
            new_password: null,
            confirm_password: null
        };
    }
    componentDidMount() {}
    componentWillUnmount() {
        // this.onLogout.remove()
    }
    componentDidUpdate(prevProps) {
        console.log('ChangePassword :: componentDidUpdate :: (prevProps) ',prevProps.type,this.props.type)
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
        if(this.props.is_error && this.props.type === ActionTypes.GET_MEASUREMENT_FAIL){
            return(
                <View style={styles.loading}>
                    <Text style={[styles.text,styles.error]}>{this.props.message}</Text>
                </View>
            );
        }
        return (
            <SafeAreaView style={[styles.container, styles.dev_border]}>
                <View
                    style={[styles.form, styles.dev_border]}
                >

                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Old password')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.old_password ? String(this.state.old_password) : null}
                                    secureTextEntry={true}
                                    onChangeText={(val) => this.setState({ old_password:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('New password')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.new_password ? String(this.state.new_password) : null}
                                    secureTextEntry={true}
                                    onChangeText={(val) => this.setState({ new_password:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.form_field, styles.dev_border]}
                        >
                            <View style={[styles.label_holder, styles.dev_border]}>
                                <Text style={[styles.text, styles.label, styles.dev_border]}>{tr('Confirm password')}</Text>
                            </View>
                            <View style={[styles.text_input_holder, styles.dev_border]}>
                                <TextInput
                                    value={this.state.confirm_password ? String(this.state.confirm_password) : null}
                                    secureTextEntry={true}
                                    onChangeText={(val) => this.setState({ confirm_password:val })}
                                    style={[styles.text, styles.text_input , styles.dev_border]}
                                />
                            </View>
                        </View>

                </View>
                <View style={[styles.form_btn_holder, styles.dev_border]}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            let params = {
                                old_password: this.state.old_password,
                                new_password: this.state.new_password,
                                confirm_password: this.state.confirm_password,
                            }
                            this.props.store_measurement(params);
                        }}
                        style={[styles.form_btn,  styles.form_btn_save, styles.dev_border]}
                    >
                        <Text
                            style={[styles.text, styles.form_btn_text, styles.form_btn_text_save, styles.dev_border]}
                        >{tr("Save")}</Text>
                    </TouchableOpacity>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)

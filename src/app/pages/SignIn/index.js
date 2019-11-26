import React from 'react';
import {
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Text,
    TextInput
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './style';
// import { Text, Checkbox, Button } from '@components'

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '@actions/ActionTypes';
import { Icons, Global, Constants, Colors } from '@common';

class SignIn extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    state = {
        email: '',
        password: ''
    };
    sign_in = () => {
        //let { firstname, lastname, email, password } = this.state
        this.props.sign_in({
            username: this.state.email,
            password: this.state.password
        });
    };

    componentDidMount() {
        // console.log(this.store);
        this.setState({
            email: 'ignitebh@gmail.com',
            password: 'testing123'
        });
    }

    componentDidUpdate(prevProps) {
        //console.log('SignUp :: componentDidUpdate :: (prevProps) ',prevProps.type,this.props.type)
        if (
            prevProps.is_error === false &&
            prevProps.is_error !== this.props.is_error
        ) {
            //alert(nextProps.message)
            //console.log(this.props.message);
            //Global.EventEmitter.emit(Constants.EventEmitterName.showToast,this.props.message)
            alert(this.props.message.replace(/<(?:.|\n)*?>/gm, ''));
        }

        if (
            this.props.type === ActionTypes.SIGN_IN_SUCCESS &&
            prevProps.type !== this.props.type
        ) {
            //alert(this.props.message);
            this.props.navigation.goBack();
            // Global.EventEmitter.emit(
            //     Constants.EventEmitterName.showToast,
            //     global.tr('Welcome back') + ' ' + this.props.user.user_nicename
            // );
            //this.props.navigation.navigate(Constants.Screen.SignIn,this.state)
        }
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: '',
    //         password: '',
    //         isRememberMe: false
    //     }
    // }
    // sign_in = () => {
    //     let { email, password } = this.state
    //     this.isLogging = true
    //     this.props.sign_in(email, password)
    // }
    //
    // componentWillMount = () => {
    //     const { loginData } = this.props
    //     if (loginData) {
    //         this.setState({
    //             email: loginData.email,
    //             password: loginData.password,
    //             isRememberMe: loginData.isRememberMe
    //         })
    //     }
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.type == ActionTypes.SIGN_IN_FAIL && this.isLogging == true) {
    //         this.isLogging = false
    //         alert(nextProps.message)
    //     }
    //
    //     if (nextProps.type == ActionTypes.SIGN_IN_SUCCESS && this.isLogging == true) {
    //         this.isLogging = false
    //         var name = ""
    //         let customerInfo = nextProps.customerInfo
    //         if (customerInfo && customerInfo.first_name != undefined && customerInfo.first_name != "" && customerInfo.last_name != undefined && customerInfo.last_name != "") {
    //             name = customerInfo.first_name + " " + customerInfo.last_name
    //         } else if (customerInfo) {
    //             name = customerInfo.email
    //         }
    //         Global.EventEmitter.emit(Constants.EventEmitterName.showToast, tr('Welcome back') + ' ' + name)
    //         const { isRememberMe, email, password } = this.state
    //         let loginData = {
    //             email: isRememberMe ? email : '',
    //             password: isRememberMe ? password : '',
    //             isRememberMe
    //         }
    //         this.props.storeSignIn(loginData)
    //         this.props.goBack()
    //     }
    // }

    render() {
        return (
            <SafeAreaView style={[styles.container, styles.dev_border]}>
                <ScrollView style={[styles.dev_border]}>
                    <View style={[styles.content, styles.dev_border]}>
                        <TouchableOpacity
                            style={[styles.btn_close, styles.dev_border]}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <FastImage
                                source={Icons.cross_lightg}
                                style={[styles.close_icon, styles.dev_border]}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </TouchableOpacity>

                        <View style={[styles.logo_holder, styles.dev_border]}>
                            <FastImage
                                source={Icons.logo}
                                style={[styles.logo, styles.dev_border]}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>

                        <View
                            style={[
                                styles.text_input_container,
                                styles.dev_border
                            ]}
                        >
                            <View
                                style={[
                                    styles.text_input_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.login}
                                    style={[
                                        styles.text_input_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View
                                style={[
                                    styles.text_input_holder,
                                    styles.dev_border
                                ]}
                            >
                                <TextInput
                                    placeholder={global.tr('Email')}
                                    value={this.state.email}
                                    onChangeText={email =>
                                        this.setState({ email })
                                    }
                                    style={[
                                        styles.text,
                                        styles.text_input,
                                        styles.text_email,
                                        styles.dev_border
                                    ]}
                                    placeholderTextColor={Colors.bg1_label_font}
                                />
                            </View>
                        </View>

                        <View
                            style={[
                                styles.text_input_container,
                                styles.dev_border
                            ]}
                        >
                            <View
                                style={[
                                    styles.text_input_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.password}
                                    style={[
                                        styles.text_input_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View
                                style={[
                                    styles.text_input_holder,
                                    styles.dev_border
                                ]}
                            >
                                <TextInput
                                    placeholder={global.tr('Password')}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText={password =>
                                        this.setState({ password })
                                    }
                                    style={[
                                        styles.text,
                                        styles.text_input,
                                        styles.text_password,
                                        styles.dev_border
                                    ]}
                                    placeholderTextColor={Colors.bg1_label_font}
                                />
                            </View>
                        </View>

                        <View
                            style={[
                                styles.remember_me_holder,
                                styles.dev_border
                            ]}
                        >
                            {/*<TouchableOpacity
                                // elevation={1}
                                activeOpacity={0.5}
                                onPress={() => {
                                    this.setState({ isRememberMe: !isRememberMe })
                                }}
                                style={[styles.remember_me, styles.dev_border]}

                            >
                                <View  style={[styles.remember_me_check_box_holder, styles.dev_border]} >
                                    <View style={[styles.remember_me_check_box_wrapper, styles.dev_border]}>
                                        {(isRememberMe)
                                          ? <FastImage source={Icons.tick_lightg} style={[styles.remember_me_check_box_icon, styles.dev_border]} />
                                          : null }
                                    </View>
                                </View>
                                <View  style={[styles.remember_me_text_holder, styles.dev_border]} >
                                    <Text
                                        style={[styles.text, styles.remember_me_text, styles.dev_border]}
                                    >{tr("Remember me")}</Text>
                                </View>
                            </TouchableOpacity>*/}
                            <TouchableOpacity
                                // elevation={1}
                                activeOpacity={0.5}
                                onPress={() => {}}
                                style={[
                                    styles.forgot_password,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.forgot_password_text,
                                        styles.dev_border
                                    ]}
                                >
                                    {global.tr('Forgot password?')}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={[
                                styles.btn,
                                styles.btn_sign_in,
                                styles.dev_border
                            ]}
                            disabled={this.props.is_requesting}
                            onPress={this.sign_in}
                            activeOpacity={0.5}
                        >
                            {!this.props.is_requesting && (
                                <Text
                                    style={[
                                        styles.text,
                                        styles.btn_sign_in_text,
                                        styles.dev_border
                                    ]}
                                >
                                    {global.tr('Sign In')}
                                </Text>
                            )}
                            {this.props.is_requesting && (
                                <ActivityIndicator color={Colors.grey1} />
                            )}
                        </TouchableOpacity>

                        <View
                            style={[
                                styles.sign_up_container,
                                styles.dev_border
                            ]}
                        >
                            <Text
                                style={[
                                    styles.text,
                                    styles.sign_up_text,
                                    styles.dev_border
                                ]}
                            >
                                {global.tr('Don\'t have an account?')}
                            </Text>
                            <TouchableOpacity
                                style={[
                                    styles.btn,
                                    styles.btn_sign_up,
                                    styles.dev_border
                                ]}
                                disabled={false}
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        Constants.Screen.SignUp
                                    )
                                }
                                activeOpacity={0.5}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.btn_sign_up_text,
                                        styles.dev_border
                                    ]}
                                >
                                    {global.tr('Sign Up')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
    return {
        type: state.signInReducers.type,
        is_loading: state.signInReducers.is_loading,
        is_requesting: state.signInReducers.is_requesting,
        is_error: state.signInReducers.is_error,
        message: state.signInReducers.message,
        user: state.signInReducers.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

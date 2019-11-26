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

class SignUp extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    });
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    };
    sign_up = () => {
        //let { firstname, lastname, email, password } = this.state
        this.props.sign_up(this.state);
    };

    componentDidMount() {
        // this.setState({
        //     firstname: 'Aitisam@#$%',
        //     lastname: '#$%DFsd',
        //     email: 'aitisam@ignitebh.com',
        //     password: 'test123'
        // })
    }

    componentDidUpdate(prevProps) {
        // console.log('SignUp :: componentDidUpdate :: (prevProps) ',prevProps.type,this.props.type)
        if (
            prevProps.is_error === false &&
            prevProps.is_error !== this.props.is_error
        ) {
            //alert(nextProps.message)
            //console.log(this.props.message);
            //Global.EventEmitter.emit(Constants.EventEmitterName.showToast,this.props.message)
            alert(this.props.message);
        }

        if (
            this.props.type === ActionTypes.SIGN_UP_SUCCESS &&
            prevProps.type !== this.props.type
        ) {
            alert(this.props.message);
            //this.props.goBack()
            this.props.navigation.navigate(Constants.Screen.SignIn, this.state);
        }
    }

    render() {
        let { goBack } = this.props;
        // console.log('SignUp :: render :: ',this.props);
        return (
            <SafeAreaView style={[styles.container, styles.dev_border]}>
                <ScrollView style={[{ flex: 1 }, styles.dev_border]}>
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
                                    source={Icons.user_name_lightg}
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
                                    placeholder={global.tr('First Name')}
                                    value={this.state.firstname}
                                    onChangeText={firstname =>
                                        this.setState({ firstname })
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
                                {/*<FastImage source={Icons.password} style={[styles.text_input_icon, styles.dev_border]} />*/}
                            </View>
                            <View
                                style={[
                                    styles.text_input_holder,
                                    styles.dev_border
                                ]}
                            >
                                <TextInput
                                    placeholder={global.tr('Last Name')}
                                    value={this.state.lastname}
                                    onChangeText={lastname =>
                                        this.setState({ lastname })
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
                                        styles.text_password,
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

                        <TouchableOpacity
                            style={[
                                styles.btn,
                                styles.btn_sign_up,
                                styles.dev_border
                            ]}
                            disabled={this.props.is_requesting}
                            onPress={this.sign_up}
                            activeOpacity={0.5}
                        >
                            {!this.props.is_requesting && (
                                <Text
                                    style={[
                                        styles.text,
                                        styles.btn_sign_up_text,
                                        styles.dev_border
                                    ]}
                                >
                                    {global.tr('Sign Up')}
                                </Text>
                            )}
                            {this.props.is_requesting && (
                                <ActivityIndicator color={Colors.grey1} />
                            )}
                        </TouchableOpacity>

                        <View
                            style={[
                                styles.sign_in_container,
                                styles.dev_border
                            ]}
                        >
                            <Text
                                style={[
                                    styles.text,
                                    styles.sign_in_text,
                                    styles.dev_border
                                ]}
                            >
                                {global.tr('Already have an account?')}
                            </Text>
                            <TouchableOpacity
                                style={[
                                    styles.btn,
                                    styles.btn_sign_in,
                                    styles.dev_border
                                ]}
                                disabled={false}
                                onPress={() => {}}
                                activeOpacity={0.5}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.btn_sign_in_text,
                                        styles.dev_border
                                    ]}
                                >
                                    {global.tr('Sign In')}
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
        // type: authReducers.type,
        // message: authReducers.message,
        type: state.signUpReducers.type,
        is_loading: state.signUpReducers.is_loading,
        is_requesting: state.signUpReducers.is_requesting,
        is_error: state.signUpReducers.is_error,
        message: state.signUpReducers.message
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

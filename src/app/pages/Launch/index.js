import React from 'react';
import {
    View,
    ActivityIndicator,
    I18nManager,
    Platform,
    Text,
    SafeAreaView,
    Image
} from 'react-native';
import styles from './style';
// import { Text, SafeAreaView } from '@components';

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
// import AsyncStorage from '@react-native-community/async-storage';
import * as ActionTypes from '@actions/ActionTypes';

//import OneSignal from 'react-native-onesignal';
import {Colors, Config } from '@common';

class Launch extends React.Component {
    componentDidMount() {
        console.log('Launch :: componentDidMount');
        console.log(this.store);
        // let lang = this.props.lang;
        // if (lang) {
        //         __.locale = lang;
        this.props.showHome();
        // }
        // else {
        //         this.props.setLanguage();
        // }
        //OneSignal.init(Config.OneSignalAppId);
        // AsyncStorage.getItem('ig_token')
        // .then(
        //         (token) => {
        //                 AsyncStorage.getItem('ig_token_type')
        //                 .then(
        //                         (token_type) => {
        //                                 if(token && token_type){
        //                                         // Add Check here to see the token is expired or not;
        //                                         this.props.validate_token();
        //
        //                                 }
        //                                 else{
        //                                         this.props.internal_login();
        //                                 }
        //                         }
        //                 );
        //         }
        // );
        /*setTimeout(
                () => {

                },
                Platform.OS == "ios" ? 0 : 1000
        );*/
    }
    componentWillUnmount() {
        console.log('Launch :: componentWillUnmount');
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        // if (this.props.is_success !== prevProps.is_success) {
        //         let lang = this.props.lang;
        //         if (lang) {
        //                 __.locale = lang;
        //                 this.props.showHome();
        //         }
        //         else {
        //                 this.props.setLanguage();
        //         }
        // }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/*<Image
                source={require("@assets/icons/splash.png")}
                style={styles.image}
                />*/}
                <ActivityIndicator size="large" color={Colors.bg1} />
            </SafeAreaView>
        );
    }
}

Launch.defaultProps = {
    lang: false
};

function mapStateToProps(state) {
    // console.log(state.internalReducers);
    return {
        is_success: state.internalReducers.is_success,
        lang: state.settingsReducers.lang
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Launch);

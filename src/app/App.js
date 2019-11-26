import React from 'react';
import { StatusBar, View } from 'react-native';
import Router from './Router';
import { Constants, Global, Colors } from '@common';
// import I18n from 'react-native-i18n'
// import Drawer from '@libs/drawer';
import { Toast } from '@components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '@actions';
import { NavigationActions } from 'react-navigation';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}

    showToast = msg => {
        this.toast.showMessage(msg);
    };

    componentWillUnmount() {}

    onOpenPage = item => {
        NavigationActions.navigate(item);
        // Global.EventEmitter.emit(Constants.EventEmitterName.OpenPage, item)
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={Colors.grey1_dark}
                    barStyle="light-content"
                />
                <Router />
                <Toast
                    position={'bottom'}
                    ref={component => (this.toast = component)}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    // console.log("state.vendorListReducers",state.vendorListReducers);
    return {
        user: state.signInReducers.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

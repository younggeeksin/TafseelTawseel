import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './style';

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '@actions/ActionTypes';
// import { NavigationActions } from 'react-navigation';

import { Config, Constants, Global, Colors, Icons } from '@common';
import { NavButton } from '@components';

class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'الخياطين',
        headerLeft: (
            <NavButton
                icon={Icons.menu_lightg}
                style={{ marginLeft: 10 }}
                onPress={() => navigation.toggleDrawer()}
            />
        )
    });
    constructor(props) {
        super(props);
        // this.state = {
        //     init: true
        // };
    }
    componentDidMount() {
        // console.log('Home :: componentDidMount', global.internal_token);
        this.props.get_vendors_list();
    }
    componentWillUnmount() {
        // console.log('Home :: componentWillUnmount');
    }
    componentDidUpdate(prevProps) {
        if (prevProps.message !== this.props.message) {
            if (this.props.message === 'Expired token') {
                this.props.sign_out();
                this.props.get_vendors_list();
            }
        }
        // if (
        //     prevProps.is_loading !== this.props.is_loading &&
        //     this.props.is_loading === false
        // ) {
        //     this.setState({ init: false });
        // }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.props.is_error && (
                    <View style={styles.loading}>
                        <Text style={[styles.text, styles.error]}>
                            {this.props.message}
                        </Text>
                    </View>
                )}
                <FlatList
                    data={this.props.vendors}
                    keyExtractor={(item, index) => `vid_${item.term_id}`}
                    ItemSeparatorComponent={() => (
                        <View style={[styles.separator, styles.dev_border]} />
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.is_loading}
                            onRefresh={() => {
                                this.props.get_vendors_list();
                            }}
                        />
                    }
                    renderItem={({ item }) => {
                        // console.log(item)
                        return (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => {
                                    // console.log('Vendor Click:: ', item);
                                    this.props.navigation.navigate(
                                        Constants.Screen.VendorCategory,
                                        { item }
                                    );
                                    // const params = {
                                    //     routeName: 'Home',
                                    //     action: NavigationActions.navigate({
                                    //         params: item,
                                    //         routeName:
                                    //             Constants.Screen.VendorCategory
                                    //     })
                                    // };
                                    // console.log(
                                    //     'Vendor Click params :: ',
                                    //     params
                                    // );
                                    // const navigateAction = NavigationActions.navigate(
                                    //     params
                                    // );
                                    // this.props.navigation.dispatch(
                                    //     navigateAction
                                    // );
                                }}
                                style={[styles.item_holder, styles.dev_border]}
                            >
                                <View style={[styles.item, styles.dev_border]}>
                                    <View
                                        style={[
                                            styles.logo_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <FastImage
                                            style={[
                                                styles.logo,
                                                styles.dev_border
                                            ]}
                                            source={{
                                                uri: item.ig_meta_data.logo
                                            }}
                                            resizeMode={
                                                FastImage.resizeMode.cover
                                            }
                                        />
                                    </View>
                                    <View
                                        style={[
                                            styles.name_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.text,
                                                styles.name,
                                                styles.dev_border
                                            ]}
                                        >
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </SafeAreaView>
        );
    }
}

// Home.defaultProps = {
//     vendors:[],
//     init:true,
// };

function mapStateToProps(state) {
    // console.log("state.vendorListReducers",state.vendorListReducers);
    return {
        is_loading: state.vendorListReducers.loading,
        vendors: state.vendorListReducers.vendors,
        is_error: state.vendorListReducers.is_error,
        message: state.vendorListReducers.message,
        lang: state.settingsReducers.lang
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

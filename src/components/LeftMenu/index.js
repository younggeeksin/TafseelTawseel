import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ScrollView
    // FlatList,
    // ImageBackground,
} from 'react-native';
import styles from './style';
import FastImage from 'react-native-fast-image';

// import { Text } from '@components'
import { Icons, Constants, Colors, Utils, Languages } from '@common';

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '@actions/ActionTypes';
import { NavigationActions } from 'react-navigation';

// import { LeftMenuItem } from '@components'

class LeftMenu extends React.Component {
    render() {
        // let is_logged_in = !Utils.isEmpty(this.props.user);
        return (
            <SafeAreaView style={[styles.container, styles.dev_border]}>
                <ScrollView>
                    <View style={[styles.header_holder, styles.dev_border]}>
                        <View
                            style={[styles.header_content, styles.dev_border]}
                        >
                            <View
                                style={[
                                    styles.avatar_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.user_name_yellow}
                                    style={[styles.avatar, styles.dev_border]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            {this.props.is_logged_in ? (
                                <Text
                                    style={[
                                        styles.text,
                                        styles.display_name,
                                        styles.dev_border
                                    ]}
                                >
                                    {this.props.user.user_display_name}
                                </Text>
                            ) : (
                                <Text
                                    style={[
                                        styles.text,
                                        styles.display_name,
                                        styles.dev_border
                                    ]}
                                >
                                    خوش آمد
                                </Text>
                            )}
                            {!this.props.is_logged_in && (
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={[
                                        styles.btn_sign_in,
                                        styles.dev_border
                                    ]}
                                    onPress={() => {
                                        this.props.navigation.navigate(
                                            Constants.Screen.SignIn
                                        );
                                    }}
                                >
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.btn_sign_in_text,
                                            styles.dev_border
                                        ]}
                                    >
                                        {Languages.ar['Sign In']} /{' '}
                                        {Languages.ar['Sign Up']}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <View style={[styles.content_holder, styles.dev_border]}>
                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.props.navigation.navigate(
                                    Constants.Screen.Home
                                );
                                // NavigationActions.navigate(Constants.Screen.Home,{},'Home2');
                                // const navigateAction = NavigationActions.navigate(
                                //     {
                                //     routeName: Constants.Screen.Home,
                                //
                                //     params: {},
                                //
                                //     action: NavigationActions.navigate({ routeName: 'Home2' }),
                                // });
                                //
                                // this.props.navigation.dispatch(navigateAction);
                            }}
                        >
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.tailors_lightg}
                                    style={[
                                        styles.menu_item_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View
                                style={[
                                    styles.menu_item_text_holder,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.menu_item_text,
                                        styles.dev_border
                                    ]}
                                >
                                    الخياطي
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/*<TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={()=>{
                                //this.props.onOpenPage(Constants.Screen.Home);
                                alert('Coming soon!')
                            }}
                        >
                            <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                                <FastImage source={Icons.bookings_lightg} style={[styles.menu_item_icon, styles.dev_border]} />
                            </View>
                            <View  style={[styles.menu_item_text_holder, styles.dev_border]} >
                                <Text style={[styles.text, styles.menu_item_text, styles.dev_border]}>{tr('Bookings')}</Text>
                            </View>
                        </TouchableOpacity>*/}
                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={() => {
                                // console.log(this.props.navigation);
                                if (this.props.is_logged_in) {
                                    // NavigationActions.navigate(Constants.Screen.MyProfile)
                                    this.props.navigation.navigate(
                                        Constants.Screen.MyProfile
                                    );
                                    // const navigateAction = NavigationActions.navigate({
                                    //     routeName: 'Profile',
                                    //
                                    //     params: {},
                                    //
                                    //     action: NavigationActions.navigate({ routeName: Constants.Screen.MyProfile }),
                                    // });
                                    //
                                    // this.props.navigation.dispatch(navigateAction);
                                } else {
                                    this.props.navigation.navigate(
                                        Constants.Screen.SignIn
                                    );
                                    // const navigateAction = NavigationActions.navigate({
                                    //     routeName: 'Profile',
                                    //
                                    //     params: {},
                                    //
                                    //     action: NavigationActions.navigate({ routeName: Constants.Screen.SignIn }),
                                    // });
                                    //
                                    // this.props.navigation.dispatch(navigateAction);
                                }
                            }}
                        >
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.user_name_lightg}
                                    style={[
                                        styles.menu_item_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View
                                style={[
                                    styles.menu_item_text_holder,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.menu_item_text,
                                        styles.dev_border
                                    ]}
                                >
                                    الملف الشخص
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={() => {
                                //this.props.onOpenPage(Constants.Screen.VendorCategory);
                                alert('Coming soon!');
                            }}
                        >
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.cart_lightg}
                                    style={[
                                        styles.menu_item_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View
                                style={[
                                    styles.menu_item_text_holder,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.menu_item_text,
                                        styles.dev_border
                                    ]}
                                >
                                    عربة التسو
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/*}    <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={()=>{
                                //this.props.onOpenPage(Constants.Screen.VendorCategory);
                                alert('Coming soon!')
                            }}
                        >
                            <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                                <FastImage source={Icons.setting_lightg} style={[styles.menu_item_icon, styles.dev_border]} />
                            </View>
                            <View  style={[styles.menu_item_text_holder, styles.dev_border]} >
                                <Text style={[styles.text, styles.menu_item_text, styles.dev_border]}>{tr('Settings')}</Text>
                            </View>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={() => {
                                //this.props.onOpenPage(Constants.Screen.VendorCategory);
                                alert('Coming soon!');
                            }}
                        >
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.info_lightg}
                                    style={[
                                        styles.menu_item_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View
                                style={[
                                    styles.menu_item_text_holder,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.menu_item_text,
                                        styles.dev_border
                                    ]}
                                >
                                    حول
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={() => {
                                //this.props.onOpenPage(Constants.Screen.VendorCategory);
                                this.props.sign_out();
                            }}
                        >
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.logout_lightg}
                                    style={[
                                        styles.menu_item_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <View
                                style={[
                                    styles.menu_item_text_holder,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.menu_item_text,
                                        styles.dev_border
                                    ]}
                                >
                                    الخروج
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

// LeftMenu.defaultProps = {
//     categories: [],
//     customerInfo: null
// }

function mapStateToProps(state) {
    return {
        // categories: categoriesReducers.categories,
        // customerInfo: authReducers.customerInfo
        user: state.signInReducers.user,
        is_logged_in: state.signInReducers.is_logged_in
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftMenu);

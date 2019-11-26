import React from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Text
    // Share,
    // Linking,
    // Alert
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './style';

import { Icons, Global, Constants } from '@common';
import { NavButton } from '@components';
// import Mailer from 'react-native-mail';

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '@actions/ActionTypes';

class MyProfile extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: global.tr('My Profile'),
        headerLeft: (
            <NavButton
                icon={Icons.menu_lightg}
                style={{ marginLeft: 10 }}
                onPress={() => navigation.toggleDrawer()}
            />
        )
    });

    componentDidMount() {
        // this.onLogout = Global.EventEmitter.addListener(Constants.EventEmitterName.onLogout, this.sign_out)
    }

    componentWillUnmount() {
        // this.onLogout.remove()
    }

    render() {
        //let { showWishList, showLanguages, showMyAddress, showFeedback, showMyOrders, customerInfo, signIn } = this.props
        return (
            <SafeAreaView style={[styles.container, styles.dev_border]}>
                <ScrollView style={[{ flex: 1 }, styles.dev_border]}>
                    <View style={[styles.avatar_holder, styles.dev_border]}>
                        <FastImage
                            source={Icons.user_name_yellow}
                            style={[styles.avatar, styles.dev_border]}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    <View style={[styles.name_holder, styles.dev_border]}>
                        {this.props.is_logged_in ? (
                            <Text
                                style={[
                                    styles.text,
                                    styles.name,
                                    styles.dev_border
                                ]}
                            >
                                {this.props.user.user_display_name}
                            </Text>
                        ) : (
                            <Text
                                style={[
                                    styles.text,
                                    styles.name,
                                    styles.dev_border
                                ]}
                            >
                                {global.tr('Welcome')}
                            </Text>
                        )}
                    </View>
                    <View style={[styles.content_holder, styles.dev_border]}>
                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.props.navigation.navigate(
                                    Constants.Screen.Measurement
                                );
                                //alert('Coming soon!')
                            }}
                        >
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.measurement_darkg}
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
                                    {global.tr('Measurements')}
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={
                                        this.props.lang === 'ar'
                                            ? Icons.chevron_left_darkg
                                            : Icons.chevron_right_darkg
                                    }
                                    style={[
                                        styles.menu_item_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
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
                                    source={Icons.order_darkg}
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
                                    {global.tr('Orders')}
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={
                                        this.props.lang === 'ar'
                                            ? Icons.chevron_left_darkg
                                            : Icons.chevron_right_darkg
                                    }
                                    style={[
                                        styles.menu_item_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </TouchableOpacity>

                        {/*<TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={()=>{
                                //this.props.onOpenPage(Constants.Screen.VendorCategory);
                                alert('Coming soon!')
                            }}
                        >
                            <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                                <FastImage source={Icons.location_darkg} style={[styles.menu_item_icon, styles.dev_border]} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View  style={[styles.menu_item_text_holder, styles.dev_border]} >
                                <Text style={[styles.text, styles.menu_item_text, styles.dev_border]}>{tr('Addresses')}</Text>
                            </View>
                            <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                                <FastImage source={(this.props.lang === 'ar' ? Icons.chevron_left_darkg :Icons.chevron_right_darkg)} style={[styles.menu_item_icon, styles.dev_border]} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </TouchableOpacity>



                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={()=>{
                                //this.props.onOpenPage(Constants.Screen.VendorCategory);
                                alert('Coming soon!')
                            }}
                        >
                            <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                                <FastImage source={Icons.bookings_darkg} style={[styles.menu_item_icon, styles.dev_border]} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View  style={[styles.menu_item_text_holder, styles.dev_border]} >
                                <Text style={[styles.text, styles.menu_item_text, styles.dev_border]}>{tr('Bookings')}</Text>
                            </View>
                            <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                                <FastImage source={(this.props.lang === 'ar' ? Icons.chevron_left_darkg :Icons.chevron_right_darkg)} style={[styles.menu_item_icon, styles.dev_border]} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={()=>{
                                //this.props.onOpenPage(Constants.Screen.VendorCategory);
                                alert('Coming soon!')
                            }}
                        >
                            <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                                <FastImage source={Icons.star_filled_darkg} style={[styles.menu_item_icon, styles.dev_border]} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View  style={[styles.menu_item_text_holder, styles.dev_border]} >
                                <Text style={[styles.text, styles.menu_item_text, styles.dev_border]}>{tr('Starred')}</Text>
                            </View>
                            <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                                <FastImage source={(this.props.lang === 'ar' ? Icons.chevron_left_darkg :Icons.chevron_right_darkg)} style={[styles.menu_item_icon, styles.dev_border]} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={[styles.menu_item, styles.dev_border]}
                           activeOpacity={0.5}
                           onPress={()=>{
                               this.props.navigation.navigate(Constants.Screen.ChangePassword);
                           }}
                       >
                           <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                               <FastImage source={Icons.setting_darkg} style={[styles.menu_item_icon, styles.dev_border]} resizeMode={FastImage.resizeMode.contain} />
                           </View>
                           <View  style={[styles.menu_item_text_holder, styles.dev_border]} >
                               <Text style={[styles.text, styles.menu_item_text, styles.dev_border]}>{tr('Change password')}</Text>
                           </View>
                           <View  style={[styles.menu_item_icon_holder, styles.dev_border]} >
                               <FastImage source={(this.props.lang === 'ar' ? Icons.chevron_left_darkg :Icons.chevron_right_darkg)} style={[styles.menu_item_icon, styles.dev_border]} resizeMode={FastImage.resizeMode.contain} />
                           </View>
                       </TouchableOpacity>
                        */}

                        <TouchableOpacity
                            style={[styles.menu_item, styles.dev_border]}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.props.navigation.navigate(
                                    Constants.Screen.ProfileSettings
                                );
                            }}
                        >
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={Icons.setting_darkg}
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
                                    {global.tr('Settings')}
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.menu_item_icon_holder,
                                    styles.dev_border
                                ]}
                            >
                                <FastImage
                                    source={
                                        this.props.lang === 'ar'
                                            ? Icons.chevron_left_darkg
                                            : Icons.chevron_right_darkg
                                    }
                                    style={[
                                        styles.menu_item_icon,
                                        styles.dev_border
                                    ]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
// <UserInfo signIn={signIn} />
// <View style={styles.Group}>
//     {customerInfo && <SettingItem icon={Icons.Shipping} title={tr('My Orders')} onPress={showMyOrders} />}
//     {customerInfo && <SettingItem icon={Icons.Address} title={tr('My Address Book')} onPress={showMyAddress} />}
//     <SettingItem icon={Icons.FavoriteSelected} title={tr('My WishList')} onPress={showWishList} />
// </View>
// <View style={styles.Group}>
//     <SettingItem icon={Icons.Feedback} title={tr('Feedback')} onPress={this.handleEmail} />
//     <SettingItem icon={Icons.Language} title={tr('Change Language')} onPress={showLanguages} />
// </View>
// <View style={styles.Group}>
//     <SettingItem icon={Icons.Share} title={tr('Share App')} onPress={this.shareApp} />
//     <SettingItem icon={Icons.Star} title={tr('Rate App')} onPress={this.rateApp} />
//     {customerInfo && <SettingItem icon={Icons.SignOut} title={tr('Sign Out')} onPress={this.signOut} />}
// </View>
function mapStateToProps(state) {
    return {
        user: state.signInReducers.user,
        is_logged_in: state.signInReducers.is_logged_in,
        lang: state.settingsReducers.lang
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProfile);

// import React from 'react';
// import { Image } from 'react-native';
import { LeftMenu } from '@components';

import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Constants, Colors } from '@common';

import SignInScreen from './pages/SignIn';
import SignUpScreen from './pages/SignUp';

import HomeScreen from './pages/Home';
import VendorCategoryScreen from './pages/VendorCategory';
import ProductsByCategoryScreen from './pages/ProductsByCategory';

import DetailScreen from './pages/Detail';
import DetailCompositeScreen from './pages/DetailComposite';

import MyProfileScreen from './pages/MyProfile';

import MeasurementScreen from './pages/Measurement';
import ProfileSettingsScreen from './pages/ProfileSettings';
import ChangePasswordScreen from './pages/ChangePassword';

const defaultNavigationOptions = {
    gesturesEnabled: false,
    headerStyle: {
        backgroundColor: Colors.bg1
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        //fontWeight: 'bold',
        color: Colors.mango,
        fontFamily: Constants.FontFamily,
        fontWeight: '200',
        fontSize: 20,
        elevation: 0,
        shadowOpacity: 0,
        textAlign: 'center',
        width: '70%'
    },
    headerBackTitleStyle: {
        fontFamily: Constants.FontFamily
    }
};

const TailorsStack = createStackNavigator(
    {
        Home2: {
            screen: HomeScreen
        },
        VendorCategory: {
            screen: VendorCategoryScreen
        },
        Detail: {
            screen: DetailScreen
        },
        DetailComposite: {
            screen: DetailCompositeScreen
        },
        ProductsByCategory: {
            screen: ProductsByCategoryScreen
        }
    },
    {
        initialRouteName: 'Home2',
        //initialRouteName: "ProfileSettings",
        // initialRouteParams:{
        //     product:{
        //         vendor_id:'19',
        //         vendor_name:'إجنايت لتصميم البرامج',
        //         product_id:205
        //     }
        // },
        defaultNavigationOptions: defaultNavigationOptions
    }
);

const ProfileStack = createStackNavigator(
    {
        MyProfile: {
            screen: MyProfileScreen
        },
        Measurement: {
            screen: MeasurementScreen
        },
        ProfileSettings: {
            screen: ProfileSettingsScreen
        },
        ChangePassword: {
            screen: ChangePasswordScreen
        },
    },
    {
        initialRouteName: 'MyProfile',
        defaultNavigationOptions: defaultNavigationOptions
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        Home: TailorsStack,
        Profile: ProfileStack,
        SignIn: {
            screen: SignInScreen
        },
        SignUp: {
            screen: SignUpScreen
        }
    },
    {
        contentComponent: LeftMenu,
        hideStatusBar: false,
        drawerPosition: 'right',
        drawerBackgroundColor: Colors.bg1,
        // overlayColor: '#000',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae'
        }
    }
);

export default createAppContainer(DrawerNavigator);

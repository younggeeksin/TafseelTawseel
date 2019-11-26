import { Platform, Dimensions } from 'react-native';
import Icons from './Icons';

const Constants = {
    Screen: {
        Home: 'Home',
        Deals: 'Deals',
        Search: 'Search',
        Carts: 'Carts',
        Measurement: 'Measurement',
        ProfileSettings: 'ProfileSettings',
        ChangePassword: 'ChangePassword',
        MyProfile: 'MyProfile',
        MyWishList: 'MyWishList',
        Languages: 'Languages',
        MyAddress: 'MyAddress',
        Launch: 'Launch',
        Detail: 'Detail',
        DetailComposite: 'DetailComposite',
        ProductsByCategory: 'ProductsByCategory',
        SetLanguage: 'SetLanguage',
        SignIn: 'SignIn',
        SignUp: 'SignUp',
        Feedback: 'Feedback',
        ShippingInfo: 'ShippingInfo',
        ShippingAddress: 'ShippingAddress',
        PaymentInfo: 'PaymentInfo',
        AddAddress: 'AddAddress',
        MyOrders: 'MyOrders',
        Filter: 'Filter',
        AttributeDetail: 'AttributeDetail',
        Specification: 'Specification',
        Vendor: 'Vendor',
        VendorCategory: 'VendorCategory',
        ShippingMaps: 'ShippingMaps',
        Checkout: 'Checkout'
    },
    ScreenSize: Dimensions.get('window'),
    EventEmitterName: {
        OpenDrawer: 'OpenDrawer',
        OpenPage: 'OpenPage',
        onSearch: 'onSearch',
        onAdd: 'onAdd',
        onFilter: 'onFilter',
        onLogout: 'onLogout',
        onLogin: 'onLogin',
        showToast: 'showToast'
    },
    FontSize: {
        superTiny: 9,
        tiny: 11,
        small: 13,
        medium: 15,
        big: 18,
        large: 20
    },
    Languages: [
        {
            code: 'en',
            text: 'English',
            icon: Icons.EnFlag
        },
        {
            code: 'ar',
            text: 'Arabic',
            icon: Icons.ArFlag
        }
    ],
    FontFamily:
        Platform.OS === 'ios' ? 'DroidArabicKufi' : 'DroidArabicKufi-Regular', //Bookerly-Regular
    FontFamilyBold: 'DroidArabicKufi-Bold',
    Api: {
        Limit: 20
    },
    MIN_PRICE: 0,
    MAX_PRICE: 10000
};

export default Constants;

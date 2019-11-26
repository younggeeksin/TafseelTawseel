import React from 'react';
import {
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Text,
    ActivityIndicator
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './style';

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
// import * as ActionTypes from '@actions/ActionTypes'

import { Constants, Colors, Utils } from '@common';
// import { subcategories } from '@dummyData'
// import Masonry from 'react-native-masonry-layout';

class VendorCategory extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.item.name
    });
    componentDidMount() {
        // console.log('VendorCategory :: componentDidMount ',this.props.navigation);
        let vendor = this.props.navigation.state.params.item;
        this.props.get_vendor_categories(vendor.term_id);
    }

    render() {
        // let vendor = this.props.navigation.state.params.item;
        // // console.log(this.props);
        // let thobe_product;
        if (this.props.loading || this.props.is_error) {
            return (
                <View style={styles.loading}>
                    {this.props.loading && (
                        <ActivityIndicator size="large" color={Colors.grey1} />
                    )}
                    {this.props.is_error && (
                        <Text style={[styles.text, styles.error]}>
                            {this.props.message}
                        </Text>
                    )}
                </View>
            );
        }

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.props.categories}
                    numColumns={2}
                    keyExtractor={(item, index) => `pcid_${item.id}`}
                    ListHeaderComponent={() => {
                        return (
                            <View
                                style={[
                                    styles.page_header_container,
                                    styles.dev_border
                                ]}
                            >
                                <View
                                    style={[
                                        styles.page_header_holder,
                                        styles.dev_border
                                    ]}
                                >
                                    <Text
                                        numberOfLines={1}
                                        style={[
                                            styles.page_header,
                                            styles.dev_border
                                        ]}
                                    >
                                        {global.tr('Product Categories')}
                                    </Text>
                                </View>
                                {!Utils.isEmpty(this.props.thobe_product) && (
                                    <TouchableOpacity
                                        // elevation={1}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            // console.log('Vendor Click:: ',item);
                                            // item.vendor_id = this.props.navigation.state.params.item.term_id;
                                            // item.vendor_name = this.props.navigation.state.params.item.name;
                                            const vendor = this.props.navigation
                                                .state.params.item;
                                            this.props.navigation.navigate(
                                                Constants.Screen
                                                    .DetailComposite,
                                                {
                                                    product: {
                                                        vendor_id:
                                                            vendor.term_id,
                                                        vendor_name:
                                                            vendor.name,
                                                        product_id: this.props
                                                            .thobe_product.id
                                                    }
                                                }
                                            );
                                        }}
                                        style={[
                                            styles.thobe_item_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <View
                                            style={[
                                                styles.thobe_item,
                                                styles.dev_border
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    styles.thobe_image_holder,
                                                    styles.dev_border
                                                ]}
                                            >
                                                <FastImage
                                                    style={[
                                                        styles.thobe_image,
                                                        styles.dev_border
                                                    ]}
                                                    source={{
                                                        uri: this.props
                                                            .thobe_product
                                                            .images[0].src
                                                    }}
                                                    resizeMode={
                                                        FastImage.resizeMode
                                                            .cover
                                                    }
                                                />
                                            </View>
                                            <View
                                                style={[
                                                    styles.thobe_name_holder,
                                                    styles.dev_border
                                                ]}
                                            >
                                                <Text
                                                    numberOfLines={1}
                                                    style={[
                                                        styles.text,
                                                        styles.thobe_name,
                                                        styles.dev_border
                                                    ]}
                                                >
                                                    {
                                                        this.props.thobe_product
                                                            .name
                                                    }
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            </View>
                        );
                    }}
                    renderItem={({ item }) => {
                        // console.log(item)

                        return (
                            <TouchableOpacity
                                // elevation={1}
                                activeOpacity={0.5}
                                onPress={() => {
                                    // console.log('Vendor Click:: ',item);
                                    item.vendor_id = this.props.navigation.state.params.item.term_id;
                                    item.vendor_name = this.props.navigation.state.params.item.name;
                                    this.props.navigation.navigate(
                                        Constants.Screen.ProductsByCategory,
                                        { item }
                                    );
                                }}
                                style={[styles.item_holder, styles.dev_border]}
                            >
                                <View style={[styles.item, styles.dev_border]}>
                                    <View
                                        style={[
                                            styles.cat_image_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <FastImage
                                            style={[
                                                styles.cat_image,
                                                styles.dev_border
                                            ]}
                                            source={{ uri: item.image.src }}
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

function mapStateToProps(state) {
    return {
        categories: state.vendorCategoriesReducers.categories,
        thobe_product: state.vendorCategoriesReducers.thobe_product,
        loading: state.vendorCategoriesReducers.loading,
        is_error: state.vendorCategoriesReducers.is_error,
        message: state.vendorCategoriesReducers.message
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VendorCategory);

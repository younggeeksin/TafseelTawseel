import React from 'react';
import {
    View,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
    Text,
    TextInput
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './style';
// import { Products, ModalFilter, SubCategories, FilterControl } from '@components'

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '@actions/ActionTypes';

import { Utils, Icons, Constants } from '@common';
// import { subcategories } from '@dummyData'

class ProductsByCategory extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.item.vendor_name
    });
    componentDidMount() {
        let category = this.props.navigation.state.params.item;
        this.props.get_products({
            //'category':category.slug
            type: 'simple'
        });
    }

    render() {
        let vendor = this.props.navigation.state.params.item;
        // console.log(this.props);
        if (this.props.is_fetching) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.page_header_holder, styles.dev_border]}>
                    <TextInput
                        style={[styles.search, styles.text, styles.dev_border]}
                        placeholder={global.tr('Search')}
                        onChangeText={text => {
                            console.log(
                                'ProductsByCategory :: search input',
                                text
                            );
                        }}
                    />
                    <TouchableOpacity
                        style={[styles.filter_btn, styles.dev_border]}
                        onPress={() => {}}
                        activeOpacity={0.75}
                    >
                        <FastImage
                            source={Icons.sort_darkg}
                            style={styles.filter_btn_icon}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.props.products}
                    numColumns={2}
                    keyExtractor={(item, index) => `productid_${item.id}`}
                    // columnWrapperStyle={[
                    //     styles.item_wrapper,
                    //     styles.dev_border
                    // ]}
                    // ItemSeparatorComponent={() => <View style={{border:1, borderColor:'#ffff00',height:5, width:20}} />}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                // elevation={1}
                                activeOpacity={0.75}
                                onPress={() => {
                                    const attr = {
                                        ...this.props.navigation.state.params.item,
                                        product_id: item.id
                                    };
                                    // console.log('product click :: ', attr);
                                    this.props.navigation.navigate(
                                        Constants.Screen.Detail,
                                        {
                                            product: attr
                                        }
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
                                            source={{ uri: item.images[0].src }}
                                            resizeMode={
                                                FastImage.resizeMode.cover
                                            }
                                        />
                                    </View>
                                    <View
                                        style={[
                                            styles.label_holder,
                                            styles.dev_border
                                        ]}
                                    >
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
                                        <View
                                            style={[
                                                styles.price_holder,
                                                styles.dev_border
                                            ]}
                                        >
                                            <Text
                                                numberOfLines={1}
                                                style={[
                                                    styles.text,
                                                    styles.price,
                                                    styles.dev_border
                                                ]}
                                            >
                                                {Utils.format_money(item.price)}
                                            </Text>
                                        </View>
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

// {/*<SubCategories items={subCategories} onPress={this.onSelectSubcategory} />*/}
// <FilterControl
//     onSort={() => this.onSort()}
//     onCheck={(checked) => this.onCheckNow(checked)}
//     onFilter={() => this.onFilter()} />
// {
//     (isFetching && this.state.index == 1) &&
//         <View style={styles.wrapper}>
//             <ActivityIndicator size="large" />
//         </View>
// }
// {
//     (products.length == 0 && !isFetching) &&
//         <View style={styles.wrapper}>
//             <Text style={styles.message}>{tr('Empty List')}</Text>
//         </View>
// }
// {
//     (!isFetching && products.length > 0) &&
//         <ScrollView contentContainerStyle={styles.content}>
//             <Products products={products} horizontal={false} hideSection={true} onPress={(product) => {
//                 // console.log('Vendor Click:: ',item);
//
//                 this.props.navigation.navigate(Constants.Screen.Detail,{product})
//             }} onLoadMore={this.onLoadMore}/>
//         </ScrollView>
// }
// <ModalFilter ref="filter" onOK={(data) => this.onFilterPrice(data)} />

// ProductsByCategory.defaultProps = {
//     // products: {
//     //     products: []
//     // },
//     //subCategories: [],
//     // isFetching: true,
//     // selectedCategory: null
// }

function mapStateToProps(state) {
    // console.log('ProductsByCategory::  state',state.productsByCategoryReducers)
    return {
        products: state.productsByCategoryReducers.products,
        is_fetching: state.productsByCategoryReducers.is_fetching
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsByCategory);

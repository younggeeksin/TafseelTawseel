import React from 'react';
import {
    View,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    Text,
    Modal,
    FlatList,
    Picker
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import styles from './style';

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '@actions/ActionTypes';

import { Utils, Config, Global, Constants, Colors, Icons } from '@common';
//  import HTML from 'react-native-render-html'
import Slider from '@react-native-community/slider';
// import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';
// import update from 'immutability-helper';
// import StepIndicator from 'react-native-step-indicator';

class DetailComposite extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.product.vendor_name
    });
    constructor(props) {
        super(props);
        this.state = {
            attributeOption: {},
            activeSections: [0],
            qty: 1,
            is_qty: false,
            is_add_to_cart: false,
            qty_modal_visible: false,
            product_option_modal_visible: false,
            product_component_index: 0,
            is_measurements_loaded: false,
            selected_measurement: null
        };
    }
    componentDidMount() {
        let product = this.props.navigation.state.params.product;
        // console.log('DetailComposite componentDidMount', product)
        this.props.get_product_composite({
            include: product.product_id
        });
        this.props.get_measurement({});
    }

    componentDidUpdate(prevProps) {
        if (prevProps.qty !== this.state.qty && this.state.qty === false) {
            // console.log(this);
        }
    }

    _is_add_to_cart = product => {
        if (!product.purchasable) {
            return false;
        }
        if (product.manage_stock && !product.in_stock) {
            return false;
        }
        return true;
    };
    _is_qty = product => {
        if (product.manage_stock && !product.in_stock) {
            return false;
        }
        return true;
    };

    _set_qty_modal_visible = visible => {
        this.setState({ qty_modal_visible: visible });
    };
    _set_product_option_modal_visible = visible => {
        this.setState({ product_option_modal_visible: visible });
    };

    render() {
        let { product } = this.props;
        // console.log('DetailComposite :: render', product)
        // const { attributeOption } = this.state;
        if (this.props.is_loading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={Colors.grey1} />
                </View>
            );
        }
        if (!product) {
            return (
                <View style={styles.loading}>
                    <Text style={[styles.text, styles.name]}>
                        Unable to show details.
                    </Text>
                </View>
            );
        } else {
            //let product = products[0];// navigation.state.params.product
            let is_add_to_cart = !this._is_add_to_cart(product);
            let is_qty = !this._is_qty(product);

            return (
                <SafeAreaView style={styles.container}>
                    <ScrollView stickyHeaderIndices={[1]}>
                        <View
                            style={[
                                styles.cover_image_holder,
                                styles.dev_border
                            ]}
                        >
                            <Swiper
                                showsPagination={true}
                                autoplay={true}
                                height={200}
                                activeDotColor={Colors.mango}
                                dotColor={'rgba(255,255,255,0.5)'}
                            >
                                {product.images &&
                                    product.images.map((item, index) => (
                                        <FastImage
                                            key={index}
                                            source={{ uri: item.src }}
                                            style={[
                                                styles.cover_image,
                                                styles.dev_border
                                            ]}
                                            resizeMode={
                                                FastImage.resizeMode.cover
                                            }
                                        />
                                    ))}
                            </Swiper>
                        </View>
                        <View
                            style={[
                                styles.product_name_container,
                                styles.dev_border
                            ]}
                        >
                            <View
                                style={[
                                    styles.product_name_holder,
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
                                        {product.name}
                                    </Text>
                                </View>
                                {(product.manage_stock &&
                                    !product.in_stock && (
                                    <View
                                            style={[
                                                styles.status_holder,
                                                styles.status_out_of_stock_text_holder,
                                                styles.dev_border
                                            ]}
                                        >
                                            <Text
                                            style={[styles.text, styles.status, styles.status_out_of_stock_text, styles.dev_border]}
                                        >{global.tr('Out of stock')}</Text>
                                    </View>)) ||

                                    (<View  style={[styles.price_holder, styles.dev_border]} >
                                        <Text numberOfLines={1}
                                            style={[styles.text, styles.price, styles.dev_border]}
                                        >{Utils.format_money(product.price)}</Text>
                                    </View>
                                )}
                            </View>
                        </View>

                        <View
                            style={[
                                styles.product_description_holder,
                                styles.dev_border
                            ]}
                        >
                            <View
                                style={[styles.label_holder, styles.dev_border]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.label,
                                        styles.dev_border
                                    ]}
                                >
                                    {global.tr('Description')}
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.description_holder,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.description,
                                        styles.dev_border
                                    ]}
                                >
                                    {product.short_description}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.measurement_holder,
                                styles.dev_border
                            ]}
                        >
                            <View
                                style={[styles.label_holder, styles.dev_border]}
                            >
                                <Text
                                    style={[
                                        styles.text,
                                        styles.label,
                                        styles.dev_border
                                    ]}
                                >
                                    اختيار القياس
                                </Text>
                            </View>
                            {this.props.measurement_is_loading && (
                                <ActivityIndicator size="small" />
                            )}
                            {!this.props.measurement_is_loading &&
                                this.props.measurement_is_error && (
                                <Text style={[styles.text, styles.name]}>
                                        {this.props.measurement_message}
                                    </Text>
                                )}
                            {!this.props.measurement_is_loading && !this.props.measurement_is_error &&
                                <Picker
                                    selectedValue={this.state.selected_measurement}
                                    style={[styles.measurement_picker, styles.dev_border]}
                                    itemStyle={[styles.measurement_picker_items, styles.dev_border]}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({selected_measurement: itemValue})
                                    }
                                >
                                    {this.props.measurements.map((a,i)=>{
                                        return (<Picker.Item key={`measure_${a.id}`} label={a.name} value={a.id} />)
                                    })}
                                </Picker>
                            }
                        </View>

                        <FlatList
                            contentContainerStyle={[
                                styles.product_components_holder,
                                styles.dev_border
                            ]}
                            data={product.composite_components}
                            numColumns={2}
                            keyExtractor={(item, index) => `component_${item.id}`}
                            renderItem={({ item, index }) => {
                                // console.log(item)
                                return (
                                    <TouchableOpacity
                                        // elevation={1}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            this.setState(
                                                {
                                                    product_component_index: index
                                                },
                                                () => {
                                                    this._set_product_option_modal_visible(
                                                        !this.state
                                                            .qty_modal_visible
                                                    );
                                                }
                                            );
                                        }}
                                        style={[
                                            styles.component_item_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <View
                                            style={[
                                                styles.component_item,
                                                styles.dev_border
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    styles.component_image_holder,
                                                    styles.dev_border
                                                ]}
                                            >
                                                <FastImage
                                                    style={[
                                                        styles.component_image,
                                                        styles.dev_border
                                                    ]}
                                                    source={{
                                                        uri: item.thumbnail_src
                                                    }}
                                                    resizeMode={
                                                        FastImage.resizeMode
                                                            .cover
                                                    }
                                                />
                                            </View>
                                            <View
                                                style={[
                                                    styles.component_name_holder,
                                                    styles.dev_border
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.text,
                                                        styles.component_name,
                                                        styles.dev_border
                                                    ]}
                                                >
                                                    {item.title}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </ScrollView>

                    <View
                        style={[
                            styles.cart_actions_holder,
                            { opacity: is_add_to_cart ? 0.75 : 1 },
                            styles.dev_border
                        ]}
                    >
                        <View
                            style={[
                                styles.btn_add_to_cart_holder,
                                styles.dev_border
                            ]}
                        >
                            <TouchableOpacity
                                // elevation={1}
                                activeOpacity={0.5}
                                disabled={is_add_to_cart}
                                onPress={() => {}}
                                style={[
                                    styles.btn,
                                    styles.btn_add_to_cart,
                                    styles.item_holder,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={[
                                        styles.text,
                                        styles.btn_add_to_cart_text,
                                        styles.dev_border
                                    ]}
                                >
                                    {global.tr('Add to Cart')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={[
                                styles.product_quantity_holder,
                                styles.dev_border
                            ]}
                        >
                            <TouchableOpacity
                                // elevation={1}
                                activeOpacity={0.5}
                                disabled={is_add_to_cart && is_qty}
                                onPress={() => {
                                    this._set_qty_modal_visible(true);
                                }}
                                style={[
                                    styles.btn,
                                    styles.btn_product_quantity,
                                    styles.item_holder,
                                    styles.dev_border
                                ]}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={[
                                        styles.text,
                                        styles.btn_product_quantity_text,
                                        styles.dev_border
                                    ]}
                                >
                                    {this.state.qty}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.qty_modal_visible}
                        disabled={is_qty}
                        onRequestClose={() => {
                            // Alert.alert('Modal has been closed.');
                            this._set_qty_modal_visible(
                                !this.state.qty_modal_visible
                            );
                        }}
                    >
                        <View
                            style={[
                                styles.modal_container,
                                styles.product_quantity_modal_container,
                                styles.dev_border
                            ]}
                        >
                            <View
                                style={[
                                    styles.modal_content,
                                    styles.product_quantity_modal_content,
                                    styles.dev_border
                                ]}
                            >
                                <View
                                    style={[
                                        styles.modal_header_holder,
                                        styles.dev_border
                                    ]}
                                >
                                    <Text
                                        numberOfLines={1}
                                        style={[
                                            styles.text,
                                            styles.modal_header_text,
                                            styles.dev_border
                                        ]}
                                    >
                                        {global.tr('Quantity')}
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.product_quantity_modal_slider_holder,
                                        styles.dev_border
                                    ]}
                                >
                                    <View
                                        style={[
                                            styles.product_quantity_slider_text_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.text,
                                                styles.product_quantity_slider_text,
                                                styles.dev_border
                                            ]}
                                        >
                                            {this.state.qty}
                                        </Text>
                                    </View>
                                    <Slider
                                        // ref="qty_slider"
                                        style={[
                                            styles.product_quantity_modal_slider,
                                            styles.dev_border
                                        ]}
                                        minimumValue={1}
                                        maximumValue={
                                            product.manage_stock &&
                                            product.in_stock
                                                ? product.stock_quantity
                                                : 20
                                        }
                                        step={1}
                                        onValueChange={value => {
                                            this.setState({ qty: value });
                                        }}
                                        minimumTrackTintColor={Colors.grey1}
                                        maximumTrackTintColor={Colors.mango}
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={[
                                            styles.btn_submit_qty,
                                            styles.dev_border
                                        ]}
                                        activeOpacity={0.75}
                                        onPress={() => {
                                            this._set_qty_modal_visible(
                                                !this.state.qty_modal_visible
                                            );
                                        }}
                                    >
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.text,
                                                styles.btn_submit_qty_text,
                                                styles.dev_border
                                            ]}
                                        >
                                            {global.tr('Submit')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.product_option_modal_visible}
                        disabled={is_qty}
                        onRequestClose={() => {
                            // Alert.alert('Modal has been closed.');
                            this._set_product_option_modal_visible(
                                !this.state.product_option_modal_visible
                            );
                        }}
                    >
                        <SafeAreaView style={[{ flex: 1 }, styles.dev_border]}>
                            <View
                                style={[
                                    styles.modal_container,
                                    styles.product_option_modal_container,
                                    styles.dev_border
                                ]}
                            >
                                <View
                                    style={[
                                        styles.modal_content,
                                        styles.product_option_modal_content,
                                        styles.dev_border
                                    ]}
                                >
                                    <View
                                        style={[
                                            styles.modal_header_holder,
                                            styles.product_option_modal_header_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.text,
                                                styles.modal_header_text,
                                                styles.dev_border
                                            ]}
                                        >
                                            {global.tr('Options')}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.product_option_modal_options_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <FlatList
                                            style={{ flex: 1 }}
                                            data={
                                                product.composite_components[
                                                    this.state
                                                        .product_component_index
                                                ].component_products || []
                                            }
                                            keyExtractor={(item, index) =>
                                                `component_product_id_${item.id}`
                                            }
                                            renderItem={({ item, index }) => {
                                                return (
                                                    <TouchableOpacity
                                                        // elevation={1}
                                                        disabled={
                                                            !(
                                                                item.purchasable &&
                                                                item.in_stock
                                                            )
                                                        }
                                                        activeOpacity={0.5}
                                                        onPress={() => {
                                                            let attr = {};
                                                            this.props.composite_option_select(
                                                                this.state
                                                                    .product_component_index,
                                                                index
                                                            );
                                                        }}
                                                        style={[
                                                            styles.component_product_item_holder,
                                                            !(
                                                                item.purchasable &&
                                                                item.in_stock
                                                            )
                                                                ? styles.disabled
                                                                : null,
                                                            styles.dev_border
                                                        ]}
                                                    >
                                                        <View
                                                            style={[
                                                                styles.component_product_item,
                                                                styles.dev_border
                                                            ]}
                                                        >
                                                            <View
                                                                style={[
                                                                    styles.component_product_image_holder,
                                                                    styles.dev_border
                                                                ]}
                                                            >
                                                                <FastImage
                                                                    style={[
                                                                        styles.component_product_image,
                                                                        styles.dev_border
                                                                    ]}
                                                                    source={{
                                                                        uri:
                                                                            item
                                                                                .images[0]
                                                                                .src
                                                                    }}
                                                                    resizeMode={
                                                                        FastImage
                                                                            .resizeMode
                                                                            .cover
                                                                    }
                                                                />
                                                                {item.selected && (
                                                                    <View
                                                                        style={[
                                                                            styles.selected_option,
                                                                            styles.dev_border
                                                                        ]}
                                                                    >
                                                                        <FastImage
                                                                            style={[
                                                                                styles.selected_option_image,
                                                                                styles.dev_border
                                                                            ]}
                                                                            source={
                                                                                Icons.tick_darkg
                                                                            }
                                                                            resizeMode={
                                                                                FastImage
                                                                                    .resizeMode
                                                                                    .contain
                                                                            }
                                                                        />
                                                                    </View>
                                                                )}
                                                            </View>
                                                            <View
                                                                style={[
                                                                    styles.component_product_label_holder,
                                                                    styles.dev_border
                                                                ]}
                                                            >
                                                                <View
                                                                    style={[
                                                                        styles.component_product_name_holder,
                                                                        styles.dev_border
                                                                    ]}
                                                                >
                                                                    <Text
                                                                        numberOfLines={
                                                                            1
                                                                        }
                                                                        style={[
                                                                            styles.text,
                                                                            styles.component_product_name,
                                                                            styles.dev_border
                                                                        ]}
                                                                    >
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </Text>
                                                                </View>
                                                                <View
                                                                    style={[
                                                                        styles.component_product_price_holder,
                                                                        styles.dev_border
                                                                    ]}
                                                                >
                                                                    <Text
                                                                        numberOfLines={
                                                                            1
                                                                        }
                                                                        style={[
                                                                            styles.text,
                                                                            styles.component_product_price,
                                                                            styles.dev_border
                                                                        ]}
                                                                    >
                                                                        {Utils.format_money(
                                                                            item.price
                                                                        )}
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                );
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={[
                                            styles.modal_footer_holder,
                                            styles.product_option_modal_footer_holder,
                                            styles.dev_border
                                        ]}
                                    >
                                        <TouchableOpacity
                                            style={[
                                                styles.btn_submit_qty,
                                                styles.dev_border
                                            ]}
                                            activeOpacity={0.75}
                                            onPress={() => {
                                                this._set_product_option_modal_visible(
                                                    !this.state
                                                        .product_option_modal_visible
                                                );
                                            }}
                                        >
                                            <Text
                                                numberOfLines={1}
                                                style={[
                                                    styles.text,
                                                    styles.btn_submit_qty_text,
                                                    styles.dev_border
                                                ]}
                                            >
                                                {global.tr('Submit')}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </SafeAreaView>
                    </Modal>
                </SafeAreaView>
            );
        }
    }
}

function mapStateToProps(state) {
    console.log(
        'DetailComposite :: mapStateToProps',
        state.measurementReducers
    );
    return {
        is_loading: state.productCompositeReducers.is_loading,
        is_fetching: state.productCompositeReducers.is_fetching,
        product: state.productCompositeReducers.product,

        measurement_is_loading: state.measurementReducers.is_loading,
        measurement_is_requesting: state.measurementReducers.is_requesting,
        measurement_is_error: state.measurementReducers.is_error,
        measurement_message: state.measurementReducers.message,
        measurement_type: state.measurementReducers.type,
        measurements: state.measurementReducers.measurements
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailComposite);

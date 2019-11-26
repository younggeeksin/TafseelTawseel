import React from 'react';
import {
    View,
    SafeAreaView,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    ScrollView,
    Text,
    Modal
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import styles from './style';

import { connect } from 'react-redux';
import { ActionCreators } from '@actions';
import { bindActionCreators } from 'redux';
import { Calendar } from 'react-native-calendars';
import * as ActionTypes from '@actions/ActionTypes';

import { Utils, Config, Global, Constants, Colors, Icons } from '@common';
//  import HTML from 'react-native-render-html'
import Slider from '@react-native-community/slider';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
// import update from 'immutability-helper';

class Detail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.product.vendor_name
    });
    constructor(props) {
        super(props);
        this.state = {
            activeSections: [],
            qty: 1,
            qty_modal_visible: false
        };
        this.onDayPress = this.onDayPress.bind(this);
    }
    onDayPress(day) {
        this.setState({
          selected: day.dateString
        });
        this.props.navigation.navigate('Slot', { bookingDate : day });
      }
    componentDidMount() {
        let product = this.props.navigation.state.params.product;
        // console.log('Detail componentDidMount', product)
        this.props.get_product({
            include: product.product_id,
            limit: 1,
            is_detail: true
        });
    }

    _add_to_cart = product => {
        if (!this.props.is_logged_in) {
            this.props.navigation.navigate(Constants.Screen.SignIn);
        } else {
            Global.EventEmitter.emit(
                Constants.EventEmitterName.showToast,
                global.tr('An item has been added to the cart')
            );
        }
    };

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

    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections
        });
    };

    renderHeader = (attrib, i, isActive) => {
        return (
            <View
                key={`attrib_${i}`}
                style={[styles.accordion_header, styles.dev_border]}
            >
                <View
                    style={[
                        styles.accordion_header_text_holder,
                        styles.dev_border
                    ]}
                >
                    <Text
                        style={[
                            styles.text,
                            styles.accordion_header_text,
                            styles.dev_border
                        ]}
                    >
                        {attrib.name}
                    </Text>
                </View>
                <View
                    style={[
                        styles.accordion_header_icon_holder,
                        styles.dev_border
                    ]}
                >
                    <FastImage
                        style={[styles.accordion_header_icon]}
                        source={
                            isActive
                                ? Icons.chevron_down_darkg
                                : Icons.chevron_up_darkg
                        }
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
            </View>
        );
    };

    renderContent = (attrib, i, isActive) => {
        return attrib.options_custom.map((op, j) => {
            return (
                <TouchableOpacity
                    // elevation={1}
                    activeOpacity={0.5}
                    onPress={() => {
                        // this.props.products[0].attributes[i].options_custom[j].selected = true;
                        // attr_ops_selected;
                        this.props.attribute_option_select(i, j);
                    }}
                    key={`attrib_ops_${i}_${j}`}
                    style={[styles.accordion_content, styles.dev_border]}
                >
                    <View
                        style={[
                            styles.accordion_content_radio_holder,
                            styles.dev_border
                        ]}
                    >
                        <View
                            style={[
                                styles.accordion_content_radio_wrapper,
                                styles.dev_border
                            ]}
                        >
                            {op.selected ? (
                                <View
                                    style={[styles.accordion_content_radio_dot]}
                                />
                            ) : null}
                        </View>
                    </View>
                    <View
                        style={[
                            styles.accordion_content_text_holder,
                            styles.dev_border
                        ]}
                    >
                        <Text
                            style={[
                                styles.text,
                                styles.accordion_content_text,
                                styles.dev_border
                            ]}
                        >
                            {op.value}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        });
    };
    _attributes = product => {
        let dis_attrib = [];
        if (product.type === 'simple') {
            if (product.attributes.length) {
                return product.attributes;
            }
        }
        return [];
    };

    render() {
        let { products } = this.props;
        // console.log('Detail :: render', products)
        // const { attributeOption } = this.state;
        if (this.props.is_loading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={Colors.grey1} />
                </View>
            );
        }
        if (!products.length) {
            return (
                <View style={styles.loading}>
                    <Text style={[styles.text, styles.name]}>
                        Unable to show details.
                    </Text>
                </View>
            );
        } else {
            let product = products[0]; // navigation.state.params.product
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
                                {product.images.map((item, index) => (
                                    <FastImage
                                        key={index}
                                        source={{ uri: item.src }}
                                        style={[
                                            styles.cover_image,
                                            styles.dev_border
                                        ]}
                                        resizeMode={FastImage.resizeMode.cover}
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
                                {((product.manage_stock &&
                                        !product.in_stock) && (
                                            <View
                                                style={[
                                                    styles.status_holder,
                                                    styles.status_out_of_stock_text_holder,
                                                    styles.dev_border
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.text,
                                                        styles.status,
                                                        styles.status_out_of_stock_text,
                                                        styles.dev_border
                                                    ]}
                                                >
                                                    {global.tr('Out of stock')}
                                                </Text>
                                            </View>
                                    )) || (
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
                                            {Utils.format_money(product.price)}
                                        </Text>
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
                        <Accordion
                            activeSections={this.state.activeSections}
                            sections={this._attributes(product)}
                            touchableComponent={TouchableOpacity}
                            expandMultiple={true}
                            renderHeader={this.renderHeader}
                            renderContent={this.renderContent}
                            duration={400}
                            onChange={this.setSections}
                        />
                        <Calendar
                            onDayPress={this.onDayPress}
                            style={{borderTopWidth: 1,
                                paddingTop: 5,
                                borderBottomWidth: 1,
                                borderColor: '#eee',
                                height: 350}}
                            hideExtraDays
                            markedDates={{[this.state.selected]: {selected: true}}}
                            theme={{
                                selectedDayBackgroundColor: 'green',
                                todayTextColor: 'green',
                                arrowColor: 'green',
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
                                onPress={() => {
                                    this._add_to_cart(product);
                                }}
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
                                        style={[
                                            styles.product_quantity_modal_slider,
                                            styles.dev_border
                                        ]}
                                        minimumValue={1}
                                        maximumValue={
                                            product.manage_stock &&
                                            product.in_stock
                                                ? product.stock_quantity
                                                : 100
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
                </SafeAreaView>
            );
        }
    }
}

Detail.defaultProps = {
    products: [],
    vendorInfo: null,
    variations: []
};

function mapStateToProps(state) {
    // console.log('Detail :: mapStateToProps',state.productReducers);
    return {
        is_loading: state.productReducers.is_loading,
        is_fetching: state.productReducers.is_fetching,
        products: state.productReducers.products,

        is_logged_in: state.signInReducers.is_logged_in
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);

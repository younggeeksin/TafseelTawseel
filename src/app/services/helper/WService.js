import { Config } from "@common";
import NetworkHelper from "./NetworkHelper";

function WService() {
		this.url = Config.WoocommerceConfig.endpoint + "/wp-json/wc/v2/";
}

WService.prototype.makeUrl = function (resource, params = null) {
	var url =
		this.url +
		resource +
		"?consumer_key=" +
		Config.WoocommerceConfig.consumer_key +
		"&consumer_secret=" +
		Config.WoocommerceConfig.consumer_secret;
	if (params) {
		url += "&" + params;
	}
	return url;
};
WService.prototype.internal_login = function () {
	return NetworkHelper.requestPost(
		Config.uri + "/wp-json/jwt-auth/v1/token",
		{ username: Config.internal_api.email, password:Config.internal_api.password }
	);
};

WService.prototype.validate_token = function (token) {
	return NetworkHelper.requestPost(
		Config.uri + "/wp-json/jwt-auth/v1/token/validate",
		{	}
	);
};

WService.prototype.get_vendors_list = function () {
	return NetworkHelper.requestGet(
		Config.uri + "/wp-json/ig/vendor_list"
	);
};

WService.prototype.get_vendor_categories = function (vendor_id) {
	return NetworkHelper.requestGet(
		//Config.uri + '/wp-json/wc/v3/products/categories/?parent=31&'+vendor_id
		Config.uri + '/wp-json/ig/categories/',
		{
			'case':'vendor_categories',
			'vendor_id':vendor_id
		}
	);
};
WService.prototype.get_products = function ( args ){
	return NetworkHelper.requestGet(
		//Config.uri + '/wp-json/wc/v3/products/categories/?parent=31&'+vendor_id
		Config.uri + '/wp-json/ig/vendor_products/',
		args
	);
};
WService.prototype.get_product_composite = function ( args ){
	let params = {}
	return NetworkHelper.requestGet(
		Config.uri + '/wp-json/ig/vendor_composite_product/',
		args
	);
};

WService.prototype.sign_up = function ( args ){
	let params = {}
	return NetworkHelper.requestPost(
		Config.uri + '/wp-json/ig/register_user/',
		args
	);
};

WService.prototype.sign_in = function ( args ){
	let params = {}
	return NetworkHelper.requestPost(
		Config.uri + "/wp-json/jwt-auth/v1/token",
		args
	);
};


WService.prototype.get_measurement = function ( args ){
	let params = {}
	return NetworkHelper.requestGet(
		Config.uri + "/wp-json/ig/get_measurements",
		args
	);
};
WService.prototype.store_measurement = function ( args ){
	let params = {}
	return NetworkHelper.requestPost(
		Config.uri + "/wp-json/ig/store_measurements",
		args
	);
};
WService.prototype.update_measurement = function ( args ){
	let params = {}
	return NetworkHelper.requestPost(
		Config.uri + "/wp-json/ig/update_measurements",
		args
	);
};
WService.prototype.delete_measurement = function ( args ){
	let params = {}
	return NetworkHelper.requestPost(
		Config.uri + "/wp-json/ig/delete_measurements",
		args
	);
};



WService.prototype.update_profile = function ( args ){
	let params = {}
	return NetworkHelper.requestPut(
		Config.uri + '/wp-json/ig/update_profile/',
		args
	);
};








WService.prototype.getCategories = function () {
	return NetworkHelper.requestGet(
		this.makeUrl("products/categories", "hide_empty=true&parent=0")
	);
};

WService.prototype.getSubCategories = function (parentId) {
	return NetworkHelper.requestGet(
		this.makeUrl("products/categories", "hide_empty=true&parent=" + parentId)
	);
};

WService.prototype.getCategoryById = function (categoryId) {
		return NetworkHelper.requestGet(
				this.makeUrl("products/categories/" + categoryId)
		);
};

WService.prototype.getAllProducts = function (page, per_page) {
		return NetworkHelper.requestGet(
				this.makeUrl("products", "page=" + page + "&per_page=" + per_page)
		);
};



WService.prototype.getRelatedProducts = function (
	categoryId,
	productId,
	page,
	per_page
) {
	return NetworkHelper.requestGet(
		this.makeUrl(
			"products",
			"page=" +
			page +
			"&per_page=" +
			per_page +
			"&category=" +
			categoryId +
			"&exclude=[" +
			productId +
			"]"
		)
	);
};

WService.prototype.searchProducts = function (
	searchText,
	page,
	per_page,
	filter
) {
	let filterParams = "";
	if (filter) {
		if (filter.minValue) {
			filterParams += "&min_price=" + filter.minValue;
		}
		if (filter.maxValue) {
			filterParams += "&max_price=" + filter.maxValue;
		}
		if (filter.categoryId) {
			filterParams += "&category=" + filter.categoryId;
		}
		if (filter.tagId) {
			filterParams += "&tag=" + filter.tagId;
		}
	}
	const url = this.makeUrl(
		"products",
		"page=" +
		page +
		"&per_page=" +
		per_page +
		"&search=" +
		searchText +
		filterParams
	);
	return NetworkHelper.requestGet(url);
};

WService.prototype.getRecentProducts = function (per_page) {
	return NetworkHelper.requestGet(
		this.makeUrl("products", "page=1&per_page=" + per_page)
	);
};

WService.prototype.getRecentProducts = function (per_page) {
	return NetworkHelper.requestGet(
		this.makeUrl("products", "page=1&per_page=" + per_page)
	);
};

WService.prototype.getShippingMethods = function () {
	return NetworkHelper.requestGet(this.makeUrl("shipping_methods"));
};

WService.prototype.getPaymentMethods = function () {
	return NetworkHelper.requestGet(this.makeUrl("payment_gateways"));
};

WService.prototype.signUp = function ({
	email,
	first_name,
	last_name,
	password
}) {
	return NetworkHelper.requestPost(this.makeUrl("customers"), {
		email,
		first_name,
		last_name,
		password
	});
};

WService.prototype.signIn = function (email, password) {
	return NetworkHelper.requestPost(
		Config.WoocommerceConfig.endpoint + "/wp-json/jwt-auth/v1/token",
		{ username: email, password }
	);
};

WService.prototype.getUserId = function (token) {
	return NetworkHelper.requestGet(
		Config.WoocommerceConfig.endpoint + "/wp-json/wp/v2/users/me",
		token
	);
};

WService.prototype.getUserInfo = function (userId) {
	return NetworkHelper.requestGet(this.makeUrl("customers/" + userId));
};

WService.prototype.createOrder = function (params) {
	return NetworkHelper.requestPost(this.makeUrl("orders"), params);
};

WService.prototype.getMyOrders = function (customer, page, per_page) {
	return NetworkHelper.requestGet(
		this.makeUrl(
			"orders",
			"page=" + page + "&per_page=" + per_page + "&customer=" + customer
		)
	);
};

WService.prototype.getTags = function () {
	return NetworkHelper.requestGet(this.makeUrl("products/tags"));
};

WService.prototype.getVendorsList = function () {
	return NetworkHelper.requestGet(
		Config.WoocommerceConfig.endpoint + "/wp-json/ig/vendor_list/"
	);
};

WService.prototype.getVendorInfo = function (storeId) {
	return NetworkHelper.requestGet(
		Config.WoocommerceConfig.endpoint + "/wp-json/dokan/v1/stores/" + storeId
	);
};

WService.prototype.getProductVendor = function (storeId) {
	return NetworkHelper.requestGet(
		Config.WoocommerceConfig.endpoint +
		"/wp-json/dokan/v1/stores/" +
		storeId +
		"/products?page=1&per_page=10"
	);
};

WService.prototype.signInFacebook = function (accessToken) {
	return NetworkHelper.requestGet(
		Config.WoocommerceConfig.endpoint + "/api/user/fb_connect?access_token=" + accessToken
	);
};

WService.prototype.paymentStripe = function (data) {
	return NetworkHelper.requestPost(
		Config.WoocommerceConfig.endpoint + "/wp-json/wc/v2/payment",
		data
	);
};

WService.prototype.getCoupons = function () {
	return NetworkHelper.requestGet(this.makeUrl("coupons"));
};

WService.prototype.getVariations = function (productId) {
	return NetworkHelper.requestGet(
		this.makeUrl("products/" + productId + "/variations")
	);
};
module.exports = WService;

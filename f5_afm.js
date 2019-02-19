/*
 * library to manage AFM address lists
 *
 */

var api = require('./f5_api');
var exports = module.exports = {};
var server = "192.168.1.245"; //use big-ip mgmt or selfip addr. 'localhost' or '127.0.0.1' won't work 
var addressList = "~Common~apm_address_list";
var afmAddressListUrl = "https://"+server+"/mgmt/tm/security/firewall/address-list/"+addressList;


/**
  * get address list
  *
  * @return {Object} data
  */
exports.getAddressList = function(callback) {
	api.get(afmAddressListUrl, "", function(res) {
	//f5.get(function(callback) {
		callback(res.addresses);
	});
};

/**
  * add address to address list
  *
  * @param {String} address
  * @return {Object} data
  */
exports.addAddress = function(address, callback) {
	api.put(afmAddressListUrl, "", address, function(res) {
		callback(res.addresses);
	});
};

/**
  * delete address from address list
  *
  * @param {String} address
  * @return {Object} data
  */
exports.deleteAddress = function(address, callback) {
	api.delete(afmAddressListUrl, "", address, function(res) {
		callback(res.addresses);
	});
};

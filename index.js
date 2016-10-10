/*
 * iRulesLX RPC for AFM/APM Dynmanic Address List
 *
 */

/* Import the f5-nodejs module. */
var f5 = require('f5-nodejs');
var afm = require('./f5_afm');

/* Create a new rpc server for listening to TCL iRule calls. */
var ilx = new f5.ILXServer();
ilx.listen();

/**
  * add address to AFM address list
  *
  * @params {String} address
  * @return {Boolean} result
  */
ilx.addMethod('addAddress', function(req, res) {
	afm.addAddress(req.params()[0], function(result) {
		if(typeof result !== undefined) {
			res.reply(true);
		} else {
			res.reply(false);
		}
	});
});

/**
  * remove address from AFM address list
  *
  * @ params {String} address
  * @ return {Boolean} result
  */
ilx.addMethod('deleteAddress', function(req, res) {
	afm.deleteAddress(req.params()[0], function(result) {
		if(typeof result !== undefined) {
			res.reply(true);
		} else {
			res.reply(false);
		}
	});
});

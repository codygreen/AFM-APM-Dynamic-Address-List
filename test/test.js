var expect = require('chai').expect;
var assert = require('chai').assert;
var afm = require('../f5_afm');

describe("AFM/APM Dynamic Address List", function() {
	it("Get AFM address list", function(done) {
		afm.getAddressList(function(data) {
			
			assert.isDefined(data);
			expect({data}).to.be.an('object');
			done();
		});
	});
	it("Add address to AFM address list", function(done) {
		afm.addAddress("10.1.10.10", function(data) {
			assert.isDefined(data);
			expect(data).to.contain( {name: "10.1.10.10"} );  
			done();
		});
	});
	it("Delete address from AFM address list", function(done) {
		afm.deleteAddress("10.1.10.10", function(data) {
			assert.isDefined(data);
			expect(data).not.to.contain( {name: "10.1.10.10"} );
			done();
		})
	});
});
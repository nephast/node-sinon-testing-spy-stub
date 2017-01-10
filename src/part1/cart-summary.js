const tax = require('./tax');

class CartSummary {
	constructor(items) {
		this._items = items;
	}
	getSubtotal() {
		if (this._items.length) {
			return this._items.reduce(function(subtotal, item) {
				return subtotal += (item.quantity * item.price);
			}, 0);
		}
		return 0;
	}

	getTax(state, done) {
		tax.calculate(this.getSubtotal(), state, function(taxInfo) {
			done(taxInfo.amount);
		});
	}
}

module.exports = CartSummary;

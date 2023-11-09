/**
 *
 * 문자열 포맷: id, item, price, discount
 */

const cartItems = [
	{ id: 1, item: 'shoes', price: 50000, discount: 0 },
	{ id: 2, item: 'book', price: 10000, discount: 0 },
	{ id: 3, item: 'swimsuit', price: 60000, discount: 0 },
	{ id: 4, item: 'cap', price: 30000, discount: 0 },
];

const cartItemsArray = [];

for (const item of cartItems) {
	const row = [];

	// [['id', 1], ['item', 'shoes'], ['price', 50000], ['discount', 0]]
	for (const [_, value] of Object.entries(item)) {
		row.push(value);
	}

	cartItemsArray.push(row.join());
}

cartItemsArray.join('|');

const extractValueObject = (obj) =>
	Object.entries(obj).map(([_, value]) => String(value));

const cartItemString = cartItems.map(extractValueObject).join('|');

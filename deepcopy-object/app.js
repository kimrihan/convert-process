const sourceObject = {
	traits: {
		first_name: {
			value: 'Bob',
			source_id: 1,
			updated_at: 16232338587468,
		},
		emails_opened_last_30_days: {
			value: 33,
			source_id: 2,
			updated_at: 1623238601089,
		},
	},
	cursor: {
		url: '/v1/spaces/lgJ4AAjFN4',
		has_more: false,
		next: '',
	},
};

// deep copy
// 객체의 데이터 크기가 클 경우 성능이 좋지 않다
const newObject1 = JSON.parse(JSON.stringify(sourceObject));
// shallow copy
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = { ...sourceObject };

function deepCopyObject(obj) {
	const clone = {};
	for (const key in obj) {
		if (typeof obj[key] === 'object' && obj[key] != null) {
			clone[key] = deepCopyObject(obj[key]);
		} else {
			clone[key] = obj[key];
		}
	}
	return clone;
}

const newObject4 = deepCopyObject(sourceObject);
console.log(sourceObject.traits.first_name.source_id);
newObject4.traits.first_name.source_id = 100;
console.log(sourceObject.traits.first_name.source_id);

const store = {
	user: null,
	cart: ['book', 'shoes'],
	config: {
		multiDevice: false,
		lastLoginDate: 'Wed Jun 09 2023 20:40:50 GMT+0900',
	},
};

const newObject5 = {
	...deepCopyObject(store),
	config: {
		...store.config,
		lastLoginDate: new Date(),
	},
};

console.log(newObject5);
console.log(newObject5.cart);
console.log(Array.isArray([]));

const defaultStyle = {
	color: '#fff',
	contColor: '#999',
	fontSize: 14,
	fontWeight: 200,
};

function createParagraph(config) {
	config = { ...defaultStyle, ...config };

	console.log(config);
}

createParagraph({ fontSize: 12 });

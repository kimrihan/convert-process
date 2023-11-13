/**
 * 객체를 형태가 다른 또 다른 객체로 변환하기
 *
 */

const sourceObject = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
};

const targetObject = {
	aGroup: {
		a: 1,
		b: 2,
	},
	bGroup: {
		c: 3,
		d: 4,
		e: 5,
	},
};

const groupInfo = {
	aGroup: ['a', 'b'],
	bGroup: ['c', 'd', 'e'],
};

function makeGroup(source, info) {
	const merge = (a, b) => ({ ...a, ...b });

	return Object.keys(info)
		.map((group) => ({
			[group]: info[group]
				.map((key) => ({ [key]: source[key] }))
				.reduce(merge, {}),
		}))
		.reduce(merge, {});
}

console.log(makeGroup(sourceObject, groupInfo));

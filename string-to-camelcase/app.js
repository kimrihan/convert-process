const simpleCamel = (text, splitter = ' ') =>
	text
		.split(splitter)
		.map((word, wi) =>
			word
				.split('')
				.map((c, ci) =>
					wi > 0 && ci === 0 ? c.toUpperCase() : c.toLowerCase()
				)
				.join('')
		)
		.join('');

const convertCamelName = (name) => {
	let camelName = '';

	for (let i = 0, newSpace = false; i < name.length; i++) {
		if (name[i] === ' ') {
			newSpace = true;
			continue;
		}

		if (newSpace) {
			camelName = camelName + name[i].toUpperCase();
			newSpace = false;
		} else {
			camelName = camelName + name[i].toLowerCase();
		}
	}
	return camelName;
};

const camelName1 = convertCamelName('Abc def ghi');
const camelName2 = simpleCamel('ABC DEF GHI');

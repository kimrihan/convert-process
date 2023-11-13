/**
 * Tagged template literal
 *
 *
 * function convert(staticData, ...dynamitData) {
 *    console.log(staticData); // ['first name: ', ', last name: ', '.']
 *    console.log(dynamicData); // ['ringo', 'kim']
 * }
 *
 * convert`first name: ${firstName}, last name: ${lastName}.`
 */
const userName = 'ringo kim';
const bolder = (text) => `<b>${text}</b>`;

function div(strings, ...fns) {
	const flat = (s) =>
		s
			.split('\n')
			.map((item) => item.trim())
			.join('');

	return function (props) {
		return `<div style="${
			flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])
		}">${bolder(userName)}</div>`;
	};
}

const Div = div`
      font-size:20px;
      color:${(props) => (props.active ? '#0808' : 'gray')};
      border:none;
`;

document.querySelector('#root').innerHTML = Div({ active: true });

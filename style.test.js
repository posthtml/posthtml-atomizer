const Style = require('./style');

describe('Style', () => {
	describe('#generate', () => {
		test('non atomic class', () => {
			expect(
				Style.instance({config: {}, options: {}}).generate('not atomic'),
			).toBe('');
		});

		test('atomic class', () => {
			expect(
				Style.instance({config: {}, options: {}})
					.generate('Bd(n)')
					.replace(/[\n\t]+|\s{2,}/g, ''),
			).toBe(`.Bd\\(n\\) {border: none;}`);
		});

		test('atomizer options', () => {
			expect(
				Style.instance({config: {}, options: {namespace: '.atomic'}})
					.generate('Bd(n)')
					.replace(/[\n\t]+|\s{2,}/g, ''),
			).toBe('.atomic .Bd\\(n\\), .Bd\\(n\\) {border: none;}');
		});

		test('atomizer configuration', () => {
			expect(
				Style.instance({
					config: {custom: {'1': '1px solid #000'}},
					options: {},
				})
					.generate('Bd(1)')
					.replace(/[\n\t]+|\s{2,}/g, ''),
			).toBe('.Bd\\(1\\) {border: 1px solid #000;}');
		});
	});
});

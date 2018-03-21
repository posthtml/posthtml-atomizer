const Option = require('./option');

describe('Option', () => {
	describe('.defaults', () => {
		test('keys', () => {
			const instance = Option.defaults();

			expect(Object.keys(instance).sort()).toEqual(['atomizer', 'path']);
			expect(Object.keys(instance.atomizer).sort()).toEqual([
				'config',
				'options',
			]);
		});
	});

	describe('.validate', () => {
		test('returns valid', () => {
			const options = {
				atomizer: {
					config: {
						classNames: ['Bd(1)'],
					},
					options: {
						ie: true,
					},
				},
				path: './foo.css',
			};

			expect(Option.validate(options)).toEqual(options);
		});

		test('throws invalid', () => {
			expect(() => {
				Option.validate({path: 1});
			}).toThrow();
		});
	});
});

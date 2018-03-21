const Fs = require('fs');
const PostHtml = require('posthtml');
const Tempy = require('tempy');

const Plugin = require('./plugin');

describe('Plugin', () => {
	describe('.instance', () => {
		let path;

		beforeEach(() => {
			path = Tempy.file();
		});

		afterEach(() => {
			if (Fs.existsSync(path)) {
				Fs.unlinkSync(path);
			}
		});

		test('posthtml plugin', () => {
			return new PostHtml([Plugin.instance({path})])
				.process(
					`
			<html>
			<body>
				<main class="P(20px)">
					<article class="C(red)">foo</article>
					<article class="C(white)">bar</article>
					<article class="C(blue)">baz</article>
				</main>
			</body>
			</html>
			`,
				)
				.then(() => {
					expect(
						Fs.readFileSync(path)
							.toString()
							.split('\n'),
					).toEqual(
						expect.arrayContaining([
							expect.stringContaining('P\\(20px\\)'),
							expect.stringContaining('C\\(red\\)'),
							expect.stringContaining('C\\(white\\)'),
							expect.stringContaining('C\\(blue\\)'),
						]),
					);
				});
		});
	});
});

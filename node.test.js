const PostHtml = require('posthtml');

const Node = require('./node');

function tree(html) {
	return new PostHtml(tree => tree).process(html, {sync: true}).tree;
}

describe('Node', () => {
	describe('.classAttribute', () => {
		test('class', () => {
			expect(Node.classAttribute({attrs: {class: 'wow ok'}})).toEqual('wow ok');
		});

		test('no class', () => {
			expect(Node.classAttribute({attrs: {notClass: ''}})).toEqual('');
		});

		test('no attrs', () => {
			expect(Node.classAttribute({notAttrs: {notClass: ''}})).toEqual('');
		});
	});

	describe('.map', () => {
		test('no untagged nodes', () => {
			expect(
				Node.map(
					tree('<html><head></head><body><div></div></body></html>'),
					node => node.tag,
				),
			).toEqual(['html', 'head', 'body', 'div']);
		});

		test('untagged nodes', () => {
			expect(
				Node.map(
					tree(`
				<!DOCTYPE HTML>
				<html>
					<head>
						<title>foo</title>
						<style>h1 { background-color: red; }</style>
					</head>
					<body>
						<main>bar</main>
					</body>
				</html>
			`),
					node => node.tag,
				),
			).toEqual(['html', 'head', 'title', 'style', 'body', 'main']);
		});
	});
});

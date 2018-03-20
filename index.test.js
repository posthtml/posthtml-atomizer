const PostHtmlAtomizer = require('.');

describe('PostHtmlAtomizer', () => {
	test('canary', () => {
		expect(PostHtmlAtomizer()({tag: 'html'})).toEqual({tag: 'html'});
	});
});

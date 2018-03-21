const Get = require('lodash.get');

const Node = exports;

function classAttribute(node) {
	return Get(node, 'attrs.class', '');
}

function map(tree, fn) {
	const result = [];

	tree.walk(node => {
		if (node.tag) {
			result.push(fn(node));
		}

		return node;
	});

	return result;
}

Node.classAttribute = classAttribute;
Node.map = map;

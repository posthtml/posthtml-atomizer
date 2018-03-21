const Fs = require('fs');
const Mkdirp = require('mkdirp');
const Path = require('path');

const Node = require('./node');
const Option = require('./option');
const Style = require('./style');

const Plugin = exports;

function instance(options) {
	options = Option.validate(options);
	options = Option.defaults(options);

	const style = Style.instance(options.atomizer);

	return tree => {
		const classes = Node.map(tree, node => Node.classAttribute(node));
		const css = style.generate(classes.join(' '));

		Mkdirp.sync(Path.dirname(options.path));
		Fs.writeFileSync(options.path, css);

		return tree;
	};
}

Plugin.instance = instance;

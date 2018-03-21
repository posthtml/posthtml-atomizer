const Atomizer = require('atomizer');

class Style {
	static instance({config, options}) {
		return new this(config, options);
	}

	constructor(config, options) {
		this._atomizer = new Atomizer();
		this._config = config;
		this._options = options;
	}

	generate(str) {
		const classes = this._atomizer.findClassNames(str);
		const config = this._atomizer.getConfig(classes, this._config);
		const css = this._atomizer.getCss(config, this._options);

		return css;
	}
}

module.exports = Style;

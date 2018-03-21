const Joi = require('joi');
const Merge = require('lodash.merge');

const Option = exports;

const SCHEMA = Joi.object().keys({
	atomizer: Joi.object().keys({
		config: Joi.object(),
		options: Joi.object(),
	}),
	path: Joi.string()
		.uri({allowRelative: true})
		.trim(),
});

function defaults(options) {
	return Merge(
		{
			path: './atomic.css',
			atomizer: {
				config: {},
				options: {},
			},
		},
		options,
	);
}

function validate(options) {
	return Joi.attempt(options, SCHEMA);
}

Option.defaults = defaults;
Option.validate = validate;

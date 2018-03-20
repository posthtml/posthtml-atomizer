# posthtml-atomizer

[![npm][npm-img]][npm-url]
[![travis][travis-img]][travis-url]
[![codecov][codecov-img]][codecov-url]
[![deps][deps-img]][deps-url]
[![license][license-img]][license-url]

A [PostHTML][posthtml-url] plugin to generate Atomic CSS definitions using [Atomizer][atomizer-url].

## Contents

- [Install](#install)
- [Options](#options)
- [License](#license)

## Install

1. Ensure that `posthtml` is installed already.
2. Install the plugin:

    ```sh
    $ npm install --save-dev posthtml-atomizer
    ```

3. Configure the plugin:

    ```js
    const posthtml = require('posthtml');

    // ...

    posthtml([
      require('posthtml-atomizer')({ path: './atomic.css' })
    ])

    // ...
    ```

4. Use [Atomizer's Atomic CSS classes][atomizer-ref] in your HTML:

    ```html
    // in index.html

    <html>
      <body>
        <div class="D(b) Va(t) Fz(20px)">Hello World!</div>
      </body>
    </html>
    ```

5. Generate Atomic CSS definitions as a result:

    ```
    // in generated atomic.css

    .D(b) {
        display: block;
    }
    .Va(t) {
        vertical-align: top;
    }
    .Fz(20px) {
        font-size: 20px;
    }
    ```

## Options

The options schema is the following:

- An object with the following optional keys:
    - `atomizer` - an object with the following optional keys:
        - `config` - the Atomizer configuration object used when generating CSS.
        - `options` - the Atomizer options object used when generating CSS
    - `path` - a string file path where the generated CSS is written.

### `atomizer`

These options are used to configure Atomizer itself.

### `atomizer.config`

- Default: `{}`

This option is used for configuring options such as `breakpoints`, `custom` suffixes, default `classNames`, etc.

### `atomizer.options`

- Default: `{}`

This option is used for configuring options such as `rtl`, `namespace`, `ie`, etc.

### `path`

- Default: `'atomic.css'`

This option is used to configure where the plugin will write the CSS Atomizer generates.

**NOTE**: If Atomizer does not generate any CSS, a blank file will still be created.

**NOTE**: If a file already exists at this location then it will be overwritten.

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/posthtml-atomizer.svg
[npm-url]: https://npmjs.com/package/posthtml-atomizer

[travis-img]: https://img.shields.io/travis/charlesbjohnson/posthtml-atomizer.svg
[travis-url]: https://travis-ci.org/charlesbjohnson/posthtml-atomizer

[codecov-img]: https://img.shields.io/codecov/c/github/charlesbjohnson/posthtml-atomizer.svg
[codecov-url]: https://codecov.io/github/charlesbjohnson/posthtml-atomizer?branch=master

[deps-img]: https://david-dm.org/charlesbjohnson/posthtml-atomizer.svg
[deps-url]: https://david-dm.org/charlesbjohnson/posthtml-atomizer

[license-img]: https://img.shields.io/github/license/charlesbjohnson/posthtml-atomizer.svg
[license-url]: ./LICENSE

[posthtml-url]: https://github.com/posthtml/posthtml

[atomizer-url]: https://github.com/acss-io/atomizer
[atomizer-ref]: https://acss.io/reference

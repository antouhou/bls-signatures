const path = require('path');

const baseConfig = {
    entry: ['./blsjs.js'],
    module: {
        rules: [{
            test: /\.wasm$/,
            use: 'wasm-loader',
        }],
    },
    node: {
        fs: 'empty'
    }
};

const webConfig = Object.assign({}, baseConfig, {
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'web.bundle.js',
    },
});

module.exports = [webConfig];

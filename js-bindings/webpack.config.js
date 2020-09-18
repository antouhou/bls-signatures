const path = require('path');

const baseConfig = {
    mode: 'production',
    entry: ['./blsjs.js'],
    module: {
        rules: [{
            test: /\.wasm$/,
            type: 'javascript/auto',
            loader: 'file-loader',
        }],
    },
    node: {
        fs: 'empty'
    }
};

const webConfig = Object.assign({}, baseConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: "bls",
        libraryTarget: "umd",
    },
});

module.exports = [webConfig];

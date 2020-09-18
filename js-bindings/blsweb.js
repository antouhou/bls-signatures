// emscripten needs to be installed with fastcomp backend (version 1.38.x)
// fastcomp was removed in 2.0.x

// build scripts for linux and are located in the root dir

// for mac os, run brew install coreutils

// Edit blsjs.js that was produced by emcripten
// Webpack config will bundle will put result into dist/bundle.js

const buffer = require('./blsjs.wasm');
const blob = new Blob([buffer], { type: "application/wasm" });
const wasmUrl = URL.createObjectURL(blob);

// cmd + f -> fetch -> replace J with wasmUrl

// wasm = await instantiateStreaming(fetch(wasmUrl), {});
// URL.revokeObjectURL(wasmUrl);
// emscripten needs to be installed with fastcomp backend (version 1.38.x)
// fastcomp was removed in 2.0.x

// build scripts for linux and are located in the root dir

// for mac os, run brew install coreutils oracle-jdk

// Edit blsjs.js that was produced by emcripten
// Webpack config will bundle will put result into dist/bundle.js

var Module = (function() {
    var buf = require("./blsjs.wasm");
    var blob = new Blob([buf], { type: "application/wasm" });
    var wasmUrl = URL.createObjectURL(blob);

// cmd + f -> fetch -> replace J with wasmUrl

// wasm = await instantiateStreaming(fetch(wasmUrl), {});
// URL.revokeObjectURL(wasmUrl);

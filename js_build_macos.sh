#!/usr/bin/env bash

git submodule update --init --recursive

mkdir js_build
cd js_build

echo "You need to install coreutils to build on mac os"
# brew install coreutils

cmake ../ -DCMAKE_TOOLCHAIN_FILE=$(grealpath $(which emcc))/../cmake/Modules/Platform/Emscripten.cmake
cmake --build . --

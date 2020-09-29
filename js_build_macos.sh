#!/usr/bin/env bash

#git submodule update --init --recursive

if [ -d js_build ]; then rm -Rf js_build; fi
mkdir js_build
cd js_build

echo "You need to install coreutils and JDK to build on mac os"
# brew install coreutils
# brew install oracle-jdk

cmake ../ -DCMAKE_TOOLCHAIN_FILE=$(grealpath $(which emcc))/../cmake/Modules/Platform/Emscripten.cmake
cmake --build . --

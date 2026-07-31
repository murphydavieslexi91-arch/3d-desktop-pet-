#!/usr/bin/env bash
set -euo pipefail

# Minimal helper to build llama.cpp in ./third_party/llama.cpp
# This script expects typical Linux/macOS toolchain. On Windows, use WSL2.

LLAMA_DIR="third_party/llama.cpp"

mkdir -p "$LLAMA_DIR"
cd "$LLAMA_DIR"

if [ ! -d .git ]; then
  echo "Cloning llama.cpp (shallow)..."
  git clone --depth 1 https://github.com/ggerganov/llama.cpp.git .
fi

echo "Building llama.cpp with default settings (make)..."
make clean
make -j$(nproc || echo 4)

echo "llama.cpp built into $LLAMA_DIR/bin"

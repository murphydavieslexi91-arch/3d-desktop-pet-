#!/usr/bin/env bash
set -euo pipefail

# Simple helper to download a recommended 7B GGUF quantized model.
# Edit MODEL_URL below to point to your chosen model mirror.

MODEL_URL="https://example.com/models/7b-recommended.gguf"
DEST_DIR="models"

mkdir -p "$DEST_DIR"

echo "Downloading model from $MODEL_URL to $DEST_DIR/..."
if command -v curl >/dev/null 2>&1; then
  curl -L --progress-bar -o "$DEST_DIR/7b.gguf" "$MODEL_URL"
elif command -v wget >/dev/null 2>&1; then
  wget -O "$DEST_DIR/7b.gguf" "$MODEL_URL"
else
  echo "Please install curl or wget and re-run this script."
  exit 1
fi

echo "Download complete. Place the model in a path accessible to the app and update settings if needed."

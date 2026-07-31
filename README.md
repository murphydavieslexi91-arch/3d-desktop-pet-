# charlirshrooms-desktop-pet

Desktop Companion / "Desktop Pet" app — Tauri + React + Three.js frontend with a Rust backend and a local inference adapter (llama.cpp) for on-device AI.

This repository contains a scaffold for running a lightweight local 7B quantized model and fallback to remote GPU inference.

Contents in this scaffold:

- Tauri + React (Vite) app with a Three.js model viewer and drag/drop placeholder.
- Rust Tauri backend skeleton that will spawn a local llama.cpp adapter process with sensible defaults.
- Scripts to download a recommended 7B GGUF quantized model and to build llama.cpp.
- Settings UI to toggle local vs remote inference, select model path, and set thread count.

Quickstart (scaffold):

1. Install Node.js (16+), Rust, and Tauri prereqs (see Tauri docs).
2. From repo root:
   - npm install
   - npm run tauri:dev

Platform notes and WSL2 instructions are included in the scaffold README sections below.

License: MIT

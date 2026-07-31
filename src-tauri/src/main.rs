#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use tauri::Manager;
use std::process::{Command, Stdio};

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // Spawn the local adapter process (llama.cpp wrapper) when the app starts
      // This is a scaffold: the actual adapter binary path and args should be configurable.

      std::thread::spawn(|| {
        let adapter_path = "./third_party/llama.cpp/bin/adapter"; // placeholder
        if let Ok(mut child) = Command::new(adapter_path)
          .arg("--mmap")
          .arg("--threads")
          .arg("4")
          .stdout(Stdio::null())
          .stderr(Stdio::null())
          .spawn()
        {
          // keep process alive until app exits; in scaffold we don't wait here.
          let _ = child;
        }
      });

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

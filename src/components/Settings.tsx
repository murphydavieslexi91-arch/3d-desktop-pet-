import React, { useState } from 'react'

export default function Settings(){
  const [useLocal, setUseLocal] = useState(true)
  const [modelPath, setModelPath] = useState('models/7b.gguf')
  const [threads, setThreads] = useState(4)

  return (
    <div>
      <label style={{display: 'block', marginBottom: 8}}>
        <input type="checkbox" checked={useLocal} onChange={e => setUseLocal(e.target.checked)} /> Use local inference (llama.cpp)
      </label>

      <label style={{display: 'block', marginBottom: 8}}>
        Model path
        <input style={{width: '100%'}} value={modelPath} onChange={e => setModelPath(e.target.value)} />
      </label>

      <label style={{display: 'block', marginBottom: 8}}>
        Threads
        <input type="number" min={1} max={32} value={threads} onChange={e => setThreads(Number(e.target.value))} />
      </label>

      <button style={{marginTop: 12}} onClick={() => alert('Save settings (scaffold)')}>Save</button>
    </div>
  )
}

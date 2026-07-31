import React from 'react'
import ModelViewer from './components/ModelViewer'
import Settings from './components/Settings'

export default function App() {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <div style={{flex: 1}}>
        <ModelViewer />
      </div>
      <aside style={{width: 360, borderLeft: '1px solid #eee', padding: 16}}>
        <h2>Settings</h2>
        <Settings />
      </aside>
    </div>
  )
}

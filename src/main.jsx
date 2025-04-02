'use strict'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

function App() {
    return (
        <div className="App">
            <h1>Vite + React + SWC</h1>
            <img src="/logo.svg" alt="logo" />
            <p>Excalidraw Clone</p>
        </div>
    )
}

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

function Root() {
  useEffect(() => {
    // Always use dark theme
    const html = document.documentElement
    html.classList.add('dark')
    html.classList.add('scheme-dark')
  }, [])

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)

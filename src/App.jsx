import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button1 from './components/Button1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Component Library Collection</h1>
        <p>Storybook Link coming soon.</p>
        <Button1 />
      </div>
    </>
  )
}

export default App

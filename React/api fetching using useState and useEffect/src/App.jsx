import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jokes from './components/Jokes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Jokes />
    </>
  )
}

export default App

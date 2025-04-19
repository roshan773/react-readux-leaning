import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product />
    </>
  )
}

export default App

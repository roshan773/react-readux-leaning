import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {

  const [count, setcount] = useState(0)

  const btnref = useRef()

  const handleclick = () => {
    setcount(count + 1)
  }

  const changecolour = () => {
    btnref.current.style.backgroundColor = "Blue"
    btnref.current.style.backgroundColor = "red"
    btnref.current.style.backgroundColor = "white"
  }

  return (
    <>
      <div>
        {count}
      </div>
      <button onClick={handleclick} ref={btnref}>Change Count</button>
      <button onClick={changecolour}>Change colour on click of first btn</button>
    </>
  )
}

export default App

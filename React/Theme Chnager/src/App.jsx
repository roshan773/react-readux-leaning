

import { createContext, useState } from 'react'
import './App.css'
import Theme from './Components/Theme'

export const ThemeContext = createContext()

function App() {

  const [theme, settheme] = useState("LIGHT MODE")

  return (
    <>
      <ThemeContext.Provider value={{theme, settheme}}>
        <Theme />
      </ThemeContext.Provider>
    </>
  )
}

export default App

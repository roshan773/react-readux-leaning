import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Theme = () => {
    const {theme, settheme} = useContext(ThemeContext)

    const handlechnage = () => {
        if(theme === "LIGHT MODE"){
            settheme("DARK MODE")
        }
        else{
            settheme("LIGHT MODE")
        }
    }
  return (
    <div>
        <div className='container' style={{backgroundColor: theme === "DARK MODE"? "#ffffff" : "#000000", color: theme === "DARK MODE"? "#000000" : "#ffffff"}}>{theme}</div>
        <button onClick={handlechnage}>{theme === "LIGHT MODE"? "Change to light" : "Change to dark" }</button>
    </div>
  )
}

export default Theme
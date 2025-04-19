import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA';

export const UserContext = createContext();

function App() {

  const [user, setuser] = useState({name: "Roshan"})

  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  )
}

export default App


import './App.css'
import Name from './components/Name'

function App() {

  const name = "Roshan"
  const age = 25

  const greet = () => {
    alert("Lets Meet Soon")
   }

  return (
    <>
      <Name name={name} age={age} greet={greet}/>
    </>
  )
}

export default App

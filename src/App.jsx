
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from "./components/Home"
import Projects from "./components/Projects"


function App() {
 

  return (
    <>
     <Nav />
      <Routes>
<Route path='/' element={<Home />}/> 
<Route path='/projects' element={<Projects/>} /> 
     </Routes>
    </>
  )
}

export default App

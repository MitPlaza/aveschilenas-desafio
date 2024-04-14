import Home from './vistas/Home'
import {Route, Routes} from "react-router-dom"
import Favoritos from './vistas/Favoritos'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {


  return (
   
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
      </Routes>
      <Footer/>
      </>
    
  )
}

export default App

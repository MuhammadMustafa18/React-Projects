import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Footer from "./components/Footer";
import Home from './components/home';
import { BrowserRouter } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </BrowserRouter>
   
  )
}

export default App

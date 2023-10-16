import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {initializeApp } from 'firebase/app'
import { config } from './config/config'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Navbar from './components/navbar/Navbar'

initializeApp(config.firebaseConfig)

type Props = {}

const App = (props: Props) => {
  return (
    <>
    
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {initializeApp } from 'firebase/app'
import { config } from './config/config'
import Home from './pages/Home'
import AboutUs from './pages/Aboutus'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'

initializeApp(config.firebaseConfig)

type Props = {}

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

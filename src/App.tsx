import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/Aboutus/AboutUs'
import ContactUs from './pages/Contact/ContactUs'
import Login from './pages/Login/Login'
import Navbar from './components/navbar/Navbar'
import ProductForm from './components/productform/ProductForm'
import Register from './pages/Register/Register'

const App = () => {
  return (
    <>
    
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
        <Route path='ProductForm' element={<ProductForm/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

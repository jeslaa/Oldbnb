import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Navbar from './components/navbar/Navbar'
import ProductForm from './components/productform/ProductForm'

type Props = {}

const App = (props: Props) => {
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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

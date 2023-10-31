import { useState } from 'react'
import axios from "axios"
import './ProductForm.scss'
import { useNavigate } from 'react-router-dom';

interface Product {
    creationDate: string | number | Date;
    productName: string;
    description: string;
    price: number;
    imageUrl: string;
  }

const ProductForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()

    const saveProduct = async(e : any) => {
        e.preventDefault()
        
        if(name === "" || description === "" || price === "" || image === ""){
            alert('Var vänlig och fyll i allt i formuläret')
        }

        try {
            await axios.post("http://localhost:3000/api/products/", {productName: name, description: description, price: price, imageUrl: image})
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='form'>
        <h2 className=''>
        Skapa ett boende
        </h2>
        <form onSubmit={saveProduct}>
        <div className='form-container'>
            <div className='label-input'>
                <label typeof='text'>Namn: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='label-input'>
                <label typeof='text'>Beskrivning: </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='label-input'>
                <label typeof='text'>Pris: </label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className='label-input'>
                <label typeof='text'>Bild Url: </label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className='submit'>
                <button className='submit-btn'>Skicka</button>
            </div>
        </div>
        </form>
    
    </div>
  )
}

export default ProductForm
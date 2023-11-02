import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Products from "../../components/product/Product";
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

type Product = {
  creationDate: string | number | Date;
  productName: string;
  description: string;
  price: number;
  imageUrl: string[];
  id: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/api/products/");
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="btn-container"> 
      <button className="product-form"><Link to='/ProductForm'>Skapa Boende</Link></button>
      </div>
     
      <div className="row m-0">
        {products.map((product, index) => ( 
          <Products key={index} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Home;

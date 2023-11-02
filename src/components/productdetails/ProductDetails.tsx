import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

type ProductDetailsProps = {
    productName: string;
    description: string;
    price: number;
    imageUrl: string[];
    _id: string;
}

const ProductDetails: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<ProductDetailsProps | null>(null)

    const getProductById = async (productId: string) => {

        try {
        const response = await axios.get(`http://localhost:3000/api/products/${productId}`)
        return response.data
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        if (productId) {
          console.log(`Fetching product with ID: ${productId}`);
          const fetchProductData = async () => {
            try {
              const productData = await getProductById(productId);
      
              if (productData) {
                setProduct(productData as ProductDetailsProps);
              } else {
                console.error(`Product with ID ${productId} not found`);
              }
            } catch (error) {
              console.error('Error fetching product data:', error);
            }
          };
      
          fetchProductData();
        } else {
          console.error('Missing productId');
        }
      }, [productId]);
      
      
  
    return (
    <div>
        <h2>Product Details</h2>
        {product ? (
            <div>
                <h3>{product.productName}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price} kr</p>
                <img src={product.imageUrl[0]} alt="" />
                <img src={product.imageUrl[1]} alt="" />
                {/* Display other product details as needed */}
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
}

export default ProductDetails
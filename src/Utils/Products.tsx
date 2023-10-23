import React, { useEffect, useState } from 'react';
import { db } from '../config/config';
import { collection, getDocs } from 'firebase/firestore';

interface Product {
  creationDate: string | number | Date;
  productName: string;
  description: string;
  price: number;
  imageUrls: string[];
}

const Products: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to Firestore collection
        const productsCollection = collection(db, 'products')
        const querySnapshot = await getDocs(productsCollection)

        const newData: Product[] = [];

        querySnapshot.forEach((doc : any) => {
          const productData = doc.data() as Product;
          newData.push(productData);
        });

        setData(newData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div>Product Name: {item.productName}</div>
            <div>Description: {item.description}</div>
            <div>Price: ${item.price}</div>
            <div>Image URLs: 
                {item.imageUrls.map((imageUrl, i) => (
                    <img key={i} src={imageUrl} alt={`Image ${i}`}></img>
                ))}
                </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

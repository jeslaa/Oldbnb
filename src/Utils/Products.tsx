import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.scss'

interface Product {
  creationDate: string | number | Date;
  productName: string;
  description: string;
  price: number;
  imageUrls: string[];
}

// const Products: React.FC = () => {
// //   // const [data, setData] = useState<Product[]>([]);

// //   // const imageMaxHeight = '400px'

// //   // useEffect(() => {
// //   //   const fetchData = async () => {
// //   //     try {
// //   //       // Reference to Firestore collection
// //   //       const productsCollection = collection(db, "products");
// //   //       const querySnapshot = await getDocs(productsCollection);

// //   //       const newData: Product[] = [];

// //   //       querySnapshot.forEach((doc: any) => {
// //   //         const productData = doc.data() as Product;
// //   //         newData.push(productData);
// //   //       });

// //   //       setData(newData);
// //   //     } catch (error) {
// //   //       console.error("Error fetching data: ", error);
// //   //     }
// //   //   };

// //   //   fetchData();
// //   // }, []);

// //   return (
// //     <div>
// //       <h2>Fetched Data</h2>
// //       <div className="row">
// //         {data.map((item, index) => (
// //           <div className="col-md-4" key={index}>
// //             <div className='card'>
// //               <img src={item.imageUrls[0]} className="card-img-top" alt="Product Image" style={{maxHeight: imageMaxHeight}}/>
// //               <div className="card-body">
// //                 <h5 className="card-title">{item.productName}</h5>
// //                 <p className="card-text">{item.description}</p>
// //                 <div className="container">
// //                 <h4 className="card-text">Price: ${item.price}</h4>
// //                 <button className="details-btn">
// //                 <Link to="/" >Detaljer</Link>
// //                 </button>
// //                 </div>
                
                
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// // </div>
//   // );
// };

// export default Products;

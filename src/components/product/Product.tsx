import React from 'react';
import { Link } from 'react-router-dom';
import './products.scss';

interface ProductProps {
  product: Product;
}

interface Product {
  creationDate: string | number | Date;
  productName: string;
  description: string;
  price: number;
  imageUrl: string[];
  _id: string; 
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const imageMaxHeight = '400px';
  const maxDescriptionLength = 50;

  //Shortens down the description
  const slicedDescription =
    product.description.length > maxDescriptionLength
      ? `${product.description.slice(0, maxDescriptionLength)}...`
      : product.description;

  return (
    <div className="col-md-4 section-container">
      <div className="card">
        <img
          src={product.imageUrl[0]}
          className="card-img-top"
          alt="Product Image"
          style={{ maxHeight: imageMaxHeight }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">{slicedDescription}</p>
          <div className="container">
            <h4 className="card-text"> {product.price}kr/natt</h4>
            <button className="details-btn">
              <Link to={`/ProductDetails/${product._id}`}>Detaljer</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

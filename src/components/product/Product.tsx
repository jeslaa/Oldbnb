import React from 'react';
import { Link } from 'react-router-dom';
import './products.scss'

interface ProductProps {
  product: Product;
}

interface Product {
  creationDate: string | number | Date;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = ({ product }) => {

    const imageMaxHeight = '400px'

  return (
    <div className="col-md-4 section-container">
            <div className="card">
              <img
                src={
                  product.imageUrl}
                className="card-img-top"
                alt="Product Image"
                style={{ maxHeight: imageMaxHeight }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.description}</p>
                <div className="container">
                  <h4 className="card-text">Pris: {product.price}kr</h4>
                  <button className="details-btn">
                    <Link to="/">Detaljer</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Product;

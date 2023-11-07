import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import { Link, useParams } from "react-router-dom";
import { MdArrowBackIosNew, MdKeyboardArrowRight } from "react-icons/md";
import Calendar from "../Calendar/Calendar";
import axios from "axios";

type ProductDetailsProps = {
  productName: string;
  description: string;
  price: number;
  imageUrl: string[];
  _id: string;
};

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetailsProps | null>(null);

  const onChange = (ranges: any) => {
    console.log(ranges);
  };

  const getProductById = async (productId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/${productId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

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
          console.error("Error fetching product data:", error);
        }
      };

      fetchProductData();
    } else {
      console.error("Missing productId");
    }
  }, [productId]);

  return (
    <div className="product-container">
      <Link to={"/"} onClick={(e) => e.stopPropagation()}>
        <h2 className="arrow-back">
          <MdArrowBackIosNew />
        </h2>
      </Link>
      <div className="accommodation">
        <h6>
          Boende <MdKeyboardArrowRight /> {product?.productName}
        </h6>
      </div>
      {product ? (
        <div className="product-details-container">
          <div className="pictures-flex">
            <div className="big-picture">
              <img
                className="bigg"
                src={product.imageUrl[0]}
                alt={`${product.productName}`}
              />
            </div>

            <div className="small-container">
              <div className="small-picture">
                <img
                  className="small"
                  src={product.imageUrl[1]}
                  alt={`${product.productName}`}
                />
                <img
                  className="small"
                  src={product.imageUrl[2]}
                  alt={`${product.productName}`}
                />
              </div>

              <div className="small-picture">
                <img
                  className="small"
                  src={product.imageUrl[3]}
                  alt={`${product.productName}`}
                />
                <img
                  className="small"
                  src={product.imageUrl[4]}
                  alt={`${product.productName}`}
                />
              </div>
            </div>
          </div>
          <div className="product-det-container">
            <div className="product-det">
              <h2 className="product-header">{product.productName}</h2>
              <p>{product.description}</p>
              <ul className="list">
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </li>
              </ul>
              <div className="details">
                <p>Detaljer</p>
                <Link className="policy-link" to={'/Policy'}><p>Avbokningspolicy</p></Link>
              </div>
              <div>
                <p className="p-details">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam, repellat libero quidem, consequuntur illo iusto
                  reiciendis voluptate ullam placeat, soluta doloribus delectus!
                  Tempora autem impedit numquam quasi odit iste! Nulla harum
                  sint autem at. Eaque quos recusandae deleniti esse saepe, eos
                  id minus officia, quo nobis dolores eveniet animi. Totam
                  deserunt vitae velit provident dignissimos saepe
                  exercitationem ipsa debitis. Asperiores, deleniti earum neque
                  voluptate et voluptatum est ab veritatis provident saepe
                  numquam esse. Quos quaerat facere rerum unde maxime hic. Ea
                  sunt architecto doloribus repudiandae, fugiat qui dolores
                  natus iure similique et aliquid tempora cupiditate quia
                  reiciendis eum hic expedita?
                </p>
              </div>

              <p>Price: {product.price} kr</p>
            </div>
            <div className="calender">
              <Calendar onChange={onChange} />
            </div>
          </div>

          {/* Display other product details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;

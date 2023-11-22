import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { PiForkKnife, PiTelevisionSimpleBold } from "react-icons/pi";
import { CgCoffee } from "react-icons/cg";
import { LuBedDouble } from "react-icons/lu";
import RangeDatePicker from "../datepicker/DatePicker";
import axios from "axios";
import "./ProductDetails.scss";
import Carousel from "../carousel/Carousel";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import moment from "moment-timezone";

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
  const [numberOfNights, setNumberOfNights] = useState<number | null>(null);
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const handleNumberOfNightsChange = (nights: number | null) => {
    setNumberOfNights(nights);
  };

  //Fetch to the database
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

  //Get the product id from the database
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

  //Function to send the data for the booking to the database
  const bookThisPlace = async () => {
    try {
      //Adjusting dates to UTC before sending to the server
      const checkInDate = startDate ? moment(startDate).utc() : null;
      const checkOutDate = endDate ? moment(endDate).utc() : null;

      const response = await axios.post("http://localhost:3000/api/bookings", {
        place: product?._id,
        checkIn: checkInDate?.toISOString(),
        checkOut: checkOutDate?.toISOString(),
        numberOfGuests: numberOfGuests,
      });

      const bookingId = response.data.booking._id;
      console.log("Booking created successfully", response.data);
      //Include numberOfNights in the state when navigating
      navigate(`/Payment/${productId}/${bookingId}`, {
        state: { numberOfNights },
      });
    } catch (error) {
      console.error("Error creating booking", error);
    }
  };

  //Function to navigate to contactowner page
  const handleContact = () => {
    navigate("/ContactOwner");
  };

  //Setting the number of guests based on user input
  const handleNumberOfGuests = (e: React.ChangeEvent<HTMLInputElement>) => {
    const guests = +e.target.value;
    setNumberOfGuests(guests);
    console.log(guests);
  };

  return (
    <div className="product-container">
      <Link to={"/"} onClick={(e) => e.stopPropagation()} className="arrow-a">
        <h2 className="arrow-back">
          <BsFillArrowLeftSquareFill className="arrow" />
        </h2>
      </Link>
      <div className="accommodation">
        <h6>
          Boende <MdKeyboardArrowRight /> {product?.productName}
        </h6>
      </div>
      {product ? (
        <div className="product-details-container">
          <Carousel product={product} />
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
                <p className="details-p">Detaljer</p>
                <Link className="policy-link" to={"/Policy"}>
                  <p>Avbokningspolicy</p>
                </Link>
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

              <div className="included">
                <h4 className="included-header">Ingår</h4>
                <div className="included-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, dolorum? Natus exercitationem, iusto cum, dolorum,
                  fugiat ratione obcaecati sit ipsam nam velit sed
                  necessitatibus nisi aut possimus magnam esse? Totam!
                </div>
                <div className="included-logos">
                  <div>
                    <p>
                      Wifi <AiOutlineWifi />
                    </p>
                  </div>
                  <div>
                    <p>
                      Kök <PiForkKnife />
                    </p>
                  </div>
                  <div>
                    <p>
                      Frukost <CgCoffee />
                    </p>
                  </div>
                  <div>
                    <p>
                      Dubbelsäng <LuBedDouble />
                    </p>
                  </div>
                  <div>
                    <p>
                      TV <PiTelevisionSimpleBold />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="calender">
                <h4 className="date-picker-header">Välj datum:</h4>
                <RangeDatePicker
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  onNumberOfNightsChange={handleNumberOfNightsChange}
                />
              </div>
              <div className="price_btn">
                <div className="details-price">
                  <h4 className="product-price">
                    {numberOfNights !== null
                      ? `Totala priset: ${numberOfNights * product.price}kr`
                      : `${product.price}kr/natt`}
                  </h4>
                </div>
                <div className="rating">
                  <p>Betyg:</p>
                </div>

                <div className="amount-guests">
                  <label htmlFor="">Gäster:</label>
                  <input
                    type="number"
                    className="guests"
                    value={numberOfGuests}
                    onChange={handleNumberOfGuests}
                  />
                </div>

                <div className="product-det-btn">
                  <button className="book-btn" onClick={bookThisPlace}>
                    Boka nu
                  </button>
                  <button className="favourites-btn" onClick={handleContact}>
                    Kontakta värden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;

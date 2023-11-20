import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import "./Payment.scss";
import axios from "axios";

type ProductDetailsProps = {
  productName: string;
  description: string;
  price: number;
  imageUrl: string[];
  _id: string;
};

type BookingDetailsProps = {
  place: ProductDetailsProps;
  checkIn: string;
  checkOut: string;
  numberOfGuests: number;
  price?: number;
  _id: string;
};

const handlePay = () => {
    
}

const Payment: React.FC = () => {
  const { productId, bookingId } = useParams<{
    productId: string;
    bookingId: string;
  }>();
  const [product, setProduct] = useState<ProductDetailsProps | null>(null);
  const [booking, setBooking] = useState<BookingDetailsProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Make parallel requests to fetch product and booking details
        const [productResponse, bookingResponse] = await Promise.all([
          axios.get(`http://localhost:3000/api/products/${productId}`),
          axios.get(`http://localhost:3000/api/bookings/${bookingId}`),
        ]);

        //Set product details
        setProduct(productResponse.data);

        //Set booking details
        setBooking(bookingResponse.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    //Fetch data only if both productId and bookingId are present
    if (productId && bookingId) {
      fetchData();
    }
  }, [productId, bookingId]);

  return (
    <div className="payment-container">
      <div className="payment-left-container">
        <div className="payment-place">
          <h3>{product?.productName}</h3>
        </div>
        <div className="place-image">
          {product?.imageUrl.slice(0, 1).map((image, index) => (
            <div key={index}>
              <img className="image" src={image} alt={image} />
            </div>
          ))}
        </div>

        <div className="details">
          <p className="">Detaljer</p>
          <div className="policy"></div>
          <Link to={"/Policy"} className="policy">
            Avbokningspolicy
          </Link>
        </div>
        <div className="product-description">{product?.description}</div>
        <div className="box-container">
          <div className="check-in center">
            <p>
              <AiOutlineSchedule className="schedule-icon" /> {booking?.checkIn}{" "}
            </p>
          </div>
          <div className="check-out center">
            <p>{booking?.checkOut}</p>
          </div>
          <div className="guests center">
            <p>
              <IoIosPeople className="people-icon" /> Antal Gäster:{" "}
              {booking?.numberOfGuests}
            </p>
          </div>
        </div>
      </div>

      <div className="payment-right-container">
        <div className="payment-header-right">
          <h3>Betalning</h3>
          <p className="header-p">
            Slutför din betalning genom att ange dina betalningsuppgifter
          </p>
        </div>

        <div className="form-container">
          <form id="form">
            <div className="form-group">
              <label className="labels" htmlFor="">
                Email address:
              </label>
              <br />
              <input type="text" className="inputs" />
            </div>

            <div className="form-group">
              <label className="labels" htmlFor="">
                Kort detaljer:
              </label>
              <br />
              <input type="text" className="inputs" />
            </div>

            <div className="form-group">
              <label className="labels" htmlFor="">
                Korteinnehavarens namn:
              </label>
              <br />
              <input type="text" className="inputs" />
            </div>

            <div className="form-group">
              <label className="labels" htmlFor="">
                Faktureringsadress:
              </label>
              <br />
              <input type="text" className="inputs" />
            </div>

            <div className="form-group">
              <label className="labels" htmlFor="">
                Momsregistreringnummer:
              </label>
              <br />
              <input type="text" className="inputs" />
            </div>
           
            <div className="sum-box-container">
          <div className="sum-box">
            <div className="totals">
              <p>
                Delsumma:{" "}
                {booking?.price !== undefined ? booking?.price - 346 : "N/A"} :-
              </p>
              <p>Moms: 346 :-</p>
              <h3>Totalt: {booking?.price} kr</h3>
            </div>

            <div className="pay">
              <button className="pay-btn" onClick={handlePay}>Betala</button>
            </div>
          </div>
        </div>
          </form>
        </div>

       
      </div>
    </div>
  );
};

export default Payment;

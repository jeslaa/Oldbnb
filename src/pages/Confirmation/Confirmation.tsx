import { Link } from "react-router-dom";
import "./Confirmation.scss";
import { useEffect, useState } from "react";
import axios from "axios";

type ImageProps = {
  image: string[];
  imageName: string;
};

const Confirmation = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  //Fetching the images from the database
  const getImages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/images/");
      setImages(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="conf-container">
      <div className="conf-header">
        <h2>Tack för din beställning</h2>
      </div>
      <div className="conf-p">
        <p>
          Ett kvitto på din bokning kommer att skickas på e-post om du har
          funderingar på våran avbokningspolicy kan du hitta den informationen
          <Link to={"/Policy"}> här.</Link>
        </p>
      </div>
      <div className="image-container">
        {images.slice(6, 7).map((item, index) => (
          <img src={item.image[0]} alt={item.imageName[0]} key={index} className="img"/>
        ))}
      </div>

      <Link to={'/'} className="back">Tillbaka till startsidan</Link>
    </div>
  );
};

export default Confirmation;

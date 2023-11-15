import axios from "axios";
import { useEffect, useState } from "react";
import "./Aboutus.scss";

type ImageProps = {
  image: string[];
  imageName: string;
};

const AboutUs = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

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
    <div className="about-container">
      <div className="left-top">
        <h3>Sed ut perspiciatis unde omnis</h3>

        <div className="left-top-p">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
      </div>

      <div className="right-top">
        {images.slice(1, 5).map((item, index) => (
          <img
            className="about-images"
            src={item.image[0]}
            alt={item.imageName[0]}
            key={index}
          />
        ))}
      </div>

      <div className="right-hidden">
        {images.slice(1, 2).map((item, index) => (
          <img
            className="about-images"
            src={item.image[0]}
            alt={item.imageName[0]}
            key={index}
          />
        ))}
      </div>

      <div className="bottom-left">
        {images.slice(5, 6).map((item, index) => (
          <img
            className="working-image"
            src={item.image[0]}
            alt={item.imageName[0]}
            key={index}
          />
        ))}
      </div>

      <div className="bottom-right">
        <h3>Sed ut perspiciatis unde omnis</h3>

        <div className="bottom-right-p">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

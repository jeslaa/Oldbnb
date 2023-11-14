import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Policy.scss";

type ImageProps = {
  image: string[];
};

const Policy: React.FC = () => {
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
    <div className="policy-container">
      <h3 className="policy-header">Avbokingspolicy</h3>
      <p className="lorem-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        adipisci, reprehenderit in quod veniam illum. Aut nemo corrupti sapiente
        corporis perspiciatis sequi aperiam, sit sint quidem molestias inventore
        alias, dolorem quasi. Saepe, velit omnis! Nihil voluptate laboriosam
        omnis facere suscipit vero illo, nostrum ipsa fuga doloremque cupiditate
        tempore non dolore odit similique quae temporibus commodi natus et enim
        recusandae accusamus! Consectetur odio ducimus tempore quam
        exercitationem dolores quisquam nulla laborum facere dolore est
        molestiae expedita inventore mollitia quis, ratione numquam repellendus
        corporis magni eum fugiat corrupti similique. Quas cumque laboriosam
        cupiditate! Illum nemo, incidunt alias provident voluptatem nostrum
        corrupti accusantium?
      </p>

      <div className="container2">
      <div className="policy-image1">
            {images.map((item, index) => (
              <img className="img-policy1"
                src={item.image[0]}
                alt="Avbokningspolicy bild"
                key={index}
              />
            ))}
          </div>
        <div className="policy-p">
        <h3 className="policy-header2">Rubrik</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            vero sint, fugiat omnis facilis ad similique est, beatae voluptate
            exercitationem nostrum explicabo eos sapiente! Tenetur facilis
            pariatur repudiandae iste placeat optio repellat excepturi
            consequatur animi porro, obcaecati nam, quasi reiciendis voluptatem
            quam enim quos harum quo esse nisi voluptatum! Ipsa.
          </p>
        </div>
        <div className="policy-image">
            {images.map((item, index) => (
              <img className="img-policy"
                src={item.image[0]}
                alt="Avbokningspolicy bild"
                key={index}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Policy;

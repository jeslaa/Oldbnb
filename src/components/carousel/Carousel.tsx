import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.scss";

type ProductDetailsProps = {
  productName: string;
  description: string;
  price: number;
  imageUrl: string[];
  _id: string;
};

const Carousel = ({ product }: { product: ProductDetailsProps | null }) => {
  const [Slide, setSlide] = useState(0);

  //Function for going to the next slide
  const nextSlide = () => {
    if (product && product.imageUrl) {
      setSlide(Slide === product?.imageUrl.length - 1 ? 0 : Slide + 1);
    }
  };

    //Function for going to the previous slide
  const prevSlide = () => {
    if (product && product.imageUrl) {
      setSlide(Slide === 0 ? product?.imageUrl.length - 1 : Slide - 1);
    }
  };

  return (
    <div className="pictures-slider">
      <div className="carousel-container-flex">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {product!.imageUrl.map((imageUrl, index) => (
          <div className={`slider-image`} key={index}>
            <img
              className={
                Slide === index ? "big-slider" : "big-slider slide-hidden"
              }
              src={imageUrl}
              alt={`${(product as ProductDetailsProps).productName}`}
              key={index}
            />
          </div>
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {product!.imageUrl.map((_, index) => {
            return (
              <button
              onClick={() => setSlide(index)}
                key={index}
                className={
                  Slide === index ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Carousel;

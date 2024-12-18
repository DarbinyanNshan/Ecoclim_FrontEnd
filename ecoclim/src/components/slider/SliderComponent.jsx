import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import img1 from "../../assets/images/slider/sliderImg1.jpg";
import img2 from "../../assets/images/slider/sliderImg2.jpg";

import { useTranslation } from "react-i18next";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true, 
    afterChange: (current) => {
      setCurrentSlide(current);
      setTimeout(() => setIsAnimating(true), 50);
    }
  };
  const images = [img1, img2];

  return (
    <div className="slider-container">
      <div className={`overlay ${currentSlide === 0 && isAnimating ? 'animate' : ''}`}>
        <h3>{t("sliderHome.welcome")}</h3>
      <p>{t("sliderHome.trust_us")}</p>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

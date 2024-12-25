import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutSlider.css";
import img1 from "../../assets/images/slider/sliderImg1.jpg";
import img2 from "../../assets/images/slider/sliderImg2.jpg";

const AboutSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef(null);

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    arrows: false,
    fade: true,
    autoplay: true,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1, 
          arrows: true, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  const images = [img1, img2];

  return (
    <div className="slider-component">
      <Slider {...mainSettings} ref={mainSlider}>
        {images.map((img, index) => (
          <div key={index} className="main-slide">
            <div className="image-wrapper">
              <img src={img} alt={`Slide ${index + 1}`} className="main-image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutSlider;

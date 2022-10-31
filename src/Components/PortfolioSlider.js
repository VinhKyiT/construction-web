import React from "react";

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Arrows
import Next from "../Icons/Next";
import Prev from "../Icons/Prev";

//Styles
import "./PortfolioSlider.scss";

import { mockSlider } from "../Constants/MockData";

function PortfolioSlider() {
  //Custom arrows
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
      id="prevSlide"
    >
      <Prev />
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
      id="nextSlide"
    >
      <Next />
    </button>
  );

  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="portfolioSlider">
      <Slider {...settings}>
        {mockSlider.map((item) => (
          <div className="slide" key={item.id}>
            <div className="content">
              <img src={item.image} alt="portfolio-example" />
              <div className="text">
                <p>{item.location}</p>
                <h5>{item.name}</h5>

                <p>{item.description}</p>

                <a href="#sa">Xem chi tiết</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PortfolioSlider;

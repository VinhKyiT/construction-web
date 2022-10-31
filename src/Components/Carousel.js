import React from "react";

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

//Styles
import "./Carousel.scss";

function Carousel() {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="slider-main">
      <Slider {...settings}>
        <div className="slide-1">
          <div className="text">
            <h4>
              Có phải bạn đang tìm đối tác xây dựng tốt nhất cho công trình của
              bạn?
            </h4>
            <h1>Bạn đã tìm đúng!</h1>
          </div>
        </div>

        <div className="slide-2">
          <div className="text">
            <h4>
              Xây Dựng Hưng Thịnh - Đối tác xây dựng với độ tin tưởng tuyệt đối.
            </h4>
            <h1>Liên hệ ngay!</h1>
          </div>
        </div>

        <div className="slide-3">
          <div className="text">
            <h4>Bạn đang tìm kiếm không gian sống và làm việc tốt nhất?</h4>
            <h1>Hãy liên hệ ngay!</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

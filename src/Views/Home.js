import React from "react";

//Styles
import "./Home.scss";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

//Components
import Carousel from "../Components/Carousel";
import PortfolioSlider from "../Components/PortfolioSlider";

//Certificate paths
import ISO9001 from "../Img/Certificates/iso9001.jpg";
import ISO14001 from "../Img/Certificates/iso14001.jpg";
import ISO18001 from "../Img/Certificates/iso18001.jpg";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";
import Circle from "../Icons/Circle";
import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <div className="homeView">
      <Carousel />

      <div className="container">
        <div className="rentalOffer">
          <p>Liên hệ để được hỗ trợ - tư vấn tốt nhất</p>
          <NavLink to="/rental" onClick={() => props.scrollToTop()}>
            Xem ngay!
          </NavLink>
        </div>

        <div className="aboutUs section">
          <h2>
            Giới thiệu <Dots />
          </h2>

          <div className="container-inner">
            <h4>Chúng tôi là ai?</h4>
            <div className="text">
              <p>
                Công ty TNHH Xây Dựng Hưng Thịnh được thành lập vào năm 2019 bởi
                các kiến trúc sư tốt có trên 15 năm chuyên môn và kinh nghiệm
                thực tế thi công các công trình kiến trúc dân dụng và nội thất
                như: Văn phòng, khách sạn, showroom, quán cafe, căn hộ, biệt
                thự, nhà phố… Chúng tôi hiểu rằng việc xây dựng hay hoàn thiện
                nội ngoại thất một công trình sẽ cần rất nhiều thời gian, công
                sức và tài chính. Chủ đầu tư hay chủ nhà nếu tự làm mọi thứ thì
                không dễ dàng và thường dẫn đến kết quả không như mong muốn. Vì
                thế nên chủ nhà rất cần đến một đơn vị/ công ty có đủ chuyên môn
                và đủ Uy Tín để quán xuyến mọi việc cho họ. Và Công ty TNHH TKXD
                Gia Bảo là nơi có thể giúp các gia chủ tạo nên các công trình,
                không gian sống đảm bảo các yếu tố Thẩm mỹ, Công năng sử dụng,
                An toàn kỹ thuật và Tài chính thích hợp.
              </p>

              <div className="showMore">
                <NavLink to="/about" onClick={() => props.scrollToTop()}>
                  Xem chi tiết{" "}
                  <span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </span>
                </NavLink>
              </div>
            </div>
          </div>

          <Square />
        </div>

        <div className="certificates section">
          <h2>
            Chứng chỉ <Dots />
          </h2>

          <div className="container-inner">
            <div className="card-container">
              <div className="card">
                <h4>ISO 9001</h4>
                <p>Chứng chỉ chất lượng</p>
                <img src={ISO9001} alt="ISO9001 Certificate" />

                <div className="box">
                  <NavLink to="">Tìm hiểu thêm</NavLink>

                  <div className="showMore">
                    <NavLink to="">
                      Xem chứng chỉ{" "}
                      <span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="card">
                <h4>ISO 14001</h4>
                <p>Chứng chỉ môi trường</p>
                <img src={ISO14001} alt="ISO14001 Certificate" />

                <div className="box">
                  <NavLink to="">Tìm hiểu thêm</NavLink>

                  <div className="showMore">
                    <NavLink to="">
                      Xem chứng chỉ{" "}
                      <span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="card">
                <h4>OHSAS 18001</h4>
                <p>Chứng chỉ an toàn</p>
                <img src={ISO18001} alt="ISO18001 Certificate" />

                <div className="box">
                  <NavLink to="">Tìm hiểu thêm</NavLink>

                  <div className="showMore">
                    <NavLink to="">
                      Xem chứng chỉ{" "}
                      <span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio section">
          <h2>
            Portfólio <Dots />
          </h2>

          <div className="container-inner">
            <h4>Xem qua những sản phẩm của chúng tôi</h4>

            <Square />
            <PortfolioSlider />
          </div>
        </div>
      </div>

      <div className="allWorks">
        <Circle />

        <div className="container">
          <h3>Bạn muốn tìm hiểu thêm về chúng tôi? </h3>
          <NavLink to="/portfolio" onClick={() => props.scrollToTop()}>
            Xem tất cả hạng mục đầu tư
          </NavLink>
        </div>
      </div>

      <div className="contact section">
        <div className="container">
          <h2>
            Liên hệ <Dots />
          </h2>

          <div className="container-inner">
            <div className="wrapper">
              <div className="info">
                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <h4>Địa chỉ</h4>
                  </div>
                  <p>Đường Phạm Hùng</p>
                  <p>Quận 8</p>
                  <p>Thành phố Hồ Chí Minh</p>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <h4>Liên hệ</h4>
                  </div>
                  <p>0900 000 000</p>
                  <p>support.xaydunghungthinh@gmail.com</p>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faClock} />
                    <h4>Thời gian làm việc</h4>
                  </div>
                  <p>Thứ hai - Thứ bảy</p>
                  <p>8:00 - 18:00</p>
                </div>
              </div>

              <div className="form">
                <form>
                  <input type="text" placeholder="Tên" />
                  <input type="email" placeholder="Địa chỉ email" />

                  <textarea placeholder="Nội dung"></textarea>

                  <div className="send">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <NavLink to="">Gửi ngay</NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Square />
      </div>
    </div>
  );
}

export default Home;

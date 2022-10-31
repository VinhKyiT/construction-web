import React from "react";

import { NavLink } from "react-router-dom";

//Styles
import "./Footer.scss";

//Icons
import BackToTop from "../Icons/BackToTop";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="container-inner">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.106407172762!2d106.6788584!3d10.726275699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fd6df0dff67%3A0xfe13b4992fbae14d!2zUGjhuqFtIEjDuW5nLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1667229710533!5m2!1svi!2s"
            width="80%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>

          <div className="column-wrapper">
            <div className="column">
              <h5>Điều hướng</h5>
              <NavLink to="/" onClick={props.scrollToTop}>
                Trang chủ
              </NavLink>
              <NavLink to="/about" onClick={props.scrollToTop}>
                Về chúng tôi
              </NavLink>
              <NavLink to="/portfolio" onClick={props.scrollToTop}>
                Portfólio
              </NavLink>
              <NavLink to="/contact" onClick={props.scrollToTop}>
                Liên hệ
              </NavLink>
              <NavLink to="/rental" onClick={props.scrollToTop}>
                Thuê ngay
              </NavLink>
            </div>

            <div className="column">
              <h5>Liên hệ</h5>
              <a href="tel:0900000000">0900 000 000</a>
              <a href="mailto:support.xaydunghungthinh@gmail.com">
                support.xaydunghungthinh@gmail.com
              </a>
            </div>
            <div className="column">
              <h5>Địa chi</h5>
              <p>Đường Phạm Hùng</p>
              <p>Quận 8</p>
              <p>Thành phố Hồ Chí Minh</p>
            </div>
          </div>

          <div className="copyright">
            <p>&copy;2021 Xây Dựng Hưng Thịnh</p>

            <div className="back-to-top">
              <BackToTop scrollToTop={props.scrollToTop} />
              <p onClick={props.scrollToTop}>Lên đầu trang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

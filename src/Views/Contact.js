import React from "react";

//Styles
import "./Contact.scss";

//React-router-dom
import { Link } from "react-router-dom";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";

function Contact() {
  return (
    <div className="contactView">
      <div className="container">
        <div className="contactForm section">
          <h2>
            Liên hệ <Dots />
          </h2>
          <Square />

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
                    <Link to="">Gửi ngay</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="rental section">
          <div className="container-inner">
            <h2>Liên hệ ngay!</h2>

            <h1>0900 000 000</h1>
            <p>support.xaydunghungthinh@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

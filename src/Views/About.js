import React from "react";

//Styles
import "./About.scss";

//Icons
import Building from "../Icons/about/Building";
import Excavator from "../Icons/about/Excavator";
import Wrench from "../Icons/about/Wrench";
import Painter from "../Icons/about/Painter";
import Spray from "../Icons/about/Spray";
import Shield from "../Icons/about/Shield";
import Standard1 from "../Icons/about/Standard1";
import Standard2 from "../Icons/about/Standard2";
import Standard3 from "../Icons/about/Standard3";
import Standard4 from "../Icons/about/Standard4";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";
import Circle from "../Icons/Circle";
import Triangle from "../Icons/Triangle";

function About() {
  return (
    <div className="aboutView">
      <div className="container">
        <div className="aboutUs section">
          <h2>
            Giới thiệu <Dots />
          </h2>

          <div className="container-inner">
            <h4>Xây Dựng Hưng Thịnh</h4>

            <div className="text">
              <p>
                Dolor do exercitation laborum aliqua dolore sint est eiusmod
                dolor deserunt quis. Cillum do qui eu labore enim nisi occaecat
                aliquip minim. Labore commodo amet dolore laborum Lorem pariatur
                cillum eu duis sint do minim in. Minim commodo non voluptate
                reprehenderit duis commodo. Laboris labore non ut ex commodo
                anim ut nulla culpa ea est sint. Non consequat consequat
                cupidatat pariatur aliquip.
              </p>

              <p>
                Ullamco nostrud ea mollit ullamco. Non elit reprehenderit enim
                pariatur elit consectetur ex incididunt. Tempor laborum amet
                Lorem et culpa elit ex eu commodo tempor excepteur dolor
                laborum. Aliqua ad aliqua nostrud ipsum. Est ullamco aliquip do
                ullamco sit duis quis dolor elit incididunt quis minim ex.
              </p>

              <p>
                Laboris dolor ex ut Lorem laboris elit esse veniam ipsum et.
                Fugiat tempor est laborum irure magna irure pariatur Lorem duis
                tempor incididunt. Amet elit minim sunt amet non anim sint. Elit
                non sint adipisicing in et velit ullamco et esse velit.
              </p>
            </div>
          </div>

          <Triangle />
          <Square />
        </div>

        <div className="whatWeDo section">
          <h2>
            Chúng tôi làm những gì? <Dots />
          </h2>

          <div className="container-inner">
            <div className="card-container">
              <div className="card">
                <Building />
                <p>Thực hiện, tái thiết các công trình</p>
              </div>

              <div className="card">
                <Excavator />
                <p>Dỡ công trình, dọn mặt bằng.</p>
              </div>

              <div className="card">
                <Wrench />
                <p>Tu sửa, phục hồi công trình</p>
              </div>

              <div className="card">
                <Painter />
                <p>Tu sửa, làm mới nội - ngoại thất</p>
              </div>

              <div className="card">
                <Spray />
                <p>Sơn lại công trình</p>
              </div>

              <div className="card">
                <Shield />
                <p>Bảo vệ chống ăn mòn toàn diện</p>
              </div>
            </div>
          </div>

          <Square />
          <Circle />
        </div>

        <div className="ourStandards section">
          <h2>
            Tiêu chuẩn <Dots />{" "}
          </h2>

          <div className="container-inner">
            <div className="text">
              <p>
                Trong mọi hoạt động tại công ty, chúng tôi thực hiện các biện
                pháp hạn chế phát sinh chất thải, áp dụng các quy trình thân
                thiện với môi trường và bảo vệ an toàn lao động tại nơi làm
                việc.
              </p>
            </div>

            <div className="standard-container">
              <div className="standard">
                <Standard1 />
                <div className="standard-text">
                  <h4>Dịch vụ tuyệt vời</h4>
                  <p>
                    Bạn có thể tin tưởng vào chất lượng công việc của chúng tôi
                    và việc tuân thủ thời hạn và giá cả đã thỏa thuận.
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard2 />
                <div className="standard-text">
                  <h4>Tiêu chuẩn cao</h4>
                  <p>
                    Chúng tôi luôn cố gắng tiến hành theo đúng các yêu cầu của
                    tiêu chuẩn ISO và STN khi cung cấp dịch vụ.
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard3 />
                <div className="standard-text">
                  <h4>Đội ngũ nhân lực chất lượng</h4>
                  <p>
                    Khách hàng của chúng tôi luôn có thể tin tưởng vào chuyên
                    môn cao và tính chuyên nghiệp của nhân viên của chúng tôi.
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard4 />
                <div className="standard-text">
                  <h4>Giải pháp sáng tạo </h4>
                  <p>
                    Kể từ khi thành lập, chúng tôi đã thực hiện hàng chục dự án
                    xây dựng với quy mô khác nhau.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

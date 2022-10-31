import React from "react";

//React-router-dom
import { NavLink } from "react-router-dom";

//Styles
import "./Navigation.scss";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation(props) {
  return (
    <nav>
      <div className="container">
        <div className="nav-items">
          <div className="logo">
            <h3>Xây Dựng Hưng Thịnh</h3>
          </div>

          <div className="menu">
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeClassName="active">
                  Về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" exact activeClassName="active">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName="active">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="language">
            <FontAwesomeIcon className="globe" icon={faGlobe} />
            <p>Tiếng Việt</p>
            <FontAwesomeIcon className="angleDown" icon={faAngleDown} />
          </div>

          <div className="rental">
            <NavLink to="/rental" activeClassName="activeRental">
              Liên hệ chúng tôi ngay!
            </NavLink>
          </div>

          <div
            className="mobile-menu-icon"
            onClick={() => props.openMobileMenu()}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

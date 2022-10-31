import React from "react";

//React-router-dom
import { NavLink } from "react-router-dom";

//Styles
import "./MobileNavigation.scss";

function MobileNavigation(props) {
  return (
    <div className="mobileMenu">
      <div className="container">
        <h4>Xây Dựng Hưng Thịnh</h4>

        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}
            >
              Về chúng tôi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}
            >
              Portfólio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}
            >
              Liên hệ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rental"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}
            >
              Thuê ngay
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavigation;

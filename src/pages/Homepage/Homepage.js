import React from "react";
import "./HomepageGrid.css";
import "./Homepage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import banner1 from "../../asset/banner1.avif";
import banner2 from "../../asset/banner2.avif";
import banner3 from "../../asset/banner3.avif";
import banner4 from "../../asset/banner4.avif";
import banner5 from "../../asset/banner5.avif";
import banner6 from "../../asset/banner6.avif";
import { NavLink } from "react-router-dom";
function Homepage() {
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-12">
          <div className="banner__row">
            <div className="banner1__homepage ">
              <img
                className="banner__img1 banner__item"
                src={banner1}
                alt="Banner 1"
              />

              <NavLink to="/woman">
                <div className="text__shopwomen">
                  Shop Women
                  <div className="btn__shop">
                    <button className="btn__text">Shop Now</button>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="banner2__homepage ">
              <img
                className="banner__img2 banner__item"
                src={banner2}
                alt="Banner 2"
              />

              <NavLink to="/man">
                <div className="text__shopboy">
                  Shop Boy
                  <div className="btn__shop">
                    <button className="btn__text">Shop Now</button>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="banner3__homepage banner__item">
            <img className="banner3__img" src={banner3} />
          </div>
          <div className="banner__row">
            <div className="banner1__homepage ">
              <img
                className="banner__img1 banner__item"
                src={banner4}
                alt="Banner 1"
              />

              <NavLink to="/woman">
                <div className="text__shopwomen">
                  Women's Bags
                  <div className="btn__shop">
                    <button className="btn__text">Shop Now</button>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="banner2__homepage ">
              <img
                className="banner__img2 banner__item"
                src={banner5}
                alt="Banner 2"
              />
              <NavLink to="/man">
                <div className="text__shopboy">
                  Men's Bags
                  <div className="btn__shop">
                    <button className="btn__text">Shop Now</button>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="banner3__homepage banner__item">
            <img className="banner3__img" src={banner6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

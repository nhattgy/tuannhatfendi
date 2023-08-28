import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../../asset/img.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const favoriteProducts = useSelector((state) => state.favorites);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  useEffect(() => {
    const favoriteProductIdsJSON = localStorage.getItem("favoriteProductIds");
    const favoriteProductIds = JSON.parse(favoriteProductIdsJSON) || [];
    setFavoriteCount(favoriteProductIds.length);
  }, [favoriteProducts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Header-container ${isScrolled ? "scrolled" : ""}`}>
      <NavLink to="/" className="Logo">
        <img className="imgLogo" src={Logo} alt="Logo" />
      </NavLink>
      <div className="navbar__pc">
        <ul className="navbar__ul">
          <NavLink to="/woman" className="navbar__li">
            WOMAN
          </NavLink>
          <NavLink to="/man" className="navbar__li">
            MAN
          </NavLink>
          <NavLink to="/shoes" className="navbar__li">
            SHOES
          </NavLink>
          <NavLink to="/gift" className="navbar__li">
            GIFT IDEAS
          </NavLink>
          <NavLink to="/decor" className="navbar__li">
            HOME DECOR & LIFSTYLE
          </NavLink>
          <NavLink to="/fendi" className="navbar__li">
            INSIDE FENDI
          </NavLink>
        </ul>
      </div>
      <div className="navbar__icon">
        <div className="nav__icon">
          <NavLink to="/search">
            <SearchIcon />
          </NavLink>
          <div className="user-icon">
            <PersonOutlineIcon />
            <div className={`popup ${isLoggedIn ? "open" : ""}`}>
              {isLoggedIn ? (
                <div className="user-info">
                  <p>Thông tin tài khoản</p>
                  <button className="text-slate-950" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink className=" login" to="/login">
                    <button className="btn__login" onClick={handleLogin}>
                      Login
                    </button>
                  </NavLink>

                  <div className="btn__signupheader">
                    <span>
                      Not registered yet?{" "}
                      <NavLink to="/signup">Create an account</NavLink>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <NavLink to="/favorites">
              <FavoriteBorderIcon className="fvr_icon" />
            </NavLink>
            <span className="favorite-count">{favoriteCount}</span>
          </div>
        </div>

        <div className={`navbar__mobiletablet ${isMenuOpen ? "open" : ""}`}>
          <div className="nav__mobile">
            <div className="navbar__menu">
              <button className="menu__icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <CloseIcon style={{ marginTop: "-6px", color: "#000" }} />
                ) : (
                  <MenuIcon style={{ marginTop: "-6px", color: "#000" }} />
                )}
              </button>
            </div>
          </div>
          <div className={`nav__menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="navbar__ulmobiletablet">
              <NavLink to="/woman" className="navbar__limobiletablet">
                WOMAN
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px" }}
                  className="arrow__menu"
                />
              </NavLink>
              <div className="line"></div>
              <NavLink to="/man" className="navbar__limobiletablet">
                MAN{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px" }}
                  className="arrow__menu"
                />
              </NavLink>
              <div className="line"></div>
              <NavLink to="/shoes" className="navbar__limobiletablet">
                SHOES{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px" }}
                  className="arrow__menu"
                />
              </NavLink>
              <div className="line"></div>
              <NavLink to="/gift" className="navbar__limobiletablet">
                GIFT IDEAS{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px" }}
                  className="arrow__menu"
                />
              </NavLink>
              <div className="line"></div>
              <NavLink to="/decor" className="navbar__limobiletablet">
                HOME DECOR & LIFSTYLE{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px" }}
                  className="arrow__menu"
                />
              </NavLink>
              <div className="line"></div>
              <NavLink to="/fendi" className="navbar__limobiletablet">
                INSIDE FENDI{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px" }}
                  className="arrow__menu"
                />
              </NavLink>
              <div className="line"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

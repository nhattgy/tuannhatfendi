import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import imglogin from "../../asset/login.avif";
import { registerUser } from "../../api/User/User";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    surname: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await registerUser(formData);
      alert("Registration successful!");

      // Store registration data in local storage
      localStorage.setItem("registrationData", JSON.stringify(formData));
      localStorage.setItem("registeredUserEmail", formData.email);

      navigate("/login");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="signup-page">
      
      <div className="image-section">
        <img src={imglogin} />
      </div>
      <div className="signup__container">
        
        <div className="color__login">FENDI & ME</div>
        <div className="form__ul">
          <ul className="ul__login">
            <li className="li__login">
              <span className="icon__login">
                <FavoriteBorderIcon />
              </span>
              <span> Create your Wishlist</span>
            </li>
            <li className="li__login">
              <LockOpenIcon className="icon__login" /> Speed up checkout
            </li>
            <li className="li__login">
              <CompareArrowsIcon className="icon__login" /> Follow orders and
              returns
            </li>
            <li className="li__login">
              <MailOutlineIcon className="icon__login" /> Receive Fendi
              Newsletters
            </li>
          </ul>
        </div>
        <div className="form__row">
          <h1>Registration </h1>
          <form className="form__style" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              className="form__input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <br />
            <br />

            <label>Password:</label>
            <div className="password-input">
              <input
                className="form__input"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <br />

            <label>Confirm Password:</label>
            <div className="password-input">
              <input
                className="form__input"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <div className="password-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </div>
            </div>
            <br />
            <br />

            <label>Name:</label>
            <input
              className="form__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <label>Surname:</label>
            <input
              className="form__input"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <button className="btn__register" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

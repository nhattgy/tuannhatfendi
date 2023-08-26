import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser } from "../../api/User/User"; // Thay đổi đường dẫn tới apiService của bạn
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Sử dụng useNavigate để chuyển trang

  const handleLogin = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      // Lưu thông tin đăng nhập nếu ô checkbox được chọn
      localStorage.setItem("rememberedEmail", email);
    }
    try {
      const response = await loginUser({ email, password });
      if (response.length > 0) {
        // Đăng nhập thành công, chuyển đến trang sau khi đăng nhập thành công
        navigate("/home"); // Thay đổi đường dẫn tới trang sau khi đăng nhập thành công
      } else {
        setError("Email hoặc mật khẩu không đúng.");
      }
    } catch (error) {
      setError("Đã xảy ra lỗi khi đăng nhập.");
    }
    if (rememberMe) {
      // Lưu thông tin đăng nhập nếu ô checkbox được chọn
      localStorage.setItem("rememberedEmail", email);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="login-page">
      <div className="image-section"></div>
      <div className="login-container">
        <div className="color__login">FENDI & ME</div>
        <h2 className="h2__login">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form__rowlogin">
            <label>Email:</label>
            <input
              style={{ backgroundColor: "transperent" }}
              className="form__inputlogin "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form__rowlogin">
            <label>Mật khẩu:</label>
            <div className="password-input">
              <input
                className="form__inputlogin input-grey"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="password-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </div>
            </div>
          </div>

          <div className="forgot__nav">
            <NavLink className="forgot__pass">Forgot your password ?</NavLink>
          </div>
          <div className="remember">
            {" "}
            <input
              className="remember-me-checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <button className="btn__login" type="submit">
            Đăng nhập
          </button>
          <br />
          <div className="Or__login">OR</div>
          <div className="nav__create">
            <NavLink className="signup__login" to="/signup">
              Create an acount
            </NavLink>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
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
      </div>
    </div>
  );
}

export default Login;

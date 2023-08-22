import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/User/User"; // Thay đổi đường dẫn tới apiService của bạn
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignupForm, setShowSignupForm] = useState(false);

  const navigate = useNavigate(); // Sử dụng useNavigate để chuyển trang

  const handleLogin = async (e) => {
    e.preventDefault();
    const handleSignupClick = () => {
      setShowSignupForm(true);
    };

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
  };

  return (
    <div className="login-page">
      <div className="image-section"></div>
      <div className="login-container">
        <h2 className="h2__login">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form__row">
            <label>Email:</label>
            <input
              className="form__input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form__row">
            <label>Mật khẩu:</label>
            <input
              className="form__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Đăng nhập</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;

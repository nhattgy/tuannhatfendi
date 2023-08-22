import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/User/User";
import "./Signup.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      email: email,
      password: password,
      name: name,
      surname: surname,
    };

    try {
      // Call the registerUser function from your apiService.js
      const response = await registerUser(userData);
      alert("Registration successful!");
      navigate("/login");
      // You can redirect the user to a different page here
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div className="signup-page">
      <div className="image-section"></div>
      <div className="signup__container">
        <div className="form__row">
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input className="form__input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />

            <label>Password:</label>
            <input className="form__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />

            <label>Confirm Password:</label>
            <input className="form__input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br />
            <br />

            <label>Name:</label>
            <input className="form__input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <br />

            <label>Surname:</label>
            <input className="form__input"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            <br />
            <br />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

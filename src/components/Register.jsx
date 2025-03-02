import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("User Registered:", formData);
    // Send formData to the backend API for registration
  };

  return (
    <div className="login-main">
      <div className="login-right">
        <div className="login-right-container">
          <h2>Register</h2>
          <p>Create an account</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="pass-input-div">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <FaEye onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>
            <div className="pass-input-div">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {showConfirmPassword ? (
                <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              ) : (
                <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              )}
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <a href="#">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

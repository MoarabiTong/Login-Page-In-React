import React, { useEffect, useState } from "react";
 

const Page = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>QR Code Payment</h2>
            <form>
              <div className="login-center-buttons">
                <button type="button">Log in as vendor</button>
                <button type="button">Log in as Customer</button>

              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page;

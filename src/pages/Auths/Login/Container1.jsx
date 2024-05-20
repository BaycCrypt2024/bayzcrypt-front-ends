// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Login.css";

const Container1 = () => {
  return (
    <div className="card-body1">
      <div className="logo1">
        <svg
          className="svg"
          width="5%"
          height="12%"
          viewBox="0 0 170 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M158.612 52.5001L84.9999 10.0001L11.3878 52.5001L11.3878 137.5L84.9999 180L158.612 137.5L158.612 52.5001ZM105.281 81.9673L84.1608 30.3148L63.041 81.9673L28.8685 126.084L84.1608 118.548L139.453 126.084L105.281 81.9673Z"
            fill="#458C66"
          />
        </svg>

        <center>BayzCrypt</center>
      </div>
      <div className="mid-title">
        <h2>Welcome back to BayzCrypt,</h2>
        <h2>where your assets is all yours</h2>
      </div>
      <div>
        <p className="card-text1">
          Welcome to BayzCrypt,your gateway to secure and decentralized
          finances.With BayzCrypt,you're in control of your assests like never
          before.Let's get started to secure your account and ensure the safety
          of your digital assets.
        </p>
      </div>
      <div className="info1">
        <p>
          Bayzcrypt has transformed my approach to crypto trading.The platform's
          user-friendly interface combined with their commitment to security has
          given me the condience to navigate the crypto market effectively.The
          seed phrase setup ensured that my assests are secure, and the trading
          experience has been seamless.
        </p>
        <div className="user-info">
          <img src="god.png" alt="User Icon" className="user-icon" />
          <div className="username-info">
            <span className="username">John Doe</span>
            <p className="user-role">CEO, Matkins LLC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container1;

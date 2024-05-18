import React from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
const Welcome = () => {
  const Navigate = useNavigate();

  const handleGetStartedClick = () => {
    Navigate("/register");
  };
  const handleGetLogin = () => {
    Navigate("/login");
  };

  return (
    <div className="card-body">
      <div className="logo">
        <svg
          width="100px"
          height="70px"
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
      </div>
      <h5 className="card-title">Welcome to BayzCrypt!</h5>

      <p className="card-text">
        Welcome to BayzCrypt,your gateway to secure and decentralized
        finances.With BayzCrypt,you're in control of your assests like never
        before.Let's get started to secure your account and ensure the safety of
        your digital assets.
      </p>

      <div className="biglogo">
        <svg
          width="160"
          height="240"
          viewBox="-12 0  190"
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
      </div>
      <div className="lion">
        <a href="#" className="btn btn-primary">
          <div className="d-grid gap-2">
            <button
              className="click"
              type="button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </a>
        <div className="bottomtext">
          <center>
            <p className="login" onClick={handleGetLogin}>
              Already have an account?<span id="btn"> Log In</span>
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
=======
function Welcome() {
  return (
    <div>Welcome</div>
  )
}

export default Welcome;
>>>>>>> 517d12f8957c2bafe891c240a4f8ae0b7a336609

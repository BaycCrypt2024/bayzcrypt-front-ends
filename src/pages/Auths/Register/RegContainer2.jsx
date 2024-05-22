import React from "react";
import "./Register.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineLockPerson } from "react-icons/md";

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const RegContainer2 = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/login");
  };
  return (
    <div className="card-body2">
      <div className="logo2">
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
      <div className="card-title3">
        <h2 className="card-title2">Sign Up</h2>
      </div>
      <div className="details">
        <h6>Please enter your details</h6>
      </div>

      <form>
        <div className="mb-1">
          <div>
            <label
              htmlFor="FullName "
              className="form-label"
              style={{ textAlign: "left", margin: 0, padding: 0 }}
            >
              <p>Full name</p>
            </label>
            <input
              type="Name"
              placeholder="Enter your name "
              style={{
                paddingRight: "2rem",
                borderRadius: "5px",
                height: "30px",
                fontSize: "16px",
                width: "100%",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <div style={{ position: "relative", display: "inline-block" }}>
            <AiOutlineMail
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                paddingLeft: "2rem",
                // paddingRight: "2rem",
                borderRadius: "5px",
                height: "30px",
                fontSize: "16px",
                width: "100%",
                border: "1px solid #ccc",
              }}
            />
            <CiCircleQuestion
              style={{
                position: "absolute",
                top: "50%",
                right: "1px",
                transform: "translateY(-50%)",
              }}
            />
          </div>

          <div id="emailHelp" className="form-text">
            Must be a Valid email address
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            password
          </label>
          <div style={{ position: "relative", display: "inline-block" }}>
            <MdOutlineLockPerson
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="password"
              placeholder="password"
              style={{
                paddingLeft: "2rem",
                // paddingRight: "2rem",
                borderRadius: "5px",
                height: "30px",
                fontSize: "16px",
                width: "100%",
                border: "1px solid #ccc",
              }}
            />
            <FaEye
              style={{
                position: "absolute",
                top: "50%",
                right: "1px",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>

        <div className="forgot">
          <div className="animal">
            <img src="green.png" className="red" />
            <h9>Must be at least 8 characters</h9>
          </div>
          <br></br>

          <div className="animal">
            <img src="image.png" className="red" />
            <h9>Must contain uppercase,lowercase.</h9>
          </div>
          <br></br>
          <div className="animal">
            <img src="image.png" className="red" />
            <h9>Must contain a special character,&.$.%.....</h9>
          </div>
        </div>
      </form>

      <a href="#" className="btn btn-primary">
        <div className="signreg">
          <button className="clickreg" type="button">
            Sign Up
          </button>
        </div>
      </a>

      <a href="#" className="btn btn-primary">
        <div className="signgoogle">
          <button
            className="goggle"
            type="button"
            style={{ alignItems: "center" }}
          >
            Sign Up with google
            <span style={{ marginLTop: "110rem", marginLeft: "0.5rem" }}>
              <FcGoogle />
            </span>
          </button>
        </div>
      </a>
      <div className="bottomtext2">
        <center>
          <p className="login2">
            Already have an account?
            <a href="#" className="signup" onClick={handleLogIn}>
              <span> Log In</span>
            </a>
          </p>
        </center>
      </div>
    </div>
  );
};

export default RegContainer2;

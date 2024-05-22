// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Login.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineLockPerson } from "react-icons/md";

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Container2 = () => {
  const navigate = useNavigate();

  const handleSignp = () => {
    navigate("/register");
  };
  return (
    <div className="card-body2log">
      <div className="logo2log">
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
      <div className="welcomelog">
        <h2 className="card-title2">Welcome back!</h2>
      </div>
      <div className="detailslog">
        <h6>Please enter your details</h6>
      </div>

      <form>
        <div className="mb-1log">
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

          <div id="emailHelp" className="form-textlog">
            Must be a Valid email address
          </div>
        </div>

        <div className="mblog">
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

        <div className="forgotloginlog">
          <button className="btnlog"> forgot Password</button>
        </div>
      </form>

      {/* <a href="#" className="btn btn-primary"> */}
      <div className="Logingreenlog">
        <button className="click" type="button">
          Log In
        </button>
      </div>

      <div className="Logingooglelog">
        <button
          className="gogglelog"
          type="button"
          style={{ alignItems: "center" }}
        >
          Log In with google
          <span style={{ marginLTop: "110rem", marginLeft: "0.5rem" }}>
            <FcGoogle />
          </span>
        </button>
      </div>

      <div className="bottom-textlog">
        Don't have an account?
        <a href="#" className="signuplog" onClick={handleSignp}>
          <span> Sign Up</span>
        </a>
      </div>
    </div>
  );
};

export default Container2;

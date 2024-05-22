import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loadanimation.css";

const Loadanimation = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    const navigationTimer = setTimeout(() => {
      navigate("/welcome");
    }, 8000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-icon">
        <svg
          className="loading-svg"
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
      <div className={`loading-text ${showText ? "visible" : ""}`}>
        Bayzcrypt
      </div>
    </div>
  );
};

export default Loadanimation;

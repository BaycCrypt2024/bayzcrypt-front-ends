// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Congrats.css";

const Congrats = () => {
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
      <div className="Box1">
        <div className="Box2">
          <h5 className="card-title"> Congratulations🎊🎉, you are all set</h5>

          <p className="card-text">
            Congratulations! You've successfully created your BayzCrypt wallet.
            You're now part of a secure and decentralized financial future.
          </p>
        </div>

        <div className="Box3">
          <img src="design.png" alt="Design" className="design1" />
          <img src="design.png" alt="Design" className="design2" />
          <img src="design.png" alt="Design" className="design3" />
          <img src="design.png" alt="Design" className="design4" />
          <img src="design.png" alt="Design" className="design5" />{" "}
          <img src="ballon.png" className="balloon" />
          <img src="design.png" alt="Design" className="design6" />
          <img src="design.png" alt="Design" className="design7" />
          <img src="design.png" alt="Design" className="design8" />
          <img src="design.png" alt="Design" className="design9" />
        </div>

        <div className="d-grid gap-2">
          <button className="btn-primary" type="button">
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Congrats;

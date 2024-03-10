import React from "react";
import { Link } from "react-router-dom";
import "../../styles/utilityStyles/landPageStyles.css";

const Button: React.FC = () => {
  return (
    <>
      <div className="button__background px-3 rounded-full">
        <Link to="#">
          <button type="button" title="Click to make a request">
            <span className="text-white text-sm">Work With Us</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";

const Button: React.FC = () => {
  return (
    <>
      <div>
        <Link to="#">
          <button type="button" title="Click to make a request">
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;

import React from "react";
import { icons } from "../../../public/utilityImg/icons";
import Button from "./Button";
const Header: React.FC = () => {
  return (
    <>
      <div>
        {/*Header section to contain the land page navs*/}
        <header>
          <nav>
            {/*Nav buttons to navigate to diffferent pages*/}
            <div className="header-value">
              <p>Zeld Technologies</p>
              <div>
                <p>Our services</p>
                <p>Why choose Zeld</p>
                <p>Testimonials</p>
                <p>Meet our Clients</p>
              </div>
              <Button />
              {/*Sun icon to toggle light and dark mode*/}
              <button type="button" className={`font-normal`}>
                {icons.moonIcon}
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

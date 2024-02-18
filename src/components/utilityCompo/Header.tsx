import React, { useState } from "react";
import { icons } from "../../../public/utilityImg/icons";
import { Link } from "react-router-dom";
import Button from "./Button";
import { headers } from "../../styles/compoStyles/LandStyles/landHeader";
import { headerStyles } from "../../styles/compoStyles/LandStyles/landHeader";
const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div className="container">
        {/*Header section to contain the land page navs*/}
        <header>
          <nav>
            {/*Nav buttons to navigate to diffferent pages*/}
            {/*Bars icons to show when the screen is less than medium size*/}
            <div
              className={`${headerStyles.hideBars} ${headerStyles.rightNavs}`}
            >
              <button type="button" className={``} onClick={toggleMobile}>
                {isMobile ? icons.cross : icons.barsIcon}
              </button>
            </div>
            <div className={`${headerStyles.absoluteHeader}`}>
              <div
                className={`${headerStyles.headerStyle} ${
                  isMobile ? headerStyles.headerStyleCol : headerStyles.hideCol
                }`}
              >
                <p className="text-3xl max-md:hidden">Zeld Technologies</p>
                <div
                  className={`${headerStyles.buttonStyles} ${headerStyles.buttonStylesCol} ${headerStyles.rightNavs} text__color`}
                >
                  {/*Navigation Links*/}
                  <Link to="#">
                    <p>Our services</p>
                  </Link>
                  <Link to="#">
                    <p>Why choose Zeld</p>
                  </Link>
                  <Link to="#">
                    <p>Testimonials</p>
                  </Link>
                  <Link to="#">
                    <p>Meet our Clients</p>
                  </Link>
                </div>
                <Button />
                <div className={`${headerStyles.buttonStyles}`}>
                  {/*Sun icon to toggle light and dark mode*/}
                  <button type="button" className={`font-normal w-6 h-6`}>
                    {icons.sunIcon}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

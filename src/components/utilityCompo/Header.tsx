import React, { useEffect, useState } from "react";
import { icons } from "../../../public/utilityImg/icons";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../../styles/utilityStyles/animate.css";
import { headerStyles } from "../../styles/compoStyles/LandStyles/landHeader";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../states/globalStates/store";
import { toggleDarkMode } from "../../states/compoStates/toggleDark";
const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const selectToggleMode = useSelector((state: RootState) => {
    return state.darkMode.isDarkMode;
  });

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  useEffect(() => {
    handleToggleDarkMode();
  }, []);

  return (
    <>
      <div className={`container`}>
        {/*Header section to contain the land page navigation*/}
        <header>
          <nav>
            {/*Nav buttons to navigate to different pages*/}
            {/*Bars icons to show when the screen is less than medium size*/}
            <div
              className={`${headerStyles.hideBars} ${headerStyles.rightNavs}`}
            >
              <button
                type="button"
                className={`${isMobile ? "text-[#be123c]" : "text-[#93c5fd]"} transition-all duration-[0.5s]`}
                onClick={toggleMobile}
              >
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
                  className={`${headerStyles.buttonStyles} ${headerStyles.buttonStylesCol} ${headerStyles.rightNavs}`}
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
                  <button
                    type="button"
                    className={`font-normal w-6 h-6 text-[#d97706] ${
                      selectToggleMode ? "oscillate-animation" : "animate-none"
                    }`}
                    onClick={handleToggleDarkMode}
                  >
                    {selectToggleMode ? icons.sunIcon : icons.moonIcon}
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

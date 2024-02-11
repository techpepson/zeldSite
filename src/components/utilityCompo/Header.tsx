import React from "react";
import { icons } from "../../../public/utilityImg/icons";
import Button from "./Button";
import { headerStyles } from "../../styles/compoStyles/LandStyles/landHeader";
const Header: React.FC = () => {
  return (
    <>
      <div>
        {/*Header section to contain the land page navs*/}
        <header className={`${headerStyles.hideHeader}`}>
          <nav>
            {/*Nav buttons to navigate to diffferent pages*/}
            <div className={`${headerStyles.headerStyle}`}>
              <p className="text-3xl">Zeld Technologies</p>
              <div className={`${headerStyles.buttonStyles}`}>
                <a href="#">
                  <p>Our services</p>
                </a>
                <a href="#">
                  <p>Why choose Zeld</p>
                </a>
                <a href="#">
                  <p>Testimonials</p>
                </a>
                <a href="#">
                  <p>Meet our Clients</p>
                </a>
              </div>
              <Button />
              <div className={`${headerStyles.buttonStyles}`}>
                {/*Sun icon to toggle light and dark mode*/}
                <button type="button" className={`font-normal w-6 h-6`}>
                  {icons.sunIcon}
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

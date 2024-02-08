import React from "react";

const Header = () => {
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
              <p>Connect With Us</p>
              <img src="" alt="" />
              {/*Sun icon to toggle light and dark mode*/}
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

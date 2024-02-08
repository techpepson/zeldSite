import React from "react";
import Header from "./utilityCompo/Header";
import Agents from "./utilityCompo/Agents";

const LandPage = () => {
  return (
    <>
      <div>
        <Header />
        {/*Beginnig of the main body of the page*/}
        <main>
          <div>
            <div>
              <p>Here to make you stand out from your business competitors.</p>
              <span>
                Partner with Zeld to get your business to the web with the
                design of high performing and robust websites and webapps to
                stay ahead of your competitors. For extra technological
                services, depend on as as well.
              </span>
              <mark>Where Zeld calls, quality responds.</mark>
            </div>
            {/*Floating images*/}
            <div></div>
            <button type="button">Get Started</button>
          </div>
          {/*Images to briefly introduce our services*/}
          <div></div>
          {/*Agent trusts in Zeld */}
          <Agents />
          <div>
            {/*Blog about e-business*/}
            <a href="#">Benefits of having a website as a business</a>
          </div>
          <div>
            {/*Attention texts*/}
            <p>Unveil the implicit potential of your business</p>
            <span>
              With the increasing use of websites by individuals, transitioning
              your business into an online business by getting a robust and high
              performing web app or website is the starting step to unleashing
              the potential of your business.
            </span>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandPage;

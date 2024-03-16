import React from "react";
import { headerStyles } from "../../styles/compoStyles/LandStyles/landHeader";
import "../../styles/utilityStyles/landPageStyles.css";
import "../../index.css";
import { Link } from "react-router-dom";
import { xap, xicon, instagram, linkedin } from "../../assets/landImg";
import Copyright from "./Copyright";

/*This is the footer section of the site*/
const Footer: React.FC = () => {
  return (
    <>
      {/*Footer Section Container*/}
      <div className={`${headerStyles.footerStyles} footer-img`}>
        <span className="text-3xl">Zeld Technologies</span>
        <div className={`${headerStyles.footerHeading}`}>
          <span className={`${headerStyles.footerSpan}`}>Company</span>
          <Link to="#" className="text-slate-50">
            About Us
          </Link>
          <Link to="#" className="text-slate-50">
            Testimonials
          </Link>
          <Link to="#" className="text-slate-50">
            Blog
          </Link>
        </div>
        <div className={`${headerStyles.footerHeading}`}>
          <span className={`${headerStyles.footerSpan}`}>Services</span>
          <Link to="#" className="text-slate-50">
            Our Services
          </Link>
          <Link to="#" className="text-slate-50">
            Make a Request
          </Link>
        </div>
        <div className={`${headerStyles.footerHeading}`}>
          <span className={`${headerStyles.footerSpan}`}>Help</span>
          <Link to="#" className="text-slate-50">
            Contact Us
          </Link>
          <Link to="#" className="text-slate-50">
            Customer Support
          </Link>
        </div>
        <div className={`${headerStyles.footerHeading}`}>
          <span className={`text-3xl text__blue-pink`}>Party with us</span>
          <div className={`flex text-[#94a3b8] gap-5 max-md:flex-col`}>
            <Link to="#">
              <img
                src={xicon}
                alt="An image of the X icon"
                className={`${headerStyles.footerImg}`}
                title="Connect on X"
              />
            </Link>
            <Link to="#">
              <img
                src={xap}
                alt="A whatsapp icon displayed"
                title="Connect on Whatsapp"
                className={`${headerStyles.footerImg}`}
              />
            </Link>
            <Link to="#">
              <img
                src={instagram}
                alt="A 3D image of the instagram icon"
                title="Connect on Instagram"
                className={`${headerStyles.footerImg}`}
              />
            </Link>
            <Link to="#">
              <img
                src={linkedin}
                alt="A 3D image of the instagram icon"
                title="Connect on Linkedin"
                className={`${headerStyles.footerImg}`}
              />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;

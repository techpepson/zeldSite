import React from "react";
import Agents from "./utilityCompo/Agents";
import Stats from "./utilityCompo/Stats";
import Button from "./utilityCompo/Button";
import "../styles/utilityStyles/landPageStyles.css";
import { landImages } from "../styles/compoStyles/LandStyles/landHeader";
import { Link } from "react-router-dom";
import "../styles/utilityStyles/animate.css";
import { Header } from "./components";
import Footer from "./utilityCompo/Footer";
import { RootState } from "../states/globalStates/store";
import { useSelector } from "react-redux";
import Intersection from "./utilityCompo/Intersection";
import "../index.css";
import {
  headerStyles,
  landPageStyles,
} from "../styles/compoStyles/LandStyles/landHeader";
import { html, codeBug, securityImg, credibleImg } from "../assets/landImg";

const LandPage: React.FC = () => {
  const selectToggleMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  return (
    <>
      <div
        className={`${
          selectToggleMode ? "dark-bg" : "light-background"
        } transition-colors duration - [0.5s] overflow-x-hidden`}
      >
        <Header />
        <div className={`${headerStyles.centerBody}`}>
          {/* ${
            selectToggleMode ? "bg-img background__color" : "light-background"
          }  */}
          {/*Beginning of the main body of the page*/}
          <main>
            <div className="mt-10 relative">
              <div className={`${landPageStyles.centerText} relative`}>
                <p className={`${landPageStyles.largeText} font-serif`}>
                  <span>
                    Make your <span className="text__blue-pink">business</span>
                  </span>{" "}
                  <br />
                  <span>
                    <span className="text__blue-fuchisa">stand</span> out from{" "}
                    <span className="text__blue-fuchisa font-serif">
                      competitors
                    </span>
                    .
                  </span>
                </p>
                <span
                  className={`${landPageStyles.centerParagraph} mt-5 mb-1 text__color)`}
                >
                  Partner with Zeld to get your business to the web with the
                  design of high performing and robust websites and web apps to
                  stay ahead of your competitors. For extra technological
                  services, depend on us as well.
                </span>
                <span className={`${landPageStyles.mediumText}`}>
                  <span className="unique__text">Where Zeld calls</span>,{" "}
                  <span className="text__blue-pink">quality responds</span>.
                </span>
              </div>
              {/*Floating images*/}
              <div>
                <img
                  src={html}
                  alt="An html tag image to show we are into web dev."
                  className={`${landPageStyles.roundImage} absolute top-0 left-0 mt-4 ml-4 max-sm:mt-0 max-sm:ml-0 oscillate-animation`}
                />
                <img
                  src={codeBug}
                  alt="A code bug image to show we create bug-free web apps."
                  className={`${landPageStyles.roundImage} absolute top-0 right-0 mt-5 mr-0 max-sm:mt-0 max-sm:mr-5 oscillate-animation`}
                />
                <img
                  src={securityImg}
                  alt="A security key image to show we create high security applications."
                  className={`${landPageStyles.roundImage} absolute bottom-0 left-0 mb-4 ml-4 max-sm:mb-0 max-sm:ml-0 oscillate-animation`}
                />
                <img
                  src={credibleImg}
                  alt="A sign of our credibility with a credible image."
                  className={`${landPageStyles.roundImage} absolute bottom-0 right-0 mb-4 mr-2 max-sm:mb-0 max-sm:mr-5 oscillate-animation`}
                />
              </div>
              <Link to="#" className={`${landPageStyles.buttonStyle}`}>
                <Button />
              </Link>
            </div>
            {/*Images to briefly introduce our services*/}
            <div className={`${landPageStyles.landWorks} select-none relative`}>
              <div className="flex flex-wrap">
                <div
                  className={`${headerStyles.spreadColors} ${
                    selectToggleMode ? "first-spread" : ""
                  } `}
                ></div>
                <div
                  className={`${headerStyles.secondColors} second-spread`}
                ></div>
              </div>
              {landImages.map((image: string, index: string) => (
                <Intersection>
                  <img
                    src={image.src}
                    alt="Images of our works"
                    key={index}
                    className={`${landPageStyles.landWorksImg} rounded-md`}
                  />
                </Intersection>
              ))}
            </div>
            {/*Agent trusts in Zeld */}
            <Agents />
            <div
              className={`${landPageStyles.benefitStyle} mb-7 w-fit justify-center`}
            >
              {/*Blog about e-business*/}
              <Link to="#" title="Click to read more" target="_blank">
                <span>Benefits of having a website as a business</span>
              </Link>
            </div>
            <div className={`${landPageStyles.centerText}`}>
              {/*Attention texts*/}
              <p className={`${landPageStyles.bottomTextSize}`}>
                <span className="text__blue-pink">Unveil</span> the potential of
                your <span className="unique__text">business</span>
              </p>
              <span className={`${landPageStyles.smallText}`}>
                A website is the first point of contact for potential customers,
                <br />
                availing to them valuable information and creating a lasting
                impression.
              </span>
            </div>
            {/*Enlighten texts display*/}
            <div className={`${landPageStyles.gridStyles} grid gap-5 relative`}>
              <Intersection>
                <div
                  className={`${landPageStyles.bgStyles} bg-center relative bg-cover`}
                >
                  <div className="mix-blends">
                    <p className={`${landPageStyles.mediumTextLeft}`}>
                      <span className="text__blue-pink visible-after">
                        Increase Visibility
                      </span>
                    </p>
                    <p className={`${landPageStyles.smallText} text-[#95959b]`}>
                      Having a website or web app makes it easier for
                      individuals surfing the web to easily identify your
                      business. With billions of internet users in the world,
                      having a website allows you to reach a larger audience and
                      increase your online visibility.
                    </p>
                  </div>
                </div>
              </Intersection>
              <Intersection>
                <div
                  className={` ${landPageStyles.bgStyles} relative bg-center`}
                >
                  <div className="mix-blends">
                    <p
                      className={`${landPageStyles.mediumTextLeft} text__blue-pink`}
                    >
                      Professionalism and Credibility
                    </p>
                    <p className={`${landPageStyles.smallText} text-uniq`}>
                      A well-designed website can make you look professional.
                      This sense of professionalism makes you a credible
                      candidate to potential clients. It creates a sense of
                      legitimacy to your customers.
                    </p>
                  </div>
                </div>
              </Intersection>
              <Intersection>
                <div
                  className={` ${landPageStyles.bgStyles} relative bg-center`}
                >
                  <div className="mix-blends">
                    <p
                      className={`${landPageStyles.mediumTextLeft} text__blue-pink`}
                    >
                      Marketing and Sales
                    </p>
                    <p className={`${landPageStyles.smallText} text-uniq`}>
                      A website is an avenue to promote and showcase your
                      products or services for sale. This not only increases
                      sales, but goes ahead to increase your customer base. You
                      can go further to show your testimonials to potential
                      clients to help increase the credibility of your business.
                    </p>
                  </div>
                </div>
              </Intersection>
              <Intersection>
                <div
                  className={`relative  ${landPageStyles.bgStyles} bg-center`}
                >
                  <div className="mix-blends">
                    <p
                      className={`${landPageStyles.mediumTextLeft} text__blue-pink`}
                    >
                      Customer Management
                    </p>
                    <p className={`${landPageStyles.smallText} text-uniq`}>
                      A web app rightly designed can be a link between your
                      business and customers. There can be a regular interaction
                      with customers, as well as receiving feedbacks from them
                      to help build on your business.
                    </p>
                  </div>
                </div>
              </Intersection>
            </div>
            {/*Transforming ideas section*/}
            <Intersection>
              <div
                className={`${landPageStyles.centerText} mt-10 max-[155px]:mt-24`}
              >
                <p className={`${landPageStyles.bottomTextSize} text-wrap`}>
                  <span className="unique__text">Transforming</span> dreams into
                  <br
                    className={`${landPageStyles.lineBreakStyles} ${landPageStyles.lineBreakStyles}`}
                  />{" "}
                  <span className="text__blue-pink">Powerful Solutions</span>
                </p>
                <span className={`${landPageStyles.smallText}`}>
                  With our expertise and dedication, we are committed to
                  delivering exceptional services that meet your unique needs.
                </span>
              </div>
            </Intersection>
            {/*Statistics section*/}
            <div>
              <Intersection>
                <Stats />
              </Intersection>
            </div>
            <div className={`${landPageStyles.statsStylesRow} mt-10`}>
              <Intersection>
                <div className="flex flex-col">
                  <p className={`${landPageStyles.mediumText}`}>
                    <span className="text__blue-pink text-2xl">Our Pride</span>{" "}
                    <span className="unique__text">as Zeld</span>
                  </p>
                  <span>
                    We pride ourself on being the go-to partner for your
                    business that requires top-notch technological services.
                  </span>
                  {/*Utility class for the button*/}
                  <div className="mt-5 inline-flex justify-center ">
                    <Button />
                  </div>
                </div>
              </Intersection>
              <Intersection>
                <div>
                  <p className={`${landPageStyles.mediumText}`}>
                    <span className="text__blue-pink">
                      Quality and Attention to Details
                    </span>
                  </p>
                  <span>
                    We carefully pay attention to the requests of clients to
                    make sure the exact requirement from the client is provided.
                    With this, we at Zeld will see to it that exactly what the
                    user requests is provided, while paying attention to
                    quality. Trust Zeld to handle your diverse development with
                    the use of best and quality tools as well as industry best
                    practices.
                  </span>
                </div>
              </Intersection>
              <Intersection>
                <div>
                  <p className={`${landPageStyles.mediumText}`}>
                    <span className="text__blue-pink">
                      Expertise and Experience
                    </span>
                  </p>
                  <p>
                    Zeld is credited with experience and expertise in the space
                    of technology. We are a company providing diverse services
                    from web development, mobile application development, cctv
                    installations and repairs as well sales of electronics.
                    <span>When you want quality, speak Zeld.</span>
                  </p>
                </div>
              </Intersection>
              <Intersection>
                <div>
                  <p className={`${landPageStyles.mediumText}`}>
                    <span className="text__blue-pink">
                      Communication and Support
                    </span>
                  </p>
                  <span>
                    Zeld greatly has customers at heart and we not only run the
                    company, but constantly take the concerns of our clients.
                    You can lodge complaints, make suggestions as well contact
                    customer support to get all your issues addressed.
                    <span>
                      <a href="#">Support</a>
                    </span>
                  </span>
                </div>
              </Intersection>
            </div>
            {/*Bottom section to boost clients*/}
            <Intersection>
              <div className={`${landPageStyles.centerText} mt-10`}>
                <p className={`${landPageStyles.largeText}`}>
                  <span className="text__blue-pink">It takes an eye blink</span>
                  <br className={`${landPageStyles.lineBreakStyles}`} />{" "}
                  <span className="unique__text">
                    to be on the web with Zeld.
                  </span>
                </p>
                <div className="mt-5">
                  <Button />
                </div>
              </div>
            </Intersection>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default LandPage;

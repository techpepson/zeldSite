import React from "react";
import { Header } from "./components";
import Button from "./utilityCompo/Button";
import Footer from "./utilityCompo/Footer";
import { servicesHeader } from "../styles/servicesStyles";
import "../styles/compoStyles/servicesPage.css";
import { useSelector } from "react-redux";
import { RootState } from "../states/globalStates/store";
import "../styles/utilityStyles/landPageStyles.css";
import {
  webDev,
  webDesign,
  mobileDev,
  customerImg,
  coding,
  ideaImg,
  uiCoder,
  scaleBusiness,
} from "../assets/landImg";

{
  /*The services page that contains all that we do as Zeld*/
}
const Services: React.FC = () => {
  const selectToggleMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  return (
    <>
      <div
        className={`${
          selectToggleMode ? "dark-bg" : "light-background"
        } transition-all duration-[0.3s] overflow-x-hidden flex flex-col`}
      >
        <header>
          <Header />
        </header>
        {/*The container div that contains all the main content of the page*/}
        <div className="container">
          <main>
            <div className="short-description-container">
              <p>
                <h1>What We Do...</h1>
              </p>
              {/*A div container that contains all the short description of services*/}
              <div
                className={`animated-services-container ${servicesHeader.animateStyling} flex gap-8 overflow-x-hidden border-solid border-red-500 border-[10px] w-[200% overflow-hidden]`}
              >
                <div className={`flex flex-col relative basis-[100%] w-full `}>
                  <p>
                    <h1>Web Development</h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span>
                      For the production of robust, high-performing and
                      highly-secure web applications as well as e-commerce
                      applications, Zeld is the go-to solution. We get on you on
                      the web with amazingly designed web applications that
                      soothe your needs.
                    </span>
                  </p>
                </div>
                {/*Container for mobile application development*/}
                <div className="mobile-application">
                  <p>
                    <h1>Mobile Application Development</h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span>
                      Zeld Technologies employs modern technologies to build
                      native ios and android applications that are highly secure
                      for your business, no matter the size of your business.
                      Reach us to get your dream app designed for you.
                    </span>
                  </p>
                </div>
                <div className="e-commerce-pos">
                  <p>
                    <h1>E-commerce Applications</h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span>
                      For high performing e-commerce applications specifically
                      for your business, Zeld has you covered.Transition to the
                      ease of doing business with our robust e-commerce
                      applications.
                    </span>
                  </p>
                </div>
                <div className="ui/ux">
                  <p>
                    <h1>UI/UX design</h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span>
                      Looking for a beautifully designed UI/UX? Zeld has you
                      covered. Our UI/UX team is dedicated to designing eye
                      catching UI/UX designs for whatever need it may be.
                    </span>
                  </p>
                </div>
                <div className="Sales">
                  <p>
                    <h1>Sales of electronics</h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span>
                      Not only do we deal in development needs, Zeld
                      Technologies also has a great of electronic appliances
                      ranging from laptops, to cameras, and whatever electronic
                      device you may think of.
                    </span>
                  </p>
                </div>
                <div className="testing">
                  <p>
                    <h1>Bug Tracking and Testing</h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span>
                      Suffering from a bug or problem on your website, the
                      amazing team at Zeld is willing to set your website free
                      from any bug problems. To also get your website tested for
                      any possible challenge, we are here for you.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`{${servicesHeader.flexCol}} gap-10 mt-10 ${
                !selectToggleMode ? "bg-[#334b61]" : "bg-[#172a5a]"
              } rounded-md bg-opacity-45`}
            >
              {/*A section that introduces what we do briefly.*/}
              <p
                className={`${servicesHeader.largeText} ${
                  selectToggleMode
                    ? servicesHeader.darkBg
                    : servicesHeader.lightBg
                } inline-block relative ${
                  selectToggleMode ? servicesHeader.uniqueText : "text-blue-500"
                }`}
              >
                <span
                  className={`${
                    selectToggleMode
                      ? servicesHeader.uniqueText
                      : "text-green-900"
                  }`}
                >
                  Our Core Services
                </span>
              </p>
              <div className={`${servicesHeader.floatingImgStyles} mb-10 mt-10`}>
                <div className="relative flex">
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div>
                    <img
                      src={uiCoder}
                      alt="Floating-app"
                      className={`${servicesHeader.floatingImg}`}
                    />
                  </div>
                </div>
                <div className={`${servicesHeader.centerText}`}>
                  <p>
                    <h1
                      className={`${servicesHeader.mediumText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      Web Development
                    </h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span
                      className={`${servicesHeader.smallText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      Zeld Technologies aims to make all traditional
                      bricks-and-mortal business enjoy the fascinating and
                      amazing opportunities of running businesses on the web,
                      hence its dedication to the production of high performing
                      and robust web applications. Our web applications are
                      highly secure, fast, high performing, and has the
                      potential to make you achieve whatever goal you have that
                      requires a website.
                    </span>
                  </p>
                </div>
                <div className={`flex relative`}>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div>
                    <img
                      src={webDev}
                      alt="Floating-mobile"
                      className={`${servicesHeader.floatingImg}`}
                    />
                  </div>
                </div>
              </div>
              <div className={`${servicesHeader.floatingImgStyles}`}>
                <div className={`${servicesHeader.centerText}`}>
                  <p>
                    <h1
                      className={`${servicesHeader.mediumText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      Mobile Application Development
                    </h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span
                      className={`${servicesHeader.smallText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      The increasing use of mobile devices globally informs of
                      the need for robust mobile applications. Reach a larger
                      audience with your business or whatever it may be with a
                      mobile application that serves no purpose than what you
                      desire.
                      <span
                        className={`${
                          selectToggleMode
                            ? servicesHeader.darkBg
                            : servicesHeader.lightBg
                        }`}
                      >
                        Be Our Next Happy Client
                      </span>
                    </span>
                  </p>
                </div>
                <div className={`flex relative`}>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div>
                    <img
                      src={mobileDev}
                      alt="A floating image showing our work as mobile app developers"
                      className={`${servicesHeader.floatingImg}`}
                    />
                  </div>
                </div>
                <div className={`${servicesHeader.centerText}`}>
                  <p>
                    <h1
                      className={`${servicesHeader.mediumText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      UI/UX Design
                    </h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span
                      className={`${
                        servicesHeader.smallText
                      } tracking-tighter ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      Looking for a powerful design? Zeld Technologies' team of
                      UI/UX designers have you covered. Get our amazing designs
                      ranging from flyers, posters, business cards, and whatever
                      design you may need, all from Zeld.
                    </span>
                  </p>
                </div>
              </div>
              <div
                className={`mt-10 flex justify-center text-center items-center`}
              >
                <p>
                  <span
                    className={`${servicesHeader.smallText} ${
                      selectToggleMode
                        ? servicesHeader.darkBg
                        : servicesHeader.lightBg
                    } ${selectToggleMode ? "text-blue-800" : "text-green-900"}`}
                  >
                    Wait... Want an electronic device to buy as well, we also
                    deal in high quality electronic devices from high quality
                    and highly recognized brands like Hp, Dell, Sony, among
                    other amazing brands.
                  </span>
                </p>
              </div>
            </div>
            <div className={`${servicesHeader.workStyles} mt-10`}>
              <div className={`${servicesHeader.workStylesHeader}`}>
                <p
                  className={`${
                    selectToggleMode
                      ? servicesHeader.darkBg
                      : servicesHeader.lightBg
                  } ${servicesHeader.smallText} font-medium`}
                >
                  <span
                    className={`${
                      selectToggleMode
                        ? servicesHeader.uniqueText
                        : "text-green-700"
                    }`}
                  >
                    How We Work
                  </span>
                </p>
                <p
                  className={`${servicesHeader.largeText} ${
                    selectToggleMode
                      ? servicesHeader.darkBg
                      : servicesHeader.lightBg
                  }`}
                >
                  Small teams of dedicated and honest team players.
                </p>
              </div>
              <img
                src={webDesign}
                alt="An image of a team leader showing our team structure"
                className={`${servicesHeader.workStylesImg} ${servicesHeader.solidImg}`}
              />
              <p className={`${servicesHeader.paraStyle}`}>
                <span
                  className={`${servicesHeader.smallText} ${
                    selectToggleMode
                      ? servicesHeader.darkBg
                      : servicesHeader.lightBg
                  }`}
                >
                  We believe in breaking down complex problems into smaller ones
                  for a better solution. We break down our developers into
                  smaller teams comprising of UI/UX designers, product, project
                  and QA managers. Following the Design Sprint principles, we
                  create an idea and visualize it. We then maximize efficiency
                  by following a fluid-agile process with strategic development
                  cycles to ensure we deliver a quality product on-time and in
                  style. Not only that, we provide a suite of support services
                  that enable our clients' products to scale into viable
                  businesses poised for customer acquisition.
                </span>
              </p>
              <div className={`${servicesHeader.buttonStart}`}>
                <Button />
              </div>
            </div>
            <div
              className={`${servicesHeader.centerSmallScreen} max-lg:mt-10 ${
                !selectToggleMode ? "bg-[#334b61]" : "bg-[#172a5a]"
              } rounded-md mt-10 bg-opacity-45`}
            >
              <p
                className={`${servicesHeader.largeText} ${
                  selectToggleMode
                    ? servicesHeader.darkBg
                    : servicesHeader.lightBg
                } ${
                  selectToggleMode
                    ? servicesHeader.uniqueText
                    : "text-blue-500 bg-opacity-45"
                }`}
              >
                <span
                  className={`${
                    selectToggleMode
                      ? servicesHeader.uniqueText
                      : "text-green-900"
                  }`}
                >
                  Our Core Skills
                </span>
              </p>
              <div className={`${servicesHeader.coreServices} mt-10`}>
                <div className={`${servicesHeader.flexCol}`}>
                  <p>
                    <h1
                      className={`${servicesHeader.mediumText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      Idea Creation
                    </h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span
                      className={`${servicesHeader.smallText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      Zeld Technologies is endowed with highly skilled team
                      players who are innovative in idea creation and the
                      realization of these ideas. Have you ever thought about
                      doing something and not clear about it, reach us and we
                      will help clarify your ideas and visualize it, even if it
                      involves we going out of our normal routine.
                    </span>
                  </p>
                </div>
                <div className={`relative flex`}>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div>
                    <img
                      src={ideaImg}
                      alt="An image of idea creation."
                      className={`${servicesHeader.solidImg}`}
                    />
                  </div>
                </div>
              </div>
              <div className={`${servicesHeader.coreServices} mt-8`}>
                <div className={`flex relative`}>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div>
                    <img
                      src={coding}
                      alt="An image of a programmer coding."
                      className={`${servicesHeader.solidImg}`}
                    />
                  </div>
                </div>
                <div className={`${servicesHeader.flexCol}`}>
                  <p>
                    <h1
                      className={`${servicesHeader.mediumText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      Building Products
                    </h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span
                      className={`${servicesHeader.smallText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      We build upon the philosophy that great products require
                      precision, dexterity and all-hands-on-deck mentality. Our
                      keen sense of emerging technologies and business acumen
                      culminates from years of experience producing sustainable
                      and visible products built to last.
                    </span>
                  </p>
                </div>
              </div>
              <div className={`${servicesHeader.coreServices} mt-8`}>
                <div className={`${servicesHeader.flexCol}`}>
                  <p>
                    <h1
                      className={`${servicesHeader.mediumText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      Scale Business
                    </h1>
                  </p>
                  <p className={`${servicesHeader.paraStyle}`}>
                    <span
                      className={`${servicesHeader.smallText} ${
                        selectToggleMode
                          ? servicesHeader.darkBg
                          : servicesHeader.lightBg
                      }`}
                    >
                      We pride ourselves on our branded approach to transforming
                      ideas into businesses primed for success. Following the
                      Design Sprint principles, we make sure to understand
                      whatever needs you have, and then employ critical thinking
                      and analytical skills through team work to find a solution
                      to whatever the problem may be.There is therefore the
                      assurance that our clients get nothing but the best from
                      Zeld because they of course deserve nothing but the best.
                    </span>
                  </p>
                </div>
                <div className={`flex relative`}>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div className={`${servicesHeader.servicesSpread}`}></div>
                  <div>
                    <img
                      src={scaleBusiness}
                      alt="An image of a team of developers."
                      className={`${servicesHeader.solidImg}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${servicesHeader.coreServices} mt-14 ${
                servicesHeader.centerSmallScreen
              } ${
                !selectToggleMode ? "bg-[#2b2b333a]" : "bg-[#2b2b333a]"
              } bg-opacity-45`}
            >
              <div className={`${servicesHeader.flexCol}`}>
                <p
                  className={`${
                    selectToggleMode
                      ? servicesHeader.darkBg
                      : servicesHeader.lightBg
                  }`}
                >
                  <h1 className={`${servicesHeader.mediumText}`}>
                    <span
                      className={`${
                        selectToggleMode
                          ? servicesHeader.uniqueText
                          : "text-green-900"
                      }`}
                    >
                      Ready to get Started?
                    </span>
                  </h1>
                </p>
                <p className={`${servicesHeader.paraStyle}`}>
                  <span
                    className={`${servicesHeader.smallText} ${
                      selectToggleMode
                        ? servicesHeader.darkBg
                        : servicesHeader.lightBg
                    }`}
                  >
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was dead black, and the stars had ceased to
                    twinkle, nonetheless, we are forever available to our
                    cherished clients. We look forward to working with you.
                  </span>
                </p>
                <div className={`${servicesHeader.buttonStart}`}>
                  <Button />
                </div>
              </div>
              <img
                src={customerImg}
                alt="An image of a man waving."
                className={`${servicesHeader.solidImg}`}
              />
            </div>
          </main>
        </div>
        <footer>
          <div>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Services;

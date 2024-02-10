import React from "react";
import Header from "./utilityCompo/Header";
import Agents from "./utilityCompo/Agents";
import Stats from "./utilityCompo/Stats";
import Button from "./utilityCompo/Button";
import { icons } from "../../public/utilityImg/icons";
import {
  html,
  codeBug,
  securityImg,
  credibleImg,
  cctv,
  codeImg,
  saleImg,
  commandPrompt,
  barGraph,
} from "../../public/LandImg/landImg";

const LandPage: React.FC = () => {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
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
            <div>
              <img
                src={html}
                alt="An html tag image to show we are into web dev."
              />
              <img
                src={codeBug}
                alt="A code bug image to show we create bug-free web apps."
              />
              <img
                src={securityImg}
                alt="A security key image to show we create high security applications."
              />
              <img
                src={credibleImg}
                alt="A sign of our credibilty with a credible image."
              />
            </div>
            <button type="button">Get Started</button>
          </div>
          {/*Images to briefly introduce our services*/}
          <div>
            <img
              src={cctv}
              alt="A cctv image to show our expertise in cctv services."
            />
            <img src={codeImg} alt="An image of a computer code." />
            <img src={saleImg} alt="A sale image to show we also do sales." />
            <img src={commandPrompt} alt="An image of a command prompt." />
            <img src={barGraph} alt="An image of a command prompt." />
          </div>
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
          {/*Enlighten texts display*/}
          <div>
            <div className="text-blue-500 bg-[url(public/LandImg/barGraph.jpg)]">
              <p>Increase Visbility</p>
              <span>
                Having a website or web app makes it easier for individuals
                surfing the web to easily identify your business. With billions
                of internet users in the world, having a website allows you to
                reach a larger audience and increase your online visibility.
              </span>
            </div>
            <div className="bg-[url(public/LandImg/credibleImg.jpg)]">
              <p>Professionalism and Credibility</p>
              <span>
                A well-designed website can make you look professional. This
                sense of professionalism makes you a credible candidate to
                potential clients. It creates a sense of legitimacy to your
                customers.
              </span>
            </div>
            <div>
              <p>Marketting and Sales</p>
              <span>
                A website is an avenue to promote and showcase your products or
                services for sale. This not only increases sales, but goes ahead
                to increase your customer base. You can go further to show your
                testimonials to potential clients to help increase the
                credibility of your business.
              </span>
            </div>
            <div>
              <p>Customer Management</p>
              <span>
                A web app rightly designed can be a link between your business
                and customers. There can be a regular interaction with
                customers, as well as receiving feedbacks from them to help
                build on your business.
              </span>
            </div>
          </div>
          <div>
            <p>Transforming dreams into Powerful Solutions</p>
            <span>
              With our expertise and dedication, we are committed to delivering
              exceptional services that meet your unique needs.
            </span>
          </div>
          <div>
            <Stats />
          </div>
          <div>
            <div>
              <p>Our Pride as Zeld</p>
              <span>
                We pride ourseld on being the go-to partner for your business
                that requires top-notch technological services.
              </span>
              {/*Utility class for the button*/}
              <Button />
            </div>
            <div>
              <p>Quality and Attention to Detail</p>
              <span>
                We carefully pay attention to the requests of clients to make
                sure the exact requirement from the client is provided. With
                this, we at Zeld will see to it that exactly what the user
                requests is provided, while paying attention to quality. Trust
                Zeld to handle your diverse development with the use of best and
                quality tools as well as industry best practices.
              </span>
            </div>
            <div>
              <p>Expertise and Experience</p>
              <p>
                Zeld is credited with experience and expertise in the space of
                technology. We are a company providing diverse services from web
                development, mobile application development, cctv installations
                and repairs as well sales of electronics.
                <span>When you want quality, speak Zeld.</span>
              </p>
            </div>
            <div>
              <p>Communication and Support</p>
              <span>
                Zeld greatly has customers at heart and we not only run the
                company, but constantly take the concerns of our clients. You
                can logde complaints, make suggestions as well contact customer
                support to get all your issues addressed.
                <span>
                  <a href="#">Support</a>
                </span>
              </span>
            </div>
          </div>
        </main>
        <div>
          <p>It takes an eye blink to be on the web with Zeld.</p>
          <span>
            <Button />
          </span>
        </div>
      </div>
    </>
  );
};

export default LandPage;

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
          {/*Enlighten texts display*/}
          <div>
            <div>
              <p>Increase Visbility</p>
              <span>
                Having a website or web app makes it easier for individuals
                surfing the web to easily identify your business. With billions
                of internet users in the world, having a website allows you to
                reach a larger audience and increase your online visibility.
              </span>
            </div>
            <div>
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
        </main>
      </div>
    </>
  );
};

export default LandPage;

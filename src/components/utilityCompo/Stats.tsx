import React from "react";
import { stats } from "../stats";
import Button from "./Button";
import { landPageStyles } from "../../styles/compoStyles/LandStyles/landHeader";
const Stats: React.FC = () => {
  return (
    <>
      <div className={`${landPageStyles.statsStylesContainer}`}>
        <div className={`${landPageStyles.statsStyles} max-w-[20ch]`}>
          <div className="border-solid rounded-md bg-gradient-to-br from-blue-500 to-pink-600">
            <span className="text-slate-200">Working History</span>
          </div>

          <p className={`text-2xl`}>
            A little <br /> about <br />{" "}
            <span className="text__blue-pink">our Story</span>
          </p>
          <span>
            With our expertise and dedication, <br /> we are committed to
            delivering exceptional services that meet your unique needs.
          </span>
          <div className="mt-5"><Button /></div>
        </div>
        <div className={`${landPageStyles.statsStylesRow}`}>
          <div className={`${landPageStyles.statsStyles}`}>
            <span className="text__blue-pink">{`${stats.products}+ `}</span>
            <span>Products Built</span>
          </div>
          <div className={`${landPageStyles.statsStyles}`}>
            <span className="text__blue-pink">{`${stats.clients}+ `}</span>
            <span>Happy Cleints</span>
          </div>
          <div className={`${landPageStyles.statsStyles}`}>
            <span className="text__blue-pink">{`${stats.developers}+ `}</span>
            <span>Creative People</span>
          </div>
          <div className={`${landPageStyles.statsStyles}`}>
            <span className="text__blue-pink">{`${stats.years}+ `}</span>
            <span>Years of Experience</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;

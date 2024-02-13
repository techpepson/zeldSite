import React from "react";
import { stats } from "../stats";
import Button from "./Button";
import { landPageStyles } from "../../styles/compoStyles/LandStyles/landHeader";
const Stats: React.FC = () => {
  return (
    <>
      <div className={`${landPageStyles.statsStylesContainer}`}>
        <div className={`${landPageStyles.statsStyles} max-w-[20ch]`}>
          <span>Working History</span>
          <p>
            A little about <br /> our Story
          </p>
          <span>
            With our expertise and dedication, <br /> we are committed to
            delivering exceptional services that meet your unique needs.
          </span>
          <Button />
        </div>
        <div className={`${landPageStyles.statsStylesRow}`}>
          <div className={`${landPageStyles.statsStyles}`}>
            {`${stats.products}+ `}
            <span>Products Built</span>
          </div>
          <div className={`${landPageStyles.statsStyles}`}>
            {`${stats.clients}+ `}
            <span>Happy Cleints</span>
          </div>
          <div className={`${landPageStyles.statsStyles}`}>
            {`${stats.developers}+ `}
            <span>Creative People</span>
          </div>
          <div className={`${landPageStyles.statsStyles}`}>
            {`${stats.years}+ `}
            <span>Years of Experience</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;

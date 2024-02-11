import React from "react";
import { stats } from "../stats";
import Button from "./Button";
const Stats: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <span>Working History</span>
          <p>A little about our Story</p>
          <span>
            With our expertise and dedication, we are committed to delivering
            exceptional services that meet your unique needs.
          </span>
          <Button />
        </div>
        <div>
          <div>
            {`${stats.products}+ `}
            <span>Products Built</span>
          </div>
          <div>
            {`${stats.clients}+ `}
            <span>Happy Cleints</span>
          </div>
          <div>
            {`${stats.developers}+ `}
            <span>Creative People</span>
          </div>
          <div>
            {`${stats.years}+ `}
            <span>Years of Experience</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;

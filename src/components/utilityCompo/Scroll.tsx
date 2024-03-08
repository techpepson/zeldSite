import React, { useState, useEffect } from "react";
import { icons } from "../../../public/utilityImg/icons";
import { headerStyles } from "../../styles/compoStyles/LandStyles/landHeader";

const Scroll: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is close to the bottom of the page
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        setIsAtBottom(!isAtBottom);
      } else {
        setIsAtBottom(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAtBottom]);

  const moveDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  const moveUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className={`${headerStyles.scrollStyles} cursor-pointer`}>
        <button
          type="button"
          title={`${isAtBottom ? "Click to move up" : "Click to move down"}`}
          onClick={isAtBottom ? moveUp : moveDown}
          className="text-[#65a30d]"
        >
          {isAtBottom ? icons.chevronUp : icons.chevronDown}
        </button>
      </div>
    </>
  );
};

export default Scroll;

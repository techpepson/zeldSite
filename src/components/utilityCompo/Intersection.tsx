// A component for the intersection observers using react-intersection-observer

import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/utilityStyles/animate.css";

interface IntersectionProps {
  children: ReactNode;
}

const Intersection: React.FC<IntersectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className={inView ? "intersection-side" : ""} ref={ref}>
      {children}
    </div>
  );
};

export default Intersection;

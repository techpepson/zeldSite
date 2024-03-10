import React from "react";

const Copyright: React.FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="text-slate-50">&copy; Copyright {currentYear} <span className="ml-5 text-slate-50">Zeld Technologies</span></p>
      </div>
    </>
  );
};

export default Copyright;

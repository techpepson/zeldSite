import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./components/components";
import Scroll from "./components/utilityCompo/Scroll";
import Services from "./components/Services";

const App: React.FC = () => {
  return (
    <>
      <Scroll />
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/services" element = {<Services/>}></Route>
      </Routes>
    </>
  );
};
export default App;

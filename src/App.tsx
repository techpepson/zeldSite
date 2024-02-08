import React from "react";
import { Route, Routes } from "react-router-dom";
import LandPage from "./components/LandPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandPage></LandPage>}></Route>
      </Routes>
    </>
  );
};
export default App;

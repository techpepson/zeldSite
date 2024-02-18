import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing, Header } from "./components/components";
// import MiniNav from "./components/utilityCompo/MiniNav";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </>
  );
};
export default App;

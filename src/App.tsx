import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./components/components";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </>
  );
};
export default App;

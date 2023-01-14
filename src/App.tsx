import React, { useContext } from "react";
import "./App.css";
import Main from "./component/Main";
import AlgoContent from "./component/utilis/AlgoContent";
import { Context } from "./component/utilis/AlgoContext";
import Header from "./component/Header";

function App() {
  const { settings } = useContext(Context);
  return (
    <div>
      <div className="md:block hidden">
        <div className="grid grid-rows-4  min-w-screen min-h-screen overflow-hidden">
          <Header />
          <Main />
        </div>
        <AlgoContent AlgoType={settings.algoType} />
      </div>
      <div className="md:hidden bg-black min-h-screen text-white flex justify-center items-center capitalize font-inter font-noraml font-3xl">
        project isn't designed for moblie view!! please switch to destop view
      </div>
    </div>
  );
}

export default App;

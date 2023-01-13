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
      <div className="grid grid-rows-4  min-w-screen min-h-screen overflow-hidden">
        <Header />
        <Main />
      </div>
      <AlgoContent AlgoType={settings.algoType} />
    </div>
  );
}

export default App;

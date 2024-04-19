import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Compo1 from "./Components/Compo1";
import Compo2 from "./Components/Compo2";
import Compo3 from "./Components/Compo3";
import Compo4 from "./Components/Compo4";
import Compo5 from "./Components/Compo5";

function App() {
  return (
    <>
      <Compo1 />
      <Compo2 />
      <Compo3 />
      <Compo4 />
      <Compo5/>
    </>
  );
}

export default App;

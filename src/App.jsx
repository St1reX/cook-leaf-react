import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

async function loadFlyonUI() {
  return import("flyonui/flyonui");
}

function App() {
  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);

  return (
    <>
      <div id="mainContainer">
        <Navbar></Navbar>
      </div>
    </>
  );
}

export default App;

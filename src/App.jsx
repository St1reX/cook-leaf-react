import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

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
        <Header></Header>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
      </div>
    </>
  );
}

export default App;

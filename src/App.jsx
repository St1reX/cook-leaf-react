import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import Search from "./pages/Search";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

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

  const siteContent = (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Search />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );

  return (
    <>
      <Layout Content={siteContent}></Layout>
    </>
  );
}

export default App;

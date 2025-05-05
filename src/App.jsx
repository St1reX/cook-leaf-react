import "./App.css";
import { Route, Routes } from "react-router-dom";

import useFlyonUIInit from "./hooks/useFlyonUIInit";

import Layout from "./components/Layout";

import Search from "./pages/Search";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  useFlyonUIInit();

  const siteContent = (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Search />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
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

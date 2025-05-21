import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import useFlyonUIInit from "./hooks/useFlyonUIInit";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import { setupInterceptors } from "./constants/axios";

import Layout from "./components/Layout";

import Search from "./pages/Search";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";

function App() {
  useFlyonUIInit();

  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setupInterceptors(auth, navigate);
  }, []);

  const siteContent = (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Search />}></Route>
        <Route path="/recipe/:id" element={<Recipe />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
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

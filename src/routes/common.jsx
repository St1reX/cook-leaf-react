import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Search from "../pages/Search";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Recipe from "../pages/Recipe";
import Profile from "../pages/Profile";
import Help from "../pages/Help";
import GuestOnlyRoute from "./GuestOnly";
import UserOnlyRoute from "./UserOnly";

export const appContent = (
  <>
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Search />}></Route>
      <Route path="/recipe/:id" element={<Recipe />}></Route>

      <Route path="/about" element={<About />}></Route>
      <Route path="/help" element={<Help />}></Route>

      <Route element={<GuestOnlyRoute />}>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>

      <Route element={<UserOnlyRoute />}>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  </>
);

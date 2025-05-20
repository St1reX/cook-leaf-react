import { Link } from "react-router-dom";

import mainLogo from "../../../assets/mainLogo.svg";
import { useAuth } from "../../../context/AuthContext";
import ProfileDataDropdown from "./ProfileDataDropdown/ProfileDataDropdown";

export default function Header() {
  const { user } = useAuth();

  const menuOptions = [
    {
      content: "Search",
      link: "/",
      icon: "icon-[mingcute--search-3-line]",
    },
    {
      content: "Login",
      link: "/login",
      icon: "icon-[mingcute--enter-door-line]",
    },
    {
      content: "Register",
      link: "/register",
      icon: "icon-[mingcute--user-1-line]",
    },
  ];

  return (
    <>
      <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 mb-4">
        <div className="navbar-start max-md:w-1/4"></div>
        <div className="navbar-center max-md:hidden">
          <Link to={"/"}>
            <img className="w-48" src={mainLogo} alt="Application Logo" />
          </Link>
        </div>
        <div className="navbar-end items-center gap-4">
          <ul className="menu menu-horizontal p-0 font-medium items-center">
            {user === null &&
              menuOptions.map((element, index) => (
                <li key={index}>
                  <Link to={element.link}>
                    {element.content}
                    <span className={element.icon} style={{ width: 24, height: 24 }} />
                  </Link>
                </li>
              ))}

            {user && (
              <>
                <li>
                  <Link to={menuOptions[0].link}>
                    {menuOptions[0].content}
                    <span className={menuOptions[0].icon} style={{ width: 24, height: 24 }} />
                  </Link>
                </li>
                <li>
                  <ProfileDataDropdown
                    email={user.mail}
                    profilePic={user.profile_picture_path}
                  ></ProfileDataDropdown>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

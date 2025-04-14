import mainLogo from "../../assets/mainLogo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar rounded-box flex w-full items-center justify-between gap-2">
        <div className="navbar-start max-md:w-1/4">
          <a
            className="link text-base-content link-neutral text-xl font-bold no-underline"
            href="#"
          ></a>
        </div>
        <div className="navbar-center max-md:hidden">
          <img className="w-48" src={mainLogo} alt="Application Logo" />
        </div>
        <div className="navbar-end items-center gap-4">
          <ul className="menu menu-horizontal p-0 font-medium">
            <li>
              <a href="#">
                Search
                <span
                  className="icon-[mingcute--search-3-line]"
                  style={{ width: 24, height: 24, color: "#000" }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                Login
                <br></br>
                <span
                  className="icon-[mingcute--enter-door-line]"
                  style={{ width: 24, height: 24, color: "#000" }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                Register
                <span
                  className="icon-[mingcute--user-1-line]"
                  style={{ width: 24, height: 24, color: "#000" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

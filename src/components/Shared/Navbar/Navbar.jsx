import { Link } from "react-router-dom";

export default function Navbar() {
  const navbarLinks = [
    {
      title: "Explore",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Help",
      link: "/help",
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center align-middle gap-6 text-lg mb-8">
        {navbarLinks.map((element, index) => (
          <Link key={index} to={element.link} className="link hover:link-primary link-animated">
            {element.title}
          </Link>
        ))}
      </div>
    </>
  );
}

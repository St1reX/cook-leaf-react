import mainLogo from '../../assets/mainLogo.svg';

export default function Header() {
  const menuOptions = [
    {
      content: 'Search',
      link: '#',
      icon: 'icon-[mingcute--search-3-line]',
    },
    {
      content: 'Login',
      link: '#',
      icon: 'icon-[mingcute--enter-door-line]',
    },
    {
      content: 'Register',
      link: '#',
      icon: 'icon-[mingcute--user-1-line]',
    },
  ];

  return (
    <>
      <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 mb-4">
        <div className="navbar-start max-md:w-1/4"></div>
        <div className="navbar-center max-md:hidden">
          <img className="w-48" src={mainLogo} alt="Application Logo" />
        </div>
        <div className="navbar-end items-center gap-4">
          <ul className="menu menu-horizontal p-0 font-medium">
            {menuOptions.map((element, index) => (
              <li key={index}>
                <a href={element.link}>
                  {element.content}
                  <span className={element.icon} style={{ width: 24, height: 24 }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

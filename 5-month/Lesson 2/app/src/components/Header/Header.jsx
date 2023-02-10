import logo from "../../images/logo.svg";
import "./Header.css";

function Header() {
  // const name = "Ibrohim";

  const arr = [
    {
      page: "Home",
      link: "/home",
    },
    {
      page: "Contact",
      link: "/contact",
    },
    {
      page: "Prices",
      link: "https://google.com",
    },
  ];

  return (
    <>
      <header className="header">
        <a href="#task" className="logo__link">
          <img src={logo} alt="logo" />
        </a>

        <ul className="header__list">
          {arr.map(({ page, link }) => {
            return (
              <li className="header__list-item">
                <a href={link}>{page}</a>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
}

export default Header;

import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((menu) => {
      menu = !menu;
      return menu;
    });
  };
  let menuClass = "navbar__menu";
  useEffect(() => {
    if (menu) {
      menuClass += " open";
    }
    console.log("teste", menuClass);
  }, [menu]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#intro">
          <code>daniel amaral</code>
        </a>
      </div>
      <button className="navbar__button" type="button" onClick={toggleMenu}>
        {/* line 1 */}
        <svg
          width="34"
          height="2"
          viewBox="0 0 34 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1"
            x2="32.2609"
            y2="1"
            stroke="#CC9139"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        {/* line 2 */}
        <svg
          width="29"
          height="2"
          viewBox="0 0 29 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.91309"
            y1="1"
            x2="28"
            y2="1"
            stroke="#CC9139"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        {/* line 3 */}
        <svg
          width="18"
          height="2"
          viewBox="0 0 18 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.26099"
            y1="1"
            x2="17.0001"
            y2="1"
            stroke="#CC9139"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <menu className={menu ? "navbar__menu open" : "navbar__menu"}>
        <li>
          <a href="#sobre">
            <span>01.</span> sobre
          </a>
        </li>
        <li>
          <a href="#experiencia">
            <span>02.</span> experiência
          </a>
        </li>
        <li>
          <a href="#projetos">
            <span>03.</span> projetos
          </a>
        </li>
        <li>
          <a href="#contato">
            <span>04.</span> contato
          </a>
        </li>
      </menu>
    </nav>
  );
};

export default Menu;

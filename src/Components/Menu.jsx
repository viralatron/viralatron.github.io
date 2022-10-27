import { useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((menu) => {
      menu = !menu;
      return menu;
    });
  };

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
        <li className="navbar__button--close">
          <button type="button" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </li>
        <li>
          <a href="#sobre" onClick={toggleMenu}>
            <span>01.</span> sobre
          </a>
        </li>
        <li>
          <a href="#experiencia" onClick={toggleMenu}>
            <span>02.</span> experiência
          </a>
        </li>
        <li>
          <a href="#projetos" onClick={toggleMenu}>
            <span>03.</span> projetos
          </a>
        </li>
        <li>
          <a href="#contato" onClick={toggleMenu}>
            <span>04.</span> contato
          </a>
        </li>
      </menu>
    </nav>
  );
};

export default Menu;

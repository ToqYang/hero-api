import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import Logo from "../img/logo.png";
import { Team } from "../pages/Team";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="header__imgtype">
          <div className="header__boxLogo">
            <img className="header__logo" src={Logo} alt="spiderman" />
          </div>
          <p className="header__title">SuperHero API</p>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/team">Mi Equipo</Link>
            </li>
          </ul>
          `
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

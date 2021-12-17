import "./App.css";
import "./styles/style.css";
import Logo from "./img/logo.png";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
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
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/team">My Team</a>
            </li>
          </ul>
          `
        </nav>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

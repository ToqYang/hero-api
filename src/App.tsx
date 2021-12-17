import "./App.css";
import "./styles/style.css";
import Logo from "./img/logo.png";
import { response } from "./fixture";

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">My Team</a>
            </li>
          </ul>
          `
        </nav>
      </header>
      <main>
        <h1>Build Your Team</h1>
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Search your SuperHero"
          />
          <button className="article__learn-more cursor-pointer search__icon">
            🔎
          </button>
        </div>
        <div className="articles">
          <article className="article">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              feugiat augue sit amet posuere lobortis. Cras erat risus, pulvinar
              eget augue id, molestie ultricies lectus. Curabitur et aliquam
            </p>
            <button className="article__learn-more btn-mt">➕Add</button>
          </article>
          <article className="article">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              feugiat augue sit amet posuere lobortis. Cras erat risus, pulvinar
              eget augue id, molestie ultricies lectus. Curabitur et aliquam
            </p>
            <button className="article__learn-more btn-mt">➕Add</button>
          </article>
          <article className="article">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              feugiat augue sit amet posuere lobortis. Cras erat risus, pulvinar
              eget augue id, molestie ultricies lectus. Curabitur et aliquam
            </p>
            <button className="article__learn-more btn-mt">➕Add</button>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;

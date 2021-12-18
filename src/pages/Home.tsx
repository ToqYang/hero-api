import { Cards } from "../components/items/Cards";
import { response } from "../fixture";

export const Home = () => {
  return (
    <main>
      <h1>Construye tu equipo</h1>
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
      <Cards response={response.results} />
    </main>
  );
};

import { useEffect, useState } from "react";
import { Cards } from "../components/items/Cards";
import { getSuperHero } from "../services/getSuperHero";
import { SuperHero } from "../interfaces/superheroes";
import Swal from "sweetalert2";

export const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SuperHero[]>([]);

  useEffect(() => {
    if (loading === true) {
      getSuperHero({ searchWord })
        .then((res: any) => setData(res.results))
        .catch((err) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          })
        )
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        });
    }
  }, [loading]);

  return (
    <main>
      <h1>Construye tu equipo</h1>
      <div className="search">
        <input
          className="search__input"
          type="text"
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          value={searchWord}
          placeholder="Search your SuperHero"
        />
        <button
          className="article__learn-more cursor-pointer search__icon"
          disabled={loading}
          onClick={(e) => setLoading(true)}
        >
          {loading ? "⌛" : "🔎"}
        </button>
      </div>
      {loading ? <h2>Loading... ⌚</h2> : <Cards response={data} />}
    </main>
  );
};

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Cards } from "../components/items/Cards";
import { Form } from "../components/forms/Form";
import { useEffect, useState } from "react";
import { SuperHero } from "../interfaces/superheroes";

export const Team = () => {
  const { teamHeroes } =
    useSelector((state: RootState) => state.heroesRed) || [];
  const [heroes, setHeroes] = useState<SuperHero[]>([]);
  const [restart, setRestart] = useState(false);

  const changeHeroes = (heroesUpdated: any) => {
    setHeroes(heroesUpdated);
  };

  const resetHeroes = () => {
    setRestart(!restart);
  };

  useEffect(() => {
    setHeroes(teamHeroes);
  }, [teamHeroes, restart]);

  return (
    <main>
      {heroes.length > 0 ? (
        <>
          <h1>Equipo</h1>
          <br />
          <h2>Filtros</h2>
          <Form
            heroes={heroes}
            changeHeroes={changeHeroes}
            resetHeroes={resetHeroes}
          />
          <Cards edit={true} response={heroes} />
        </>
      ) : (
        <h1>Crea tu equipo primero</h1>
      )}
    </main>
  );
};

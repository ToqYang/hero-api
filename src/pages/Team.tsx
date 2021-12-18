import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Cards } from "../components/items/Cards";

export const Team = () => {
  const { teamHeroes } = useSelector((state: RootState) => state.heroesRed);
  console.log("item: ", teamHeroes);

  return (
    <main>
      <h1>Equipo</h1>
      <Cards edit={true} response={teamHeroes} />
    </main>
  );
};

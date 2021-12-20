import { SuperHero } from "../../interfaces/superheroes";
import { Card } from "./Card";

interface CardProps {
  response: SuperHero[];
  edit?: boolean;
}

export const Cards = ({ response = [], edit = false }: CardProps) => {
  return (
    <>
      {response && <h4>Results: ({response.length})</h4>}
      <div className="articles">
        {response &&
          response.map((item: SuperHero) => (
            <Card edit={edit} key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

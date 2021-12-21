import React, { useState } from "react";
import { Button } from "../forms/Button";
import { SuperHero } from "../../interfaces/superheroes";
import { useDispatch } from "react-redux";
import { delTeam, joinTeam } from "../../actions/heroesAct";
import { FeatureHero } from "./FeatureHero";

interface CardProps {
  item: SuperHero;
  edit?: boolean;
}

export const Card = ({ edit = false, item }: CardProps) => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const { name, image, work, appearance, biography, id } = item;

  const addHero = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(joinTeam(item));
  };
  const delHero = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(delTeam(id));
  };

  return (
    <article className="article">
      <h2>{name}</h2>
      <div className="article__boxImg">
        <img className="article__img" src={image.url} alt={name} />
      </div>
      <p>{work.occupation}</p>
      {showMore && (
        <>
          <FeatureHero id={id} item={appearance} title={"Apariencia"} />
          <FeatureHero id={id} item={biography} title={"Biografia"} />
        </>
      )}
      <Button
        text={`${showMore ? "⬆️ Hidden" : "👀 More"}`}
        onClick={(e) => setShowMore((prev) => !prev)}
      />
      {edit ? (
        <>
          <Button text={`❌ Delete`} onClick={delHero} />
        </>
      ) : (
        <Button text={`➕ Add`} onClick={addHero} />
      )}
    </article>
  );
};

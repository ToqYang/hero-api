import React, { useState } from "react";
import { Button } from "../forms/Button";
import { SuperHero } from "../../interfaces/superheroes";
import { useDispatch } from "react-redux";
import { joinTeam } from "../../actions/heroesAct";
import { FeatureHero } from "./FeatureHero";

export const Card = (item: SuperHero) => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const { name, image, work, appearance, biography } = item;

  const addTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(joinTeam(item));
    console.log("item: ", item);
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
          <FeatureHero item={appearance} title={"Apariencia"} />
          <FeatureHero item={biography} title={"Biografia"} />
        </>
      )}
      <Button
        text={`${showMore ? "⬆️ Hidden" : "👀 More"}`}
        onClick={(e) => setShowMore((prev) => !prev)}
      />
      <Button text={`➕ Add`} onClick={addTeam} />
    </article>
  );
};

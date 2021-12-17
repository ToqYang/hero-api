import React from "react";
import { Button } from "../forms/Button";
import { SuperHero } from "../../interfaces/superheroes";
import { useDispatch, useSelector } from "react-redux";
import { joinTeam } from "../../actions/heroesAct";

export const Card = (item: SuperHero) => {
  const dispatch = useDispatch();
  const { name, image, work } = item;

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      <Button text={`👀 More`} />
      <Button text={`➕ Add`} onClick={onClick} />
    </article>
  );
};

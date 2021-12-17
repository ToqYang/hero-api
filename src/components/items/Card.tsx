import React from "react";
import { Button } from "../forms/Button";
import { SuperHero } from "../../interfaces/superheroes";

export const Card = (item: SuperHero) => {
  const { name, image, work } = item;
  return (
    <article className="article">
      <h2>{name}</h2>
      <div className="article__boxImg">
        <img className="article__img" src={image.url} alt={name} />
      </div>
      <p>{work.occupation}</p>
      <Button text={`👀 More`} />
      <Button text={`➕ Add`} />
    </article>
  );
};

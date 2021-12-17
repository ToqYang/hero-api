import React from "react";
import { Button } from "../forms/Button";

interface CardProps {
  id: string;
  name: string;
  occupation: string;
  url: string;
}

export const Card = ({ id, name, occupation, url }: CardProps) => {
  return (
    <article className="article">
      <h2>{name}</h2>
      <div className="article__boxImg">
        <img className="article__img" src={url} alt={name} />
      </div>
      <p>{occupation}</p>
      <Button text={`👀 More`} />
      <Button text={`➕ Add`} />
    </article>
  );
};

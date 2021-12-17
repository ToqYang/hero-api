import React from "react";

interface CardProps {
  id: string;
  name: string;
  occupation: string;
  url: string;
}

export const Card = ({ id, name, occupation, url }: CardProps) => {
  return (
    <article key={id} className="article">
      <h2>{name}</h2>
      <div className="article__boxImg">
        <img className="article__img" src={url} alt={name} />
      </div>
      <p>{occupation}</p>
      <button className="article__learn-more btn-mt">👀 More</button>
      <button className="article__learn-more btn-mt">➕ Add</button>
    </article>
  );
};

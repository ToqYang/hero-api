import React from "react";
import { Cards } from "../components/items/Cards";

export const Home = () => {
  return (
    <>
      <h1>Build Your Team</h1>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search your SuperHero"
        />
        <button className="article__learn-more cursor-pointer search__icon">
          🔎
        </button>
      </div>
      <Cards />
    </>
  );
};

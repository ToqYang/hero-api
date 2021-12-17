import React from "react";
import { Card } from "./Card";
import { response } from "../../fixture";

export const Cards = () => {
  return (
    <div className="articles">
      {response &&
        response.results.map((item) => {
          const { id, name, work, image } = item;
          const card = {
            id,
            name,
            occupation: work.occupation,
            url: image.url,
          };
          return <Card key={id} {...card} />;
        })}
    </div>
  );
};

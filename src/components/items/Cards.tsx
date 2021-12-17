import React from "react";
import { Card } from "./Card";
import { response } from "../../fixture";

export const Cards = () => {
  return (
    <div className="articles">
      {response &&
        response.results.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

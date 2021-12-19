import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { Powerstats, SuperHero } from "../../interfaces/superheroes";
import { RangeSlider } from "./RangeSlider";
import { Button } from "./Button";

export const Form = ({ heroes = [], changeHeroes, resetHeroes }: any) => {
  const [myTeam, setMyTeam] = useState([]);
  const { values, handleInputChange, reset } = useForm({
    intelligence: "100",
    strength: "100",
    speed: "100",
    durability: "100",
    power: "100",
    combat: "100",
  });
  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
  }: Powerstats = values;

  const applyfilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const formKeys = Object.keys(values);
    const formValues = Object.values(values);
    let heros: SuperHero[] = myTeam?.filter(({ powerstats }: any) => {
      for (let j = 0; j < formKeys.length; ++j) {
        if (Number(powerstats[formKeys[j]]) > Number(formValues[j])) {
          return false;
        }
      }
      return true;
    });

    heros = heros.sort((a: any, b: any) => a.name.localeCompare(b.name));

    console.log("heroes: ", heros);
    changeHeroes && changeHeroes(heros);
  };

  const resetFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
    resetHeroes && resetHeroes();
  };

  useEffect(() => {
    setMyTeam(heroes);
  }, [heroes]);

  return (
    <form>
      <RangeSlider
        title="Intelligence"
        name="intelligence"
        value={intelligence}
        handleInputChange={handleInputChange}
      />
      <RangeSlider
        title="Strength"
        name="strength"
        value={strength}
        handleInputChange={handleInputChange}
      />
      <RangeSlider
        title="Speed"
        name="speed"
        value={speed}
        handleInputChange={handleInputChange}
      />
      <RangeSlider
        title="Durability"
        name="durability"
        value={durability}
        handleInputChange={handleInputChange}
      />
      <RangeSlider
        title="Power"
        name="power"
        value={power}
        handleInputChange={handleInputChange}
      />
      <RangeSlider
        title="Combat"
        name="combat"
        value={combat}
        handleInputChange={handleInputChange}
      />
      <Button text="Aplicar" onClick={applyfilters} />
      <Button text="Resetear Filtros" onClick={resetFilters} />
    </form>
  );
};

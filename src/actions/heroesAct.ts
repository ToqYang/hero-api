import { types } from "../typesaction/types";

export const heroesAct = (hero: any) => (dispatch: any) => {
  dispatch({
    type: types.addHero,
    payload: hero,
  });
};

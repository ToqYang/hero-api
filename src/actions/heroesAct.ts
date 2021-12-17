import { types } from "../typesaction/types";
import { SuperHero } from '../interfaces/superheroes';

export const joinTeam = (hero: SuperHero) => (dispatch: any, getState: any) => {
	const state = getState().heroesRed.teamHeroes;
	console.log(state);
	const existHero = state.find((heroStored: SuperHero) => hero.id === heroStored?.id);
	console.log(existHero);
	if (existHero) {
		dispatch({
			type: types.updateHero,
			payload: hero
		})
	} else {
		dispatch({
			type: types.addHero,
			payload: hero,
		});
	}
};

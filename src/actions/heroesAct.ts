import { types } from "../typesaction/types";
import { SuperHero } from '../interfaces/superheroes';

export const joinTeam = (hero: SuperHero) => (dispatch: any, getState: any) => {
	const state = getState().heroesRed.teamHeroes;
	const existHero = state.find((heroStored: SuperHero) => hero.id === heroStored?.id);
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

export const delTeam = (id: string) => (dispatch: any) => {
	dispatch({
		type: types.delHero,
		payload: {id}
	})
};


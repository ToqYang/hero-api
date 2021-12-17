import { SuperHero } from '../interfaces/superheroes';
import { types } from '../typesaction/types';

const initialState = {
	teamHeroes: []
}
export const heroesRed = (state = initialState, action: any) => {
	switch (action?.type) {
		case types.addHero:
			return {
				...state,
				teamHeroes: [action.payload, ...state.teamHeroes]
			};
		case types.updateHero:
			return {
				...state,
				teamHeroes: state.teamHeroes.map((hero: SuperHero) => hero.id === action.payload.id ? action.payload: hero)
			}
		default:
			return state;
	}
}
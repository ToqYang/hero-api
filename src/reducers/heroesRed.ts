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
		case types.delHero:
			return {
				...state,
				teamHeroes: state.teamHeroes.filter((heroToDel: SuperHero) => heroToDel.id !== action.payload.id)
			}
		default:
			return state;
	}
}
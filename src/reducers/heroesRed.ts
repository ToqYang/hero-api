import { types } from '../typesaction/types';


const initialState = {
	teamHeroes: []
}

export const heroesRed = (state = initialState, action: any) => {
	switch (action?.type) {
		case types.addHero:
			return {
				teamHeroes: action.payload
			};
		default:
			return state;
	}
}
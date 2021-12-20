import { SuperHero } from '../../interfaces/superheroes';
import { heroesRed } from '../../reducers/heroesRed';
import { types } from '../../typesaction/types';
import { response } from '../fixtures/fixture';


describe("Test Heroes Reducer", () => {
	const heroes: SuperHero[] = response.results;
	const initialState: any = {
		teamHeroes: heroes
	}

	test('Add SuperHero', () => {
		const heroesAdded: any = heroesRed({teamHeroes: []}, {
			type: types.addHero,
			payload: heroes[0]
		})
		expect(heroesAdded.teamHeroes).toEqual([heroes[0]]);
		expect(heroesAdded.teamHeroes.length).toEqual([heroes[0]].length);
	});

	test('Add 3 heroes', () => {
		const heroesAdded: any = heroesRed({teamHeroes: []}, {
			type: types.addHero,
			payload: heroes
		})

		expect(heroesAdded.teamHeroes[0].length).toEqual(heroes.length);
	})

	test('Default state', () => {
		const heroesAdded: any = heroesRed(initialState, {});
		expect(heroesAdded.teamHeroes.length).toEqual(heroes.length);
	})

	test('Delete hero', () => {
		const id: string = heroes[0].id;
		const heroesAdded = heroesRed(initialState, {
			type: types.delHero,
			payload: {id}
		});
		expect(heroesAdded.teamHeroes.length).toEqual(heroes.length - 1);
	})

});
import { types } from "../typesaction/types";
import { SuperHero } from '../interfaces/superheroes';
import Swal from "sweetalert2";

export const joinTeam = (hero: SuperHero) => (dispatch: any, getState: any) => {
	const state = getState().heroesRed.teamHeroes;
	const existHero = state.find((heroStored: SuperHero) => hero.id === heroStored?.id);
	if (existHero) {
		dispatch({
			type: types.updateHero,
			payload: hero
		})
		Swal.fire({
			icon: "success",
			title: "Actualizado",
			text: `El heroe ${hero.name} ha sido actualizado`,
		});
	} else {
		dispatch({
			type: types.addHero,
			payload: hero,
		});
		Swal.fire({
			icon: "success",
			title: "Añadido",
			text: `El heroe ${hero.name} ha sido añadido`,
		});
	}
};

export const delTeam = (id: string) => (dispatch: any) => {
	dispatch({
		type: types.delHero,
		payload: {id}
	})
	Swal.fire({
		icon: "success",
		title: "Eliminado",
		text: "La eliminación fue correcta",
	});
};


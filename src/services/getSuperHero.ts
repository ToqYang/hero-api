import { BASE_URL, REACT_APP_API_KEY } from '../config';

interface GetByName {
	searchWord: string;
}

export const getSuperHero = ({searchWord}: GetByName) => {
	const requestOptions: RequestInit = {
		method: 'GET',
		redirect: 'follow'
	};

	return fetch(`${BASE_URL}/${REACT_APP_API_KEY}/search/${searchWord}`, requestOptions)
		.then(response => response.json())
}

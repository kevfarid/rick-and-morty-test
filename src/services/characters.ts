import Character from '../models/Character';
import Responses from '../models/Responses';

type FetchData = Responses<Character>;

export function getCharacters(page = 1, name = ''): Promise<FetchData> {
  const nameParam = name ? `&name=${name}` : '';

  return fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}${nameParam}`
  )
    .then((res) => res.json())
    .then((data) => data);
}

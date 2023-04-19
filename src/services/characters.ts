import Character from '../models/Character';
import Responses from '../models/Responses';

type FetchData = Responses<Character>;

export function getCharacters(page = 1): Promise<FetchData> {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
    (res) => res.json()
  );
}

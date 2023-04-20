import Episode from '../models/Episodes';
import { getCharacter } from './characters';

export function getEpisodeBase(id: number) {
  return fetch(`https://rickandmortyapi.com/api/episode/${id}`).then((res) =>
    res.json()
  );
}

export function getEpisode(id: number): Promise<Episode> {
  return getEpisodeBase(id).then((data) => data);
}

export function getEpisodeWithCharacters(id: number): Promise<Episode> {
  return getEpisodeBase(id).then(async (data) => {
    const characters = data.characters.map((character: string) => {
      const idCharacter = character.split('/').pop();
      return getCharacter(Number(idCharacter));
    });

    return {
      ...data,
      characters: await Promise.all(characters),
    };
  });
}

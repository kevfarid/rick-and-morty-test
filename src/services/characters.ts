import Character from '../models/Character';
import CharacterInfo from '../models/CharacterInfo';
import Episode from '../models/Episode';
import Responses from '../models/Responses';
import { getEpisode } from './episodes';

type FetchData = Responses<Character>;

export function getCharacters(page = 1, name = ''): Promise<FetchData> {
  const nameParam = name ? `&name=${name}` : '';

  return fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}${nameParam}`
  )
    .then((res) => res.json())
    .then((data) => data);
}

export function getCharacter(id: number): Promise<CharacterInfo> {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then(async (data) => {
      const episodesSpliced = data.episode.splice(0, 5);
      const episodes = episodesSpliced.map((url: string) => {
        const episodeId = url.split('/').pop() || '';
        return getEpisode(Number(episodeId));
      });

      const episodesData = await Promise.all(episodes);

      return {
        ...data,
        episodes: episodesData,
      };
    });
}

import Episode from '../models/Episode';

export function getEpisode(id: number): Promise<Episode> {
  return fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((res) => res.json())
    .then((data) => data);
}

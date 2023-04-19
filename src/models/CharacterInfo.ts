import Character from './Character';
import Episode from './Episode';

interface CharacterInfo extends Character {
  status: string;
  species: string;
  location: {
    name: string;
  };
  gender: string;
  origin: {
    name: string;
  };
  episodes: Episode[];
}

export default CharacterInfo;

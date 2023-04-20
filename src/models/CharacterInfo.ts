import Character from './Character';
import Episode from './Episodes';

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

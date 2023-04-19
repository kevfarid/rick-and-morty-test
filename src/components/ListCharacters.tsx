import CharacterComponent from './Character';
import Character from '../models/Character';
import { Box } from '@chakra-ui/react';

export default function ListCharacters({ items }: { items: Character[] }) {
  return (
    <Box
      display='grid'
      w='100%'
      gridTemplateColumns='repeat(auto-fill,minmax(200px,1fr))'
      gridGap='1rem'
    >
      {items.map((item) => (
        <CharacterComponent key={item.id} {...item} />
      ))}
    </Box>
  );
}

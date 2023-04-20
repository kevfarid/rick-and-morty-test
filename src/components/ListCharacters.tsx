import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import CharacterComponent from './Character';
import Character from '../models/Character';

export default function ListCharacters({ items }: { items: Character[] }) {
  const navigate = useNavigate();

  return (
    <Box
      display='grid'
      w='100%'
      gridTemplateColumns='repeat(auto-fill,minmax(200px,1fr))'
      gridGap='1rem'
      overflowY='auto'
    >
      {items.map((item, index) => (
        <CharacterComponent
          key={item.id + item.name + index}
          {...item}
          onClick={() => navigate(`/${item.id}`)}
        />
      ))}
    </Box>
  );
}

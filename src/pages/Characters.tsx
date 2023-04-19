import { Box, Button, Card, Image, Text } from '@chakra-ui/react';
import ListCharacters from '../components/ListCharacters';
import { useCallback, useEffect, useState } from 'react';
import { getCharacters } from '../services/characters';
import Character from '../models/Character';

export default function Characters() {
  const [items, setItems] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(page).then((data) => {
      setItems((prev) => prev.concat(data.results));
    });
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Box w='100%' display='flex' flexDir='column' gap={4} alignItems='center'>
      <ListCharacters items={items} />
      <Button
        colorScheme='gray'
        variant='outline'
        maxWidth={130}
        onClick={loadMore}
      >
        Load more
      </Button>
    </Box>
  );
}

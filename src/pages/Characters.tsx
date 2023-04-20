import { Box, Button, Input } from '@chakra-ui/react';
import ListCharacters from '../components/ListCharacters';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { getCharacters } from '../services/characters';
import Character from '../models/Character';
import Responses from '../models/Responses';
import Header from '../components/Header';

type InfoType = Pick<Responses['info'], 'count'>;

export default function Characters() {
  const [items, setItems] = useState<Character[]>([]);
  const [info, setInfo] = useState<InfoType>({
    count: 0,
  });

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState('');

  const fetchData = useCallback(
    (isSearch: boolean) => {
      setIsLoading(true);
      getCharacters(page, search)
        .then((data) => {
          setItems((prev) =>
            isSearch ? data.results : prev?.concat(data.results)
          );
          setInfo(data.info);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => setIsLoading(false));
    },
    [page, search]
  );

  useEffect(() => {
    fetchData(false);
  }, [page]);

  useEffect(() => {
    fetchData(true);
  }, [search]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setPage(1);
    }

    setSearch(e.target.value);
  }, []);

  return (
    <Box
      w='100%'
      maxW={1200}
      mx='auto'
      px={4}
      display='flex'
      flexDir='column'
      gap={8}
      alignItems='center'
      as='section'
    >
      <Header />
      <Input placeholder='Search' value={search} onChange={onChangeSearch} />
      {!isLoading && !error && items?.length > 0 && (
        <ListCharacters items={items} />
      )}
      {info?.count > items?.length && (
        <Button
          variant='outline'
          maxWidth={150}
          onClick={loadMore}
          isLoading={isLoading}
        >
          load more
        </Button>
      )}
    </Box>
  );
}

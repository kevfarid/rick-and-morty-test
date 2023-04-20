import {
  Text,
  Image,
  Stack,
  Box,
  Heading,
  Divider,
  ListItem,
  UnorderedList,
  Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams, Link as LinkDom } from 'react-router-dom';
import CharacterInfo from '../models/CharacterInfo';
import { getCharacterWithEpisodes } from '../services/characters';

export default function Character() {
  const { id } = useParams();

  const [character, setCharacter] = useState<CharacterInfo>(
    {} as CharacterInfo
  );

  useEffect(() => {
    getCharacterWithEpisodes(Number(id)).then((character) =>
      setCharacter(character)
    );
  }, [id]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={4}
      minWidth={{ base: '100%', sm: '100%' }}
    >
      <Stack direction='row' spacing={{ base: 4, sm: 8 }} alignItems='center'>
        <Image
          objectFit='cover'
          width={150}
          height={150}
          borderRadius={10}
          src={character.image}
          alt='Caffe Latte'
        />
        <Stack>
          <Heading size='md'>{character.name}</Heading>

          <UnorderedList px={4} py={2}>
            <ListItem>Status: {character.status} </ListItem>
            <ListItem>Species: {character.species}</ListItem>
            <ListItem>Gender: {character.gender}</ListItem>
            <ListItem>Origin: {character.origin?.name}</ListItem>
            <ListItem>Location: {character.location?.name}</ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
      {character.episodes?.length > 0 && (
        <>
          <Divider orientation='horizontal' />
          <Stack>
            <Heading size='md'>Episodes</Heading>
            <UnorderedList px={4} py={2}>
              {character.episodes?.map((episode) => (
                <ListItem key={episode.id}>
                  <Link as={LinkDom} to={`/episode/${episode.id}`}>
                    {episode.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Stack>
        </>
      )}
    </Box>
  );
}

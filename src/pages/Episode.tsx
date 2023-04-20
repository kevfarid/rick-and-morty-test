import {
  Stack,
  Box,
  Heading,
  Divider,
  ListItem,
  List,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Episode from '../models/Episodes';
import { getEpisodeWithCharacters } from '../services/episodes';
import ListCharacters from '../components/ListCharacters';

export default function Episode() {
  const { id } = useParams();

  const [episode, setEpisode] = useState<Episode>({} as Episode);

  useEffect(() => {
    getEpisodeWithCharacters(Number(id)).then((response) => {
      setEpisode(response);
    });
  }, [id]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={4}
      pt={7}
      px={4}
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      position='relative'
    >
      <Stack direction='row' spacing={{ base: 4, sm: 8 }}>
        <Stack>
          <Heading size='md'>{episode.name}</Heading>

          <List px={4} py={2}>
            <ListItem>Air Date: {episode.air_date} </ListItem>
            <ListItem>Episode: {episode.episode}</ListItem>
          </List>
        </Stack>
      </Stack>
      {episode.characters && episode.characters.length > 0 && (
        <>
          <Divider orientation='horizontal' />
          <Heading size='sm' textAlign='center'>
            Characters
          </Heading>
          <Box
            width='100%'
            maxWidth={500}
            alignItems='center'
            justifyContent='center'
            textAlign='center'
          >
            <ListCharacters items={episode.characters} />
          </Box>
        </>
      )}
    </Box>
  );
}

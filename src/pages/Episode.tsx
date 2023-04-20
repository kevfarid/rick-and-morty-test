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
  List,
  IconButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Episode from '../models/Episodes';
import { getEpisodeWithCharacters } from '../services/episodes';
import ListCharacters from '../components/ListCharacters';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function Episode() {
  const { id } = useParams();
  const navigate = useNavigate();

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
      minWidth={{ base: '100%', sm: '100%', lg: 600 }}
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      position='relative'
    >
      <IconButton
        aria-label='Back'
        icon={<ArrowBackIcon />}
        position='absolute'
        colorScheme='gray'
        top={-4}
        left={-4}
        onClick={() => navigate(-1)}
      />

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
            <ListCharacters items={episode.characters?.splice(0, 4)} />
          </Box>
        </>
      )}
    </Box>
  );
}

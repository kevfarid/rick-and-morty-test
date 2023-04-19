import { Box, Card, Heading, Image, Text } from '@chakra-ui/react';
import Character from '../models/Character';

export default function CharacterComponent({ id, name, image }: Character) {
  return (
    <Card
      maxW='sm'
      id={id}
      maxWidth={200}
      borderRadius={10}
      maxHeight={250}
      as='article'
      _hover={{
        cursor: 'pointer',
        filter: 'brightness(0.8)',
      }}
    >
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        borderTopRadius={10}
      />
      <Text
        fontWeight='bold'
        p={4}
        textAlign='center'
        as='h2'
        whiteSpace='nowrap'
        overflow='hidden'
        textOverflow='ellipsis'
      >
        {name}
      </Text>
    </Card>
  );
}

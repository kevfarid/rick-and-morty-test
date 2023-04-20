import { Flex, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Flex
      as='header'
      w='100%'
      h='85px'
      bg='gray.800'
      px='8'
      py='4'
      position='sticky'
      top={0}
      zIndex={99}
      align='center'
      justify='center'
    >
      <Link to='/' onClick={goTop}>
        <Image src='/logo.png' alt='Rick and Morty' width={200} />
      </Link>
    </Flex>
  );
}

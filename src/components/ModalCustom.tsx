import { Box, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';

export default function ModalCustom({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(window.scrollY);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Box
      position='absolute'
      top={top}
      backgroundColor='blackAlpha.600'
      width='100%'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      zIndex={100}
    >
      <Box backgroundColor='gray.700' p={10} position='relative'>
        <IconButton
          aria-label='Close'
          icon={<CloseIcon />}
          colorScheme='gray'
          onClick={() => navigate('/')}
          position='absolute'
          top={3}
          right={3}
        />
        {children}
      </Box>
    </Box>
  );
}

import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Characters from './pages/Characters';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import Character from './pages/Character';
import { CloseIcon } from '@chakra-ui/icons';

const Modal = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <Box
      position='absolute'
      top={0}
      backgroundColor='blackAlpha.600'
      width='100%'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Box backgroundColor='gray.700' p={10} position='relative'>
        <CloseIcon
          onClick={() => navigate('/')}
          position='absolute'
          top={3}
          right={3}
          _hover={{
            cursor: 'pointer',
            color: 'gray.600',
          }}
        />
        {children}
      </Box>
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Characters />
        <Outlet />
      </>
    ),
    children: [
      {
        path: ':id',
        element: (
          <Modal>
            <Character />
          </Modal>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

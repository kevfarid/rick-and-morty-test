import Characters from './pages/Characters';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Character from './pages/Character';
import ModalCustom from './components/ModalCustom';
import Episode from './pages/Episode';

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
          <ModalCustom>
            <Character />
          </ModalCustom>
        ),
      },
      {
        path: 'episode/:id',
        element: (
          <ModalCustom>
            <Episode />
          </ModalCustom>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

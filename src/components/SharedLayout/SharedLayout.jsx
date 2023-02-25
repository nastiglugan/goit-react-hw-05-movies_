import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navigation, NavigationLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <NavigationLink to="/" end>
          Home
        </NavigationLink>
        <NavigationLink to="movies">Movies</NavigationLink>
      </Navigation>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

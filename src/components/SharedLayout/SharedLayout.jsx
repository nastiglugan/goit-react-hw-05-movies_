import { Outlet } from 'react-router-dom';
import { Container, Navigation, NavigationLink } from './SharedLayout.styled';
// import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <NavigationLink to="/" end>
          Home
        </NavigationLink>
        <NavigationLink to="movies">Movies</NavigationLink>
      </Navigation>
      <Outlet />
    </Container>
  );
};

import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Navigation = styled.nav`
  padding: 20px 0;
  border-bottom: 1px gray solid;
  margin-bottom: 30px;
`;
export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-right: 15px;
  font-size: 18px;
  text-decoration: none;

  &.active {
    background-color: green;
    color: white;
    padding: 12px;
    border-radius: 7px;
  }
  :last-child {
    margin-right: 0;
  }
`;

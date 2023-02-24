import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieTrendingCover = styled.div``;

export const MovieTrendingItems = styled.li`
  width: 100%;
  padding-bottom: 10px;
  text-decoration: none;
  list-style: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: transform 250ms cubic - bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MovieTrendingImg = styled.img``;

export const MovieTrendingLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  text-align: center;
`;

export const MovieTrendingTitle = styled.div`
  width: 300px;
`;

const setBgColor = props => {
  if (props.vote > 8) {
    return '#118f2c';
  } else if (props.vote < 5) {
    return '#8f1e11';
  } else {
    return '#ffee00';
  }
};
export const MovieTrendingVote = styled.p`
  color: black;
  font-size: 18px;
  line-height: 10px;
  padding: 15px 10px;
  width: 70px;
  display: block;
  margin: 0 auto;

  background-color: ${setBgColor};
  border-radius: 12px;
`;

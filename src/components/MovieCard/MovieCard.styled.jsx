import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieCardWrap = styled.div`
  display: flex;
  gap: 25px;
  font-size: 26px;
  margin-bottom: 50px;
`;

export const MovieCardTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  color: black;
`;

export const MovieCardVote = styled.p``;
export const MovieCardOverview = styled.p``;
export const MovieCardLinkWrap = styled.div`
  margin-bottom: 50px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const MovieCardLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: black;
  text-transform: uppercase;
`;

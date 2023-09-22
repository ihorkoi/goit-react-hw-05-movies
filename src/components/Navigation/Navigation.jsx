import { NavLink, Outlet } from 'react-router-dom';
import { NavList, Nav } from './Navigation.styled';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;

  &.active {
    color: white;
    background: orange;
  }
`;

export const Navigation = () => {
  return (
    <>
      <header>
        <Nav>
          <NavList>
            <li>
              <StyledLink to={'/'}>Home</StyledLink>
            </li>
            <li>
              <StyledLink to={'/movies'}>Movies</StyledLink>
            </li>
          </NavList>
        </Nav>
      </header>
      <Outlet />
    </>
  );
};

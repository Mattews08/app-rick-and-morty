import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
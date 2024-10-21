import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
`;

export const Logo = styled.h1`
  font-size: 20px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
export const BackButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-size: 18px;
  cursor: pointer;

  align-items: center;

  &:hover {
    color: #2c2c2c;
  }
`;

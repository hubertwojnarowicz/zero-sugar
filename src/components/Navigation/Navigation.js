import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <Nav>
        <NavLinks to="/">3D Renders</NavLinks>
        <NavLinks to="/">Architecture</NavLinks>
        <NavLinks to="/">Film</NavLinks>
        <NavLinks to="/">Business & Work</NavLinks>
        <NavLinks to="/">Food & Drink</NavLinks>
      </Nav>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styledComponents.div`
  display: flex;
  align-items: center;;
  justify-content: center;
  background-color: ${({ theme }) => theme.bodyColor};
  box-shadow: 0 4px 2px -2px rgba(99, 99, 99, 0.2);
`;

const Nav = styledComponents.nav`
  display: flex;
  gap: 24px;
  margin-bottom: 8px
`;

const NavLinks = styledComponents(Link)`
  text-decoration: none;
  color: black;
  color: #5773ff;
  font-size: 1.125rem;
  position: relative;
  

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -8px;
    left: 0;
    background-color: ${({ theme }) => theme.hover};
    transform-origin: bottom;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom 
  }
`;

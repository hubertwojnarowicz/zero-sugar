import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import * as ROUTES from '../../routes/routes';

export default function Logo() {
  return (
    <LogoLink to={ROUTES.HOME}>
      <LogoContent>Zero</LogoContent>
      <LogoExtra>0</LogoExtra>
      <LogoContent>Sugar</LogoContent>
      <title>Unsplash home</title>
    </LogoLink>
  );
}

const LogoLink = styledComponents(Link)`
    text-decoration: none;
    color: #5773ff;
    font-weight: 600;
    font-size: 1.4rem;
    display: flex;
    
`;

const LogoContent = styledComponents.span``;

const LogoExtra = styledComponents.span`
    font-family: 'Grape Nuts', cursive;
    color: ${({ theme }) => theme.textColor};
    display: inline-block;
    transform: rotate(-60deg) translate(8px, -6px);
    font-size: 1.35rem;
    
`;

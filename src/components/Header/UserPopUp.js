import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes/routes';

export default function UserPopUp({ isOpen, setIsOpen }) {
  if (isOpen === false) return null;
  return (
    <UserPopUpWrapper>
      <UserPopUpTriangle />
      <ProfileLink to={ROUTES.HOME}>View Profile</ProfileLink>
    </UserPopUpWrapper>
  );
}

const UserPopUpWrapper = styledComponents.div`
  position: absolute;
  top: 125%;
  right: 5%;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: #000000;
`;

const UserPopUpTriangle = styledComponents.div`
  width: 0; 
  height: 0; 
  position: absolute;
  right: 6%;
  top: -16%;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid black;
`;

const ProfileLink = styledComponents(Link)`
  white-space: nowrap;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #767676;
    transition:
  }
`;

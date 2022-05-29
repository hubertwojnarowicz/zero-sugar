import React, { useState, useRef, useEffect } from 'react';
import SearchInput from './SearchInput';
import styledComponents from 'styled-components/macro';
import UserPopUp from './UserPopUp';
import ThemeSwitcher from '../ThemeSwitcher';
import Logo from '../Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const userRef = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && !userRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleUserPopUp = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <MainHeader>
      <Logo />
      <SearchInput />
      <ThemeAndUserWrapper>
        <ThemeSwitcher />
        <UserButton onClick={handleUserPopUp} ref={userRef}>
          <UserIcon src="/images/extra-large.jpg" alt="Avatar of user" />
        </UserButton>
        <UserPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
      </ThemeAndUserWrapper>
    </MainHeader>
  );
}

// const HeaderWrapper = styledComponents.div`
//   box-shadow: 0 4px 2px -2px rgba(99, 99, 99, 0.2);
//   position: sticky;
//   top: 0;
//   isolation: 'isolate';
// `;

const MainHeader = styledComponents.header`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 32px;
  background-color: ${({ theme }) => theme.bodyColor};
  
`;

const ThemeAndUserWrapper = styledComponents.div`
  display: flex;
  gap: 16px;
  position: relative;
`;

const UserButton = styledComponents.button`
  border: none; 
  outline: none;
  cursor:pointer;
  background-color: inherit;
  display: flex;
  align-items: center;
  
`;

const UserIcon = styledComponents.img`
  border-radius: 50%;
`;

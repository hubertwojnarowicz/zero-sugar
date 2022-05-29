import React, { useState, useEffect, useRef } from 'react';
import styledComponents from 'styled-components/macro';
import { Search, X } from 'react-feather';
import SearchPopUp from './SearchPopUp';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const [visiblity, setVisibilty] = useState('none');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const formRef = useRef();

  useEffect(() => {
    const openSearchPopUp = (e) => {
      if (formRef.current.contains(e.target)) {
        setVisibilty('flex');
      }
    };

    document.addEventListener('click', openSearchPopUp);
    return () => {
      document.removeEventListener('click', openSearchPopUp);
    };
  }, [visiblity, setVisibilty]);

  useEffect(() => {
    if (error === '') return;
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (query !== '') {
      navigate(`/photos/${query}`);
      setVisibilty('none');
    } else {
      setVisibilty('flex');
      setError('Please fill this field');
    }
  };

  return (
    <SearchForm onSubmit={handleSearchSubmit} ref={formRef}>
      <SearchSubmitButton>
        <Search size="22" style={{ marginLeft: '8px' }} />
      </SearchSubmitButton>
      <Input
        onChange={({ target }) => setQuery(target.value)}
        value={query}
        type="text"
        placeholder="Search free high-resolution photos"
      />
      {query !== '' ? (
        <DeleteSearchValueButton onClick={() => setQuery('')}>
          <X size="22" style={{ marginRight: '8px' }} />
        </DeleteSearchValueButton>
      ) : null}
      <SearchPopUp visiblity={visiblity} setVisibilty={setVisibilty} />
      {error ? (
        <ErrorMessage>
          <Arrow />
          {error}
        </ErrorMessage>
      ) : null}
    </SearchForm>
  );
}

const SearchForm = styledComponents.form`
  min-width: 400px;
  width: 100%;
  height: 40px;
  position: relative;

`;

const Input = styledComponents.input`
  position: absolute;
  border-radius: 24px;
  instet: 0;
  border: none;
  padding: 0 40px;
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
  font-size: 0.95rem;

  &:focus {
    background-color: #ffffff;
    outline: none;
    border: 1px solid #d1d1d1;
  }

  &::placeholder {
    font-size: 0.95rem;
  }
`;

const SearchSubmitButton = styledComponents.button`
  position: absolute;
  background-color: transparent;
  z-index: 10;
  border: none;
  outline: none;
  left: 0;
  top: 50%;
  transform: translateY(-45%);
  cursor: pointer;
  color: #767676;
  &:hover {
    color: #111111;
    transition: 300ms
  }
   
`;

const DeleteSearchValueButton = styledComponents.button`
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  right: 0;
  top: 50%;
  color: #767676;
  transform: translateY(-45%);
  cursor: pointer;

  &:hover {
    color: #111111;
    transition: 300ms
  }
`;

const ErrorMessage = styledComponents.div`
  position: absolute;
  background-color: #ffffff;
  color: #000000;
  top: 125%;
  border-radius: 4px;
  border: 1px solid #000000;
  padding: 4px 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  right: 50%;
  transform: translateX(50%);
  z-index: 1000;
`;

const Arrow = styledComponents.div`
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: -11px;
  border-bottom: 10px solid #ffffff;
`;

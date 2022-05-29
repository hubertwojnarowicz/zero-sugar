import React, { useEffect, useRef } from 'react';
import styledComponents from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'react-feather';
import * as ROUTES from '../../routes/routes';
import { COLORS } from '../../Theme';

export default function SearchPopUp({ visiblity, setVisibilty }) {
  const popUpRef = useRef();

  useEffect(() => {
    const parent = popUpRef.current.parentNode;
    const formChilds = Array.from(parent.childNodes);
    const checkIfClickedOutside = (e) => {
      if (!popUpRef.current.contains(e.target) && e.target !== formChilds[1]) {
        setVisibilty('none');
      }
    };

    document.addEventListener('click', checkIfClickedOutside);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [visiblity, setVisibilty]);

  return (
    <SearchPopUpWrapper ref={popUpRef} visiblity={visiblity}>
      <TrendingSearchesWrapper>
        <Title>Trending Searches</Title>
        <List>
          <Item>
            <SearchLink to="/photos/phone">
              <TrendingUp />
              <Span>phone</Span>
            </SearchLink>
          </Item>
          <Item>
            <SearchLink to="/photos/growing">
              <TrendingUp />
              <Span>growing</Span>
            </SearchLink>
          </Item>
        </List>
      </TrendingSearchesWrapper>
      <TrendingTopicsWrapper>
        <Title>Trending Topics</Title>
        <List>
          <Item>
            <SearchLink to={ROUTES.WALLPAPERS}>
              <TrendingTopicsImg
                src="https://images.unsplash.com/photo-1652386161486-d915b763020e?ixlib=rb-1.2.1&auto=format&fit=crop&w=38&h=38&q=60"
                alt="Lion"
              />

              <Span>Wallpapers</Span>
            </SearchLink>
          </Item>
        </List>
      </TrendingTopicsWrapper>
      <TrendingCollectionsWrapper>
        <Title>Trending Collections</Title>
        <List>
          <Item>
            <SearchLink to={ROUTES.COLLECTIONS}>
              <Span>Medium frames in interior</Span>
            </SearchLink>
          </Item>
        </List>
      </TrendingCollectionsWrapper>
    </SearchPopUpWrapper>
  );
}

const SearchPopUpWrapper = styledComponents.div`
    position: absolute;
    display: ${(p) => p.visiblity};
    width: 100%;
    top: 120%;
    background-color: #ffffff;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex-direction: column;
    gap: 16px;
    padding: 12px 16px 16px 16px;
    z-index: 100;
   
`;

const TrendingSearchesWrapper = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap:8px;
  
`;

const Title = styledComponents.span`
  color: ${COLORS.darkColors.bodyColor};
  font-weight: 500;
  font-size: 1.12rem;
`;

const List = styledComponents.menu`
  display: flex;
  gap: 12px
`;

const Item = styledComponents.li`
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  list-style: none
    
`;

const SearchLink = styledComponents(Link)`
  color: #767676;
  text-decoration: none;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 40px;

  &:hover {
    background-color: #eeeeee
  }
`;

const Span = styledComponents.span``;

const TrendingTopicsWrapper = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap:8px
`;

const TrendingTopicsImg = styledComponents.img`
  margin-left: -16px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const TrendingCollectionsWrapper = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap:8px
`;

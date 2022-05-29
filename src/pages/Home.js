import React, { useRef } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import MainSection from '../components/MainSection';
import styledComponents from 'styled-components';

export default function Home() {
  const mainRef = useRef();
  return (
    <Wrapper>
      <StickyHeaderAndNav>
        <Header />
        <Navigation />
      </StickyHeaderAndNav>
      <AboutSection refScroll={mainRef} />
      <MainSection refProp={mainRef} />
    </Wrapper>
  );
}

const Wrapper = styledComponents.div`
  overflow: auto;
  height: 100%;
  scroll-behavior: smooth;

`;

const StickyHeaderAndNav = styledComponents.div`
  position: sticky;
  top: 0;
  isolation: isolate;
  z-index: 2
`;

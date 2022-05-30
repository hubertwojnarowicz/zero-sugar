import React, { useState } from 'react';
import styledComponents from 'styled-components';
import PhotoButtons from './PhotoButtons';
import { Link } from 'react-router-dom';
import PhotographerInfo from './PhotographerInfo';
export default function FirstRow({ data }) {
  const [isVisible, setIsVisible] = useState(-1);
  const filteredData = data.filter((photo, index) => index < 10);

  // const showIcons = (e) => {
  //   // const nextElement = e.target.nextElementSibling;
  //   // const userInfo = nextElement.nextElementSibling;

  //   filteredData.filter((photo) => {
  //     if (photo.urls.raw === e.target.src) {
  //       e.target.nextElementSibling.style.visibility = 'visible';
  //     }
  //   });
  // };

  // const hideIcons = (e) => {
  //   if (e.target.src !== imgRef.current) {
  //     e.target.nextElementSibling.style.visibility = 'hidden';
  //   }
  // };

  const showIcons = (i) => {
    setIsVisible(i);
  };

  const hideIcons = () => {
    setIsVisible(-1);
  };

  return (
    <GridFirstRow>
      {filteredData.map((photo, i) => {
        const { user } = photo;
        return (
          <PhotoLink
            key={photo.id}
            to="/"
            onMouseEnter={() => showIcons(i)}
            onMouseLeave={hideIcons}
          >
            <PhotoWrapper>
              <Photo src={photo.urls.raw} />
              <PhotoButtons i={i} isVisible={isVisible} id={photo.id} />
              <PhotographerInfo user={user} isVisible={isVisible} i={i} />
            </PhotoWrapper>
          </PhotoLink>
        );
      })}
    </GridFirstRow>
  );
}

const GridFirstRow = styledComponents.div`
  display: grid;
  grid-template-columns: minmax(0,1fr);
  gap: 16px;
  align-self: flex-start;

`;

const PhotoLink = styledComponents(Link)`
  position: relative;
`;

const PhotoWrapper = styledComponents.figure`
`;

const Photo = styledComponents.img`
  width: 100%;
  height: 100%;
`;

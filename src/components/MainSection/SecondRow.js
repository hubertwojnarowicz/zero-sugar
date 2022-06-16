import { useState } from 'react';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import PhotoButtons from './PhotoButtons';
import PhotographerInfo from './PhotographerInfo';

export default function SecondRow({ data }) {
  const [isVisible, setIsVisible] = useState(-1);

  const filteredData = data.filter((photo, index) => index > 9 && index <= 19);

  const showIcons = (i) => {
    setIsVisible(i);
  };

  const hideIcons = () => {
    setIsVisible(-1);
  };
  return (
    <GridSecondRow>
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
              <PhotoButtons isVisible={isVisible} i={i} id={photo.id} />
              <PhotographerInfo user={user} isVisible={isVisible} i={i} />
            </PhotoWrapper>
          </PhotoLink>
        );
      })}
    </GridSecondRow>
  );
}

const GridSecondRow = styledComponents.div`
    display: grid;
    grid-template-columns: minmax(0,1fr);
    gap: 16px;
    align-self: flex-start;
`;

const PhotoLink = styledComponents(Link)`
  position: relative;
  cursor: zoom-in;
`;

const PhotoWrapper = styledComponents.figure`
    width: 100%;
    height: 100%:
`;

const Photo = styledComponents.img`
    width: 100%;
    height: 100%
`;

import { useState } from 'react';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import PhotoButtons from './PhotoButtons';
import PhotographerInfo from './PhotographerInfo';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ThirdRow({ data }) {
  const [isVisible, setIsVisible] = useState(-1);

  const filteredData = data.filter((photo, index) => index > 19);

  const showIcons = (i) => {
    setIsVisible(i);
  };

  const hideIcons = () => {
    setIsVisible(-1);
  };
  return (
    <GridThirdRow>
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
              <PhotographerInfo user={user} i={i} isVisible={isVisible} />
            </PhotoWrapper>
          </PhotoLink>
        );
      })}
    </GridThirdRow>
  );
}

const GridThirdRow = styledComponents.div`
    display: grid;
    grid-template-columns: minmax(0,1fr);
    align-self: flex-start;
    gap: 16px;
`;

const PhotoLink = styledComponents(Link)`
  position: relative;
`;

const PhotoWrapper = styledComponents.figure``;

const Photo = styledComponents.img`
    width: 100%;
    height: 100%
`;

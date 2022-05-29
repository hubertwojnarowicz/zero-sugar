import styledComponents from 'styled-components';
import { Heart, Plus } from 'react-feather';
export default function PhotoButtons({ i, isVisible }) {
  return (
    <PhotoButtonWrapper style={{ display: isVisible === i ? 'flex' : 'none' }}>
      <LikePhotoButton>
        <HeartIcon size="18" />
      </LikePhotoButton>
      <AddToCollectionButton>
        <PlusIcon size="18" />
      </AddToCollectionButton>
    </PhotoButtonWrapper>
  );
}

const PhotoButtonWrapper = styledComponents.div`
    position: absolute;
    top: 15px;
    right: 15px;
    gap: 8px;
`;

const HeartIcon = styledComponents(Heart)`
    fill: #767676;
    color: #767676
`;

const PlusIcon = styledComponents(Plus)`
    fill: #767676;
    color: #767676
`;

const LikePhotoButton = styledComponents.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding: 8px 11px;
    background-color: #ffffff;
    cursor: pointer;

    &:hover ${HeartIcon} {
      color: #000000;
      fill: #000000;
      transition: 300ms
    }
`;

const AddToCollectionButton = styledComponents.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding: 8px 11px;
    background-color: #ffffff;
    cursor: pointer;

    &:hover ${PlusIcon} {
      color: #000000;
      fill: #000000;
      transition: 300ms
    }

   
`;

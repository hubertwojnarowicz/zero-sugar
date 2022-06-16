import { useState, useEffect, useContext, useRef } from 'react';
import styledComponents from 'styled-components';
import { Heart, Plus } from 'react-feather';
import axios from 'axios';
import TokenContext from '../../context/token';

export default function PhotoButtons({ i, isVisible, id }) {
  const token = useContext(TokenContext);
  const [likedPhotos, setLikedPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonBgColor, setButtonBgColor] = useState('#767676');
  const svgRef = useRef();

  useEffect(() => {
    axios
      .get(
        'https://api.unsplash.com/users/hjubsoni/likes?client_id=27jmONQE-v5QZF90WU-qobjko9BMTNS-3xR3VjEkm10'
      )
      .then((res) => {
        setLikedPhotos(res.data);
        setLoading(false);
      });
  }, []);

  if (loading === false) {
    likedPhotos.filter((photo) => {
      if (photo.id === id) svgRef.current.style.fill = 'red';
    });
  }

  // todo: send post request with liked photo
  // todo: send post request with created collection
  const likePhoto = () => {
    axios(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setButtonBgColor('red');
  };

  return (
    <PhotoButtonWrapper style={{ display: isVisible === i ? 'flex' : 'none' }}>
      <LikePhotoButton onClick={likePhoto}>
        <HeartIcon size="18" buttonbgcolor={buttonBgColor} ref={svgRef} />
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
    fill: ${(p) => p.buttonbgcolor};
    color: ${(p) => p.buttonbgcolor}
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

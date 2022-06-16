import { useState, useEffect } from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { Link, useParams } from 'react-router-dom';
import styledComponents from 'styled-components/macro';
import axios from 'axios';
import { X, Heart, Plus } from 'react-feather';

export default function PhotoDialog({ isOpen, onDismiss }) {
  const { id } = useParams();
  const [photoStats, setPhotoStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === undefined) return;
    axios
      .get(
        `https://api.unsplash.com/photos/${id}/?client_id=27jmONQE-v5QZF90WU-qobjko9BMTNS-3xR3VjEkm10`
      )
      .then((res) => {
        setPhotoStats(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading === false) {
    const { user, downloads, views, urls } = photoStats;
    console.log(urls);
    return (
      <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Content aria-label="Modal">
          <ContentHeader>
            <AuthorWrapper>
              <AuthorImageWrapper>
                <AuthorImage src={user.profile_image.small} alt="User avatar" />
              </AuthorImageWrapper>
              <AuthorNameWrapper>
                <AuthorName>
                  {user.first_name} {user.last_name}
                </AuthorName>
                <AuthorLink to="/">@{user.username}</AuthorLink>
              </AuthorNameWrapper>
            </AuthorWrapper>
            <ButtonsWrapper>
              <LikeButton>
                <Heart />
              </LikeButton>
              <CollectionButton>
                <Plus />
              </CollectionButton>
            </ButtonsWrapper>
          </ContentHeader>
          <CenterImageWrapper>
            <ImageWrapper>
              <Image src={urls.regular} />
            </ImageWrapper>
          </CenterImageWrapper>
        </Content>
      </Overlay>
    );
  }
}

const Overlay = styledComponents(DialogOverlay)`
  background-color: hsl(220deg 5% 40% / 0.5);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styledComponents(DialogContent)`
  background-color: #ffffff;
  width: 85%;
  height: 95%;
  border-radius: 16px;
`;

const ContentHeader = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

const AuthorWrapper = styledComponents.div`
  display: flex;
  gap: 10px;
  
`;

const AuthorNameWrapper = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -4px;
`;

const AuthorImageWrapper = styledComponents.div`
  width: 36px;

`;

const AuthorImage = styledComponents.img`
 border-radius: 50%;
 width: 100%;

`;

const AuthorName = styledComponents.span`
  color: #000000;
  font-size: 0.85rem;
`;

const AuthorLink = styledComponents(Link)`
  color: #767676;
  font-size: 0.85rem;
  
  text-decoration: none;

  &:hover {
    color: #000000;
    transition: 300ms;
  }

`;

const ButtonsWrapper = styledComponents.div`
  display: flex;
  gap: 12px;
`;

const LikeButton = styledComponents.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const CollectionButton = styledComponents.button``;

const CenterImageWrapper = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
 
`;

const ImageWrapper = styledComponents.div`
  max-width: 80%;
  height: 100%;
  
`;

const Image = styledComponents.img`
  width: 100%;
  height: 100%;
 
  
`;

const ViewsAndDownloadsWrapper = styledComponents.div``;

const ViewsWrapper = styledComponents.div``;

const DownloadsWrapper = styledComponents.div``;

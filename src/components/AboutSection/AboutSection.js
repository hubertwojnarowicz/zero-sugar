import { useState, useEffect } from 'react';
import axios from 'axios';
import styledComponents from 'styled-components/macro';
import 'react-loading-skeleton/dist/skeleton.css';
import ImagesSkeleton from './ImagesSkeleton';
import { ArrowDown } from 'react-feather';

export default function AboutSection({ refScroll }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // add per page parameter to limit data array to 4
    axios
      .get('https://api.unsplash.com/photos?per_page=4', {
        headers: {
          Authorization:
            'Client-ID 27jmONQE-v5QZF90WU-qobjko9BMTNS-3xR3VjEkm10',
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  const scrollToMain = () => refScroll.current.scrollIntoView();
  return (
    <Section>
      <DescriptionWrapper>
        <Title>
          Rapidly share and download over 3 milion free high-resolution images.
        </Title>
        <Description>
          Zero sugar is internet’s source of freely usable{' '}
          <DescriptionExtras>images</DescriptionExtras>, which allows{' '}
          <DescriptionExtras>photographers</DescriptionExtras> to upload photos
          to its website, which are then curated by a team of photo editors.
        </Description>
      </DescriptionWrapper>
      <ImagesWrapper>
        <ImagesGridWrapper>
          {loading && <ImagesSkeleton images={4} />}
          {data.map((img) => {
            return (
              <PhotoWrapper key={img.id}>
                <Photo src={img.urls.regular} />
              </PhotoWrapper>
            );
          })}
        </ImagesGridWrapper>
      </ImagesWrapper>
      <ButtonWrapper>
        <BrowseButton onClick={scrollToMain}>
          <BrowseButtonText>Browse more photos.</BrowseButtonText>
        </BrowseButton>
        <Arrow />
      </ButtonWrapper>
    </Section>
  );
}

const Section = styledComponents.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

const DescriptionWrapper = styledComponents.div`
    display: flex;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;
    justify-content: center;
    max-width: 75%; 
    gap: 16px;
`;

const Title = styledComponents.h1`
    font-weight: 900;
    max-width: 30ch;
    min-width: 25ch;
    font-size: 3rem;
    text-align: center;
    letter-spacing: 0.3px;
    color: ${({ theme }) => theme.hover}
`;

const Description = styledComponents.p`
     max-width: 70ch;
     text-align: center;
     color: ${({ theme }) => theme.hover};
     font-size: 1.05rem;
     letter-spacing: 1.5px;
`;

const DescriptionExtras = styledComponents.span`
    color: #5773ff;
    font-weight: 600;
`;

const ButtonWrapper = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
`;

const BrowseButtonText = styledComponents.span`
  display: block;
  padding: 12px 32px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: #5773ff;
  color: white;
  transform: translateY(-4px);
  transition: transform 500ms;

`;

const BrowseButton = styledComponents.button`
  background:${({ theme }) => theme.threeD};
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;

  &:hover ${BrowseButtonText} {
    transform: translateY(-6px);
    transition: transform 250ms;
  }

  &:active ${BrowseButtonText} {
    transform: translateY(-2px);
    transition: transform 50ms;
  }
`;

const Arrow = styledComponents(ArrowDown)`
  margin-top: 2px;
`;

const ImagesWrapper = styledComponents.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ImagesGridWrapper = styledComponents.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 325px));
  gap: 16px;
 

`;

const PhotoWrapper = styledComponents.figure`
   width: 100%;
   height: 300px;
   
`;

const Photo = styledComponents.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;


  
  
`;

//Rapidly share and download over 3 milion free high-resolution images.

//Zero sugar is internet’s source of freely usable images, which allows photographers to upload photos to its website, which are then curated by a team of photo editors.

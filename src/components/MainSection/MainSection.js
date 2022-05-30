import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styledComponents from 'styled-components';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
import 'react-loading-skeleton/dist/skeleton.css';
import GridSkeleton from './GridSkeleton';

export default function MainSection({ refProp }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos?per_page=30', {
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
  // todo: add skeleton loading.
  return (
    <MainSectionWrapper ref={refProp}>
      <GridWrapper>
        {loading && <GridSkeleton images={10} />}
        {loading && <GridSkeleton images={10} />}
        {loading && <GridSkeleton images={10} />}
        <FirstRow data={data} />
        <SecondRow data={data} />
        <ThirdRow data={data} />
      </GridWrapper>
    </MainSectionWrapper>
  );
}

const MainSectionWrapper = styledComponents.main`
    display: flex;
    justify-content: center;
`;

const GridWrapper = styledComponents.div`
    display: grid;
    margin: 32px;
    grid-template-columns: repeat(3, minmax(150px, 500px));
    gap: 16px;
`;

// const PhotoWrapper = styledComponents.figure`
//     width: 100%;
//     height: 100%;
// `;

// const Photo = styledComponents.img`
//     width: 100%;
//     height: 100%;
//     object-fit: contain;

// `;

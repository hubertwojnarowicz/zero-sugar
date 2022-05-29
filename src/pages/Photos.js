import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styledComponents from 'styled-components';
import Header from '../components/Header';
import NoResults from '../components/NoResults';

export default function Photos() {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  useEffect(() => {
    setStatus('loading');
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          name
        )}`,
        {
          headers: {
            Authorization:
              'Client-ID 27jmONQE-v5QZF90WU-qobjko9BMTNS-3xR3VjEkm10',
          },
        }
      )
      .then((res) => {
        setData(res.data.results);
        setStatus('success');
      });
  }, [name]);

  if (isSuccess && data.length === 0) {
    return (
      <>
        <Header />
        <NoResults />
      </>
    );
  }
  if (isSuccess) {
    return (
      <Photo>
        <Header />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        mattis bibendum purus, ut congue ante sodales et. Praesent pellentesque
        venenatis lacus consequat vulputate. Phasellus lacinia libero nec mattis
        tempus. Etiam pellentesque tortor luctus mi consequat, in dictum quam
        pellentesque. Nunc rutrum suscipit massa sit amet aliquam. Curabitur
        quam leo, gravida eu pharetra eget, lobortis vel dolor. Ut sagittis,
        ipsum nec consequat vestibulum, sem dui feugiat purus, ac vestibulum
        justo nisl at mauris. Vivamus velit turpis, egestas vitae purus eu,
        tempor cursus sem. Morbi at nisl tristique, ultricies dui id, finibus
        leo. Cras fringilla imperdiet magna, id scelerisque nisl scelerisque
        eget. Vivamus vel ligula venenatis velit eleifend sollicitudin nec non
        risus. Mauris varius odio mauris, ac auctor urna egestas sit amet.
        Praesent eget nunc id turpis rutrum tincidunt. Etiam aliquam placerat
        placerat. Aliquam erat volutpat. In id auctor neque, ut pharetra lectus.
        Fusce et feugiat elit, ut rhoncus ante. Donec non ipsum ipsum. Curabitur
        pellentesque ipsum purus, quis iaculis orci cursus facilisis. Aliquam
        erat volutpat. Nulla vulputate faucibus elit ut fermentum. Suspendisse
        arcu magna, fermentum ut accumsan quis, hendrerit vitae massa. In at
        mauris commodo, convallis elit sit amet, tempus dui. Fusce condimentum
        suscipit purus, sit amet faucibus orci. Morbi ut feugiat metus. Nam
        pharetra elit et eleifend faucibus. Praesent eget accumsan lacus,
        pretium vehicula dolor. Etiam tincidunt porttitor neque sed sodales.
        Morbi orci mauris, tempus a ligula sit amet, elementum tempus nibh.
        Phasellus eu neque elit. Mauris nisl sapien, pharetra vel efficitur
        quis, egestas eget nisl. Pellentesque et enim et velit accumsan
        suscipit. Donec efficitur nisi eu tincidunt vestibulum. Donec malesuada
        enim id arcu commodo viverra. Proin in fringilla nibh. Proin dolor nunc,
        ultrices ac auctor in, auctor efficitur tellus. Cras viverra orci
        mauris, in placerat justo fermentum eu. Etiam placerat massa vel
        hendrerit mattis. Vivamus tempus sit amet massa id placerat. In erat
        neque, commodo ac nisi sed, auctor bibendum nisi. Vivamus nec feugiat
        sem, a congue felis. Mauris sapien lacus, fermentum et tellus eget,
        fringilla vulputate libero. Sed a magna ac arcu hendrerit hendrerit nec
        sit amet neque. Curabitur nec lobortis orci. Fusce lacinia a sem a
        pretium. Suspendisse scelerisque vestibulum odio, nec maximus dui
        ullamcorper et. Nam commodo, enim vel vehicula molestie, urna lorem
        viverra odio, nec vulputate tellus lectus ut dui. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce
        id blandit risus, eu tempus orci. Suspendisse at tortor ultrices,
        porttitor magna in, dictum ligula. Ut ut nisi mi. Nam sit amet suscipit
        nisl. Cras vel nunc vel urna imperdiet fringilla.
      </Photo>
    );
  }
}

const Photo = styledComponents.div`
  height: 200%
`;

// const photosIds = {
//   firstId: name === 'phone' ? '8gWEAAXJjtI' : 'sEApBUS4fIk',
//   secondId: name === 'phone' ? 'xsGxhtAsfSA' : 'VMKBFR6r_jg',
//   thirdId: name === 'phone' ? 'sweUF7FcyP4' : '8yaDRP46do0',
//   fourthId: name === 'phone' ? '-haAxbjiHds' : 'Rfflri94rs8',
//   fifthId: name === 'phone' ? 'JYGnB9gTCls' : 'x8MZ2MoEKLE',
//   sixthId: name === 'phone' ? 'BjhUu6BpUZA' : 'AsRAyHIkOHk',
// };

// const { firstId, secondId, thirdId, fourthId, fifthId, sixthId } = photosIds;
// I cant send one request with multiple ids :(
// useEffect(() => {
//   setStatus('loading');
//   (async function () {
//     const firstPhoto = await axios
//       .get(
//         `https://api.unsplash.com/photos/${firstId}/?client_id=${clientId}`
//       )
//       .then((res) => {
//         return res.data;
//       });
//     const secondPhoto = await axios
//       .get(
//         `https://api.unsplash.com/photos/${secondId}/?client_id=${clientId}`
//       )
//       .then((res) => {
//         return res.data;
//       });
//     const thirdPhoto = await axios
//       .get(
//         `https://api.unsplash.com/photos/${thirdId}/?client_id=${clientId}`
//       )
//       .then((res) => {
//         return res.data;
//       });
//     const fourthPhoto = await axios
//       .get(
//         `https://api.unsplash.com/photos/${fourthId}/?client_id=${clientId}`
//       )
//       .then((res) => {
//         return res.data;
//       });
//     const fifthPhoto = await axios
//       .get(
//         `https://api.unsplash.com/photos/${fifthId}/?client_id=${clientId}`
//       )
//       .then((res) => {
//         return res.data;
//       });
//     const sixthPhoto = await axios
//       .get(
//         `https://api.unsplash.com/photos/${sixthId}/?client_id=${clientId}`
//       )
//       .then((res) => {
//         return res.data;
//       });

//     setData([
//       firstPhoto,
//       secondPhoto,
//       thirdPhoto,
//       fourthPhoto,
//       fifthPhoto,
//       sixthPhoto,
//     ]);
//     setStatus('success');
//   })();
// }, [fifthId, firstId, fourthId, secondId, sixthId, thirdId]);

import React, { useContext } from 'react';
import TokenContext from '../../context/token';
export default function Header() {
  const token = useContext(TokenContext);

  const likePhoto = () => {
    fetch('https://api.unsplash.com/photos/5uXuHjfyxlk/like', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token },
    });
  };

  return <button onClick={likePhoto}>like photo</button>;
}

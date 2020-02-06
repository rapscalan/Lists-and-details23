import React from 'react';
import { useParams } from 'react-router-dom';
import { useXfilesCharacter } from '../../hooks/xfiles';

const XfileDetail = () => {
  const { name } = useParams();
  const character = useXfilesCharacter(name);

  return (
    <div>
      <img src={character.image} />
      <p>{name}</p>
      <p>{character.description}</p>
      <p>{character.occupation}</p>
      <p>{character.status}</p>
    </div>
  );
};

export default XfileDetail;

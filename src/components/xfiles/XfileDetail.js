import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Xfile from './Xfile';
import { useXfiles, useXfilesCharacter } from '../../hooks/xfiles';
import { Link } from 'react-router-dom';

// const XfileDetail = ({ name }) => {
//   const character = useXfilesCharacter(name);
const XfileDetail = () => {
  //console.log(match);
  const { name } = useParams();
  console.log(name);
  // const { name, image, description, occupation, status } = useXfilesCharacter(character[name]);
  const character = useXfilesCharacter(name);
  //console.log(character);

  return (
    <div>
      <img src={character.image} />
      <p>{name}</p>
      <p>{character.description}</p>
      <p>{character.occupation}</p>
      <p>{character.status}</p>
      {/* <h1>{character.name}</h1> */}
      {/* {character} */}
    </div>
  );
};

// XfileDetail.propTypes = {
//   name: PropTypes.string.isRequired
// };

export default XfileDetail;

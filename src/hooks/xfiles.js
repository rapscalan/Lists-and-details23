import { getXFiles, getXfileCharacter } from '../services/xFilesApi';
import { useState, useEffect } from 'react';

export const useXfiles = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getXFiles()
      .then(setCharacters);
  });
  return characters;
};

export const useXfilesCharacter = (name) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    getXfileCharacter(name)
      .then(setCharacter);
  }, [name]);
  return character;
};

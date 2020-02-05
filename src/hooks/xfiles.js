import { getXFiles } from '../services/xFilesApi';
import { useState, useEffect } from 'react';

export const useXfiles = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getXFiles()
      .then(setCharacters);
  });
  return characters;
  // getLocations(searchTerm)
  //     .then(setLocations);
  //   // .then(newLocations => setLocations(newLocations));
  // }, [searchTerm]);
};


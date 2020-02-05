import React from 'react';
import PropTypes from 'prop-types';
import Xfile from './Xfile';
import { useXfiles } from '../../hooks/xfiles';
import { Link } from 'react-router-dom';

const Xfiles = () => {
  const files = useXfiles();

  const fileElements = files.map((file, i) => (
    <li key={i}>
      <Link to={`/xfile/${file.name}`}>
        <Xfile {...file} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {fileElements}
    </ul>
  );
};

// Xfile.propTypes = {
//   searchTerm: PropTypes.string.isRequired
// };

export default Xfiles;

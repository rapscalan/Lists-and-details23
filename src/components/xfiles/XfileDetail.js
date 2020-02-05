import React from 'react';
import PropTypes from 'prop-types';
import Xfile from './Xfile';
import { useXfiles } from '../../hooks/xfiles';
import { Link } from 'react-router-dom';

const XfileDetail = () => {
  const files = useXfiles();

  // const fileElements = files.map((file, i) => (
  //   <li key={i}>
  //     <Link to={`/xfile/${file.name}`}>
  //       <Xfile {...file} />
  //     </Link>
  //   </li>
  // ));

  return (
    <div>
      {fileElements}
    </div>
  );
};

// Xfile.propTypes = {
//   searchTerm: PropTypes.string.isRequired
// };

export default XfileDetail;

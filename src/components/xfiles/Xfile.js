import React from 'react';
import PropTypes from 'prop-types';

const Xfile = ({ name, image }) => (
  <section>
    <img src={image} style={{ width: '50vw' }} />
    <p>{name}</p>
  </section>
);

Xfile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Xfile;

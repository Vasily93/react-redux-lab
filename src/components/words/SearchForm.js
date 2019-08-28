import React from 'react';
import PropTypes from 'prop-types';

function SerachForm({ searchTerm, handleOnChange }) {
  return (
    <input
      value={searchTerm}
      onChange={handleOnChange}
      placeholder='type a word'
    />
  );
}

SerachForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired
};

export default SerachForm;

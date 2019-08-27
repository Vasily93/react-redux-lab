import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  const wordElements = words.map(word => (
    <li key={word}>{word}</li>
  ))
  
  return (
    <ul>{wordElements}</ul>
  );
}

Words.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Words;

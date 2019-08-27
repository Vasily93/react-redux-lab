import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  console.log(words);
  
  return (
    <p>{words}</p>
  );
}

Words.propTypes = {
  words: PropTypes.array
};

export default Words;

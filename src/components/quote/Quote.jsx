import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, character, image }) => (
  <figure>
    <img src={image} alt={character} />
    <figcaption>
      {text} - {character}
    </figcaption>
  </figure>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Quote;

import React from 'react';
import PropTypes from 'prop-types';

function Tweet(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  names: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Tweet;

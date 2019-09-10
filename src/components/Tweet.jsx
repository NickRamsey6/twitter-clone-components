import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes'

function Tweet(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <Likes />
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Tweet;

import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes'

function Tweet(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <h3>{props.likesCount}</h3>
      <Likes likesCount={props.likesCount} index={props.index} callback={props.callback}/>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likesCount: PropTypes.number
};

export default Tweet;

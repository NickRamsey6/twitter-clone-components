import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tweet from './Tweet'

function SearchResults(props){
  console.log(props);
  return(
    <div>
    {props.resultsFeed.map((tweet,index) =>
      <Tweet name = {tweet.name}
        content = {tweet.content}
        likesCount = {tweet.likes}
        callback={props.changeLikes}
        index={index}
        key = {index}/>
      )}
    </div>
  );
}

SearchResults.propTypes = {
  resultsFeed: PropTypes.array
};

export default SearchResults;

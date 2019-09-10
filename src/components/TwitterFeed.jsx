import React from "react";
import Tweet from "./Tweet";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

var formStyle = {
  display: 'flex'
}

function TwitterFeed(props){
  return(
    <div className="container">
      <form style={formStyle}>
        <input type="text" placeholder="What's Happening"></input>
      </form>
      {props.tweetList.map((tweet,index) =>
        <Tweet name = {tweet.name}
          content = {tweet.content}
          likesCount = {tweet.likes}
          callback={props.changeLikes}
          index={index}
          key = {index}/>
        )}
        <Link to='/profile'>User Profile</Link> | <Link to='/newtweet'>Add New Tweet</Link>
    </div>
  );
}

TwitterFeed.propTypes = {
  tweetList: PropTypes.array
};

export default TwitterFeed;

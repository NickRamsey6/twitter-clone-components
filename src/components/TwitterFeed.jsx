import React from "react";
import Tweet from "./Tweet";
import { Link } from 'react-router-dom';

var twitterList = [
  {
    name: 'name',
    content: 'some dumb tweet'
  },
  {
    name: 'name',
    content: 'some dumb tweet'
  },
  {
    name: 'name',
    content: 'some dumb tweet'
  },
  {
    name: 'name',
    content: 'some dumb tweet'
  },
  {
    name: 'name',
    content: 'some dumb tweet'
  }
];

function TwitterFeed(){
  return(
    <div class="container">
      <form>
        <input type="text" placeholder="What's Happening"></input>
      </form>
      {twitterList.map((tweet,index) =>
        <Tweet name = {tweet.name}
          content = {tweet.content}
          key = {index}/>
        )}
        <Link to='/profile'>User Profile</Link>
    </div>
  );
}

export default TwitterFeed;

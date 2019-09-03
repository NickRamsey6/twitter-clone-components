import React from "react";
import Tweet from "./Tweet";

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
    </div>
  );
}

export default TwitterFeed;

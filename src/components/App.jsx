import React from "react";
import Navbar from "./Navbar"
import Profile from "./Profile"
import Summary from "./Summary"
import TwitterFeed from './TwitterFeed'
import FollowerRecommendations from './FollowerRecommendations'

function App(){
  return(
    <div>
      <Navbar />
      <hr/>
      <Profile />
      <Summary />
      <TwitterFeed />
      <FollowerRecommendations />
    </div>
  );
}

export default App;

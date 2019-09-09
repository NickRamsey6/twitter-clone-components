import React from 'react';
import Navbar from './Navbar';
import TwitterFeed from './TwitterFeed';
import FollowerRecommendations from './FollowerRecommendations';
import { Switch, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import Error404 from './Error404';

function App(){
  return(
    <div>
      <Navbar />
      <hr/>
      <Switch>
        <Route exact path='/' component={TwitterFeed} />
        <Route exact path='/profile' component={UserProfile} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;


// component={Summary}

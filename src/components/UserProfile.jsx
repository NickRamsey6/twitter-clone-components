import React from 'react';
import Profile from './Profile';
import Summary from './Summary';
import FollowerRecommendations from './FollowerRecommendations';

function UserProfile() {
    return(
      <div>
        <Profile/>
        <Summary/>
        <FollowerRecommendations/>
      </div>
    )
}

export default UserProfile;

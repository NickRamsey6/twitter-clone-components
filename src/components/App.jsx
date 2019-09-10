import React from 'react';
import Navbar from './Navbar';
import TwitterFeed from './TwitterFeed';
import FollowerRecommendations from './FollowerRecommendations';
import { Switch, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import Error404 from './Error404';
import NewTweetForm from './NewTweetForm';
import SearchResults from './SearchResults';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: [],
      masterSearchList: []

    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
    this.changeLikes = this.changeLikes.bind(this);
    this.searchTweets = this.searchTweets.bind(this);
  }

  handleAddingNewTweetToList(newTweet) {
    newTweet.likes = 0;
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  changeLikes(tweetNumber, numLikes) {
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList[tweetNumber].likes = numLikes

    this.setState({masterTweetList: newMasterTweetList});
  }

  searchTweets(userSearch) {
    var masterSearchList = this.state.masterTweetList.slice();

    masterSearchList = masterSearchList.filter(tweet => tweet.name === userSearch)

    // masterSearchList = masterSearchList.filter(tweet => userSearch.substring(tweet.name))

    console.log(masterSearchList, userSearch)
    console.log(this.state)
      this.setState({masterSearchList: masterSearchList});
  }

  render(){

    return(
      <div>
      <hr/>
      <Navbar searchTweets={this.searchTweets} />
      <Switch>
      <Route exact path='/' render={()=><TwitterFeed changeLikes={this.changeLikes}
      tweetList={this.state.masterTweetList} />} />
      <Route exact path='/profile' component={UserProfile} />
      <Route exact path='/newtweet' render={()=><NewTweetForm onNewTweetCreation={this.handleAddingNewTweetToList} />} />
      <Route exact path='/searchresults' render={()=> <SearchResults resultsFeed={this.state.masterSearchList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
}


export default App;


// component={Summary}

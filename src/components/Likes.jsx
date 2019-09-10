import React from 'react';

class Likes extends React.Component {

constructor(props) {
  super(props);
  let initialLikes = this.props.likesCount

  if(!initialLikes) initialLikes = 0
  this.state = {
    likesCount: initialLikes
  };
  this.handleLike = this.handleLike.bind(this);
  this.handleDislike = this.handleDislike.bind(this);
}

  handleLike() {
    this.props.callback(this.props.index, this.state.likesCount+1)
    this.setState({likesCount: this.state.likesCount + 1});
  }

  handleDislike() {
    this.props.callback(this.props.index, this.state.likesCount-1)
    this.setState({likesCount: this.state.likesCount - 1});
  }

  render(){
    return(
      <div className="Likes">
      <h4>Likes: {this.state.likesCount}</h4>
      <button onClick={this.handleLike}>Like</button>
      <button onClick={this.handleDislike}>Dislike</button>
      </div>
    );
  }
}




export default Likes;

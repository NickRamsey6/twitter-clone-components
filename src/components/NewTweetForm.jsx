import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class NewTweetForm extends React.Component {
  constructor(props){
    super(props);
    this._name = null;
    this._content = null;
    this.state = {
      redirectToHome: false
     };
     this.handleNewTweetFormSubmission = this.handleNewTweetFormSubmission.bind(this);
    }

  handleNewTweetFormSubmission(event) {
    event.preventDefault();
    this.props.onNewTweetCreation({name: this._name.value, content: this._content.value});
    this._name.value = '';
    this._content.value = '';
    this.setState({redirectToHome: true});
  }

  render() {
  if (this.state.redirectToHome) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <form onSubmit={this.handleNewTweetFormSubmission}>
        <input
        type='text'
        id='name'
        placeholder='User Name'
        ref={(input) => {this._name = input;}}/>
        <textarea
        type='text'
        id='content'
        placeholder='What do you want to say'
        ref={(textarea) => {this._content = textarea;}}/>
        <button type='submit'>Shout!</button>
      </form>
    </div>
  );
 }
}

NewTweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetForm;

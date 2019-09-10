import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

var formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '250px',
  height: '200px'
}

var inputStyle = {
  fontSize: '20px'
}

var bodyStyle = {
  height: '130px',
  width: '400px',
  fontSize: '20px'
}

var buttonStyle = {
  fontSize: '15px',
  backgroundColor: 'coral',
  fontWeight: 'bolder',
  width: '100px'
}

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
      <form style={formStyle} onSubmit={this.handleNewTweetFormSubmission}>
        <input style={inputStyle}
        type='text'
        id='name'
        placeholder='User Name'
        ref={(input) => {this._name = input;}}/>
        <textarea style={bodyStyle}
        type='text'
        id='content'
        placeholder='What do you want to say'
        ref={(textarea) => {this._content = textarea;}}/>
        <button style={buttonStyle} type='submit'>Shout!</button>
      </form>
    </div>
  );
 }
}

NewTweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetForm;

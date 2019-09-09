import React from 'react';
import PropTypes from 'prop-types';

function NewTweetForm(props){
  let _name = null;
  let _content = null;

  function handleNewTweetFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_content.value);
    props.onNewTweetCreation({name: _name.value, content: _content.value});
    _name.value = '';
    _content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTweetFormSubmission}>
        <input
        type='text'
        id='name'
        placeholder='User Name'
        ref={(input) => {_name = input;}}/>
        <textarea
        type='text'
        id='content'
        placeholder='What do you want to say'
        ref={(textarea) => {_content = textarea;}}/>
        <button type='submit'>Shout!</button>
      </form>
    </div>
  );
}

NewTweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetForm;

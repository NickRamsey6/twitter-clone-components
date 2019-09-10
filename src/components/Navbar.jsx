import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

var navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100'

}

// var searchStyle = {
// display: 'flex',
// width: '100',
// marginTop: '15'
//
// }


function Navbar(props) {
  this._name = null;
  return(
    <div  className='container'>

      <div style={navStyle}>
        <nav>
          <Link to='/'>Home</Link>
          <a href='news.asp'>Notifications</a>
          <a href='contact.asp'>Messages</a>
        </nav>
      </div>
      <div className='searchbar'>
        <form>
          <input type='text' placeholder='Search' ref={(input) => {this._name = input;}}></input>
          <Link to="/searchresults">
          <button onClick={()=>props.searchTweets(this._name.value)}>Search tweets</button>
          </Link>
        </form>
      </div>
    </div>
    );
  }

  Navbar.propTypes = {
    searchTweets: PropTypes.func
  };

  export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className='container'>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <a href='news.asp'>Notifications</a>
          <a href='contact.asp'>Messages</a>
        </nav>
      </div>
      <div className='searchbar'>
        <form>
          <input type='text' placeholder='Search'></input>
          <button>Tweet</button>
        </form>
      </div>
    </div>
    );
  }

  export default Navbar;

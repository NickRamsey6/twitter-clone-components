import React from "react";

function Navbar() {
  return(
    <div class="container">
      <div>
        <nav>
          <a href="default.asp">Home</a>
          <a href="news.asp">Notifications</a>
          <a href="contact.asp">Messages</a>
        </nav>
      </div>
      <div className="searchbar">
        <form>
          <input type="text" placeholder="Search"></input>
          <button>Tweet</button>
        </form>
      </div>
    </div>
    );
  }

  export default Navbar;

import React from "react";

const Navbar = (props) => {
  if (!props.isLoggedIn) {
    return (
      <div className="navContainer">
        <h1 id="homeBtn">Baftek Home</h1>
        <div className="navAuthContainer">
          <h2 id="logBtn" className="authBtn">
            Login
          </h2>
          <h2 id="signBtn" className="authBtn">
            Signup
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navContainer">
        <h1 id="homeBtn">Baftek Home</h1>
        <div className="navPosts">
          <h2 id="postBtn" className="userNav">
            Post homes
          </h2>
          <h2 id="seeAllBtn" className="userNav">
            See my posted homes
          </h2>
        </div>
      </div>
    );
  }
};

export default Navbar;

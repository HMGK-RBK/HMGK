import React from "react";

const Navbar = (props) => {
  if (!props.isLoggedIn) {
    return (
      <div className="navContainer">
        <h1 id="homeBtn" onClick={() => props.changeView("home")}>
          Baftek Home
        </h1>
        <div className="navAuthContainer">
          <h2
            id="logBtn"
            className="authBtn"
            onClick={() => props.changeView("login")}>
            Login
          </h2>
          <h2
            id="signBtn"
            className="authBtn"
            onClick={() => props.changeView("signup")}>
            Signup
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navContainer">
        <h1 id="homeBtn" onClick={() => props.changeView("home")}>
          Baftek Home
        </h1>
        <div className="navPosts">
          <h2
            id="postBtn"
            className="userNav"
            onClick={() => props.changeView("post")}>
            Post homes
          </h2>
          <h2
            id="seeAllBtn"
            className="userNav"
            onClick={() => props.changeView("myposts")}>
            See my posted homes
          </h2>
        </div>
      </div>
    );
  }
};

export default Navbar;

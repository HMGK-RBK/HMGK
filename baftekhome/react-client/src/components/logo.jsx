import React from "react";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="img" id="logo" src="https://i.imgur.com/BAGjiyF.jpg" />
        <button
          className="btn"
          id="join"
          onClick={() => this.props.changeView("signup")}>
          Join Us
        </button>
      </div>
    );
  }
}
export default Logo;

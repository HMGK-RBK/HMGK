import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={this.props.home.image} />
        <p>{this.props.home.description}</p>
        <p>{this.props.home.location}</p>
        <p></p>
      </div>
    );
  }
}
export default Home;

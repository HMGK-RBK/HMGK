import React from "react";

class Homelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img
          src={this.props.home.image}
          onClick={() => this.props.getImages(this.props.home._id)}
        />
        <p>{this.props.home.description}</p>
        <p>{this.props.home.location}</p>
        <p>{this.props.home.category}</p>
        <p>{this.props.home.contactInformation}</p>
      </div>
    );
  }
}
export default Homelist;

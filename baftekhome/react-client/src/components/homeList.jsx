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
          className="img"
          src={this.props.home.image}
          onClick={() => this.props.getImages(this.props.home._id)}
        />
        <p className="title">Description: {this.props.home.description}</p>
        <p onClick={() => this.props.getImages(this.props.home._id)}>
          Location: {this.props.home.location}
        </p>
        <p className="title">Category: {this.props.home.category}</p>
        <p className="title"> Price: {this.props.home.price} $</p>
        <p className="title">
          Contact Information: {this.props.home.contactInformation}
        </p>
      </div>
    );
  }
}
export default Homelist;

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
        <p>description: {this.props.home.description}</p>
        <p onClick={() => this.props.getImages(this.props.home._id)}>
          {this.props.home.location}
        </p>
        <p>category: {this.props.home.category}</p>
        <p>price: {this.props.home.price} $</p>
        <p>contact information: {this.props.home.contactInformation}</p>
      </div>
    );
  }
}
export default Homelist;

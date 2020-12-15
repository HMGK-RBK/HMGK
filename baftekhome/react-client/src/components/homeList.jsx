import React from "react";

class Homelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className = 'containerr'>
        <img className='img'
          src={this.props.home.image}
          onClick={() => this.props.getImages(this.props.home._id)}
        />
        <h2 >Description: </h2>
        <h4>{this.props.home.description}</h4>
        <h2 onClick={() => this.props.getImages(this.props.home._id)}>
        </h2>
        <h4> {this.props.home.location}</h4>
        <h2 >Category: </h2>
        <h4>{this.props.home.category}</h4>
        <h2 > Price:  </h2>
        <h4>{this.props.home.price} $ </h4>
        <h2  >Contact Information: </h2>
        <h4>{this.props.home.contactInformation}</h4>
      </div>
    );
  }
}
export default Homelist;

import React from "react";
import axios from "axios";
import UpdateForm from "./updateForm.jsx";

class UserPostedHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeId: "",
      edit: false
    };
  }

  render() {
    if (!this.state.edit) {
      return (
        <div>
          <img src={this.props.home.image} />
          <h2>Apartment for Sale at :</h2>
            <h4>{this.props.home.location}</h4>
            <h2>Categroy: </h2>
            <h4>{this.props.home.category}</h4>
            <h2>Description:</h2>
            <h4> {this.props.home.description}</h4>
            <h2>Price:</h2>
            <h4> {this.props.home.price}$</h4>
            <h2>Contact Information: </h2>
            <h4>{this.props.home.contactInformation}</h4>
          <br></br>
          <button
            type="submit"
            onClick={() => this.props.deleteHome(this.props.home._id)}>
            Delete
          </button>
          <br></br>
          <button
            type="submit"
            onClick={() =>
              this.setState({ edit: true, homeId: this.props.home._id })
            }>
            Update
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <UpdateForm
            homeId={this.state.homeId}
            updateHome={this.props.updateHome}
          />
        </div>
      );
    }
  }
}

export default UserPostedHome;

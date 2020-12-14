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
          <h2>Apartment for Sale at {this.props.home.location}</h2>
          <h2>Categroy: {this.props.home.category}</h2>
          <h4>Description: {this.props.home.description}</h4>
          <h4>Price: {this.props.home.price}$</h4>
          <h4>Contact Information: {this.props.home.contactInformation}</h4>
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
            changeView={this.props.changeView}
          />
        </div>
      );
    }
  }
}

export default UserPostedHome;

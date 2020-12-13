import React from "react";
import axios from "axios";
class UserPostedHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userHomes: []
    };
    this.getUserHomes = this.getUserHomes.bind(this);
    this.deleteHome = this.deleteHome.bind(this);
  }

  componentDidMount() {
    this.getUserHomes();
  }

  getUserHomes() {
    axios
      .get(`/api/userHomes/${this.props.user[0].firstName}`)
      .then(({ data }) => {
        this.setState({
          userHomes: data
        });
        this.props.changeView("myposts");
      });
  }


  deleteHome(id) {
    axios.delete(`/api/homes/${id}`).then(() => {
      this.getUserHomes();
      this.props.fetchHomes();
    });
  }

  render() {
    return (
      <div>
        {this.state.userHomes.map((home, index) => (
          <div key={index}>
            <img src={home.image} />
            <h2>Apartment for Sale at {home.location}</h2>
            <h2>Categroy: {home.category}</h2>
            <h4>Description: {home.description}</h4>
            <h4>Price: {home.price}$</h4>
            <h4>Contact Information: {home.contactInformation}</h4>
            <br></br>
            <button type="submit" onClick={() => this.deleteHome(home._id)}>
              Delete
            </button>
            <br></br>
            <button type="submit">Update</button>
          </div>
        ))}
      </div>
    );
  }
}

export default UserPostedHome;

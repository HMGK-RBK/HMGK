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
      <div className = 'containerr' >
        {this.state.userHomes.map((home, index) => (
          <div key={index}>
            <img  className='img' src={home.image} />
            <h2>Apartment for Sale at :</h2>
            <h4>{home.location}</h4>
            <h2>Categroy: </h2>
            <h4>{home.category}</h4>
            <h2>Description:</h2>
            <h4> {home.description}</h4>
            <h2>Price:</h2>
            <h4> {home.price}$</h4>
            <h2>Contact Information: </h2>
            <h4>{home.contactInformation}</h4>
            <br></br>
            <button  className='btn' type="submit" onClick={() => this.deleteHome(home._id)}>
              Delete
            </button>
            <br></br>
            <button className='btn'  type="submit">Update</button>
          </div>
        ))}
      </div>
    );
  }
}

export default UserPostedHome;

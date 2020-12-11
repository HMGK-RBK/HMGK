import React from "react";
import HomeDetail from "./HomeDetails.jsx";
import HomeList from "./homeList.jsx";
import PostHome from "./PostHome.jsx";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      images: [],
      home: []
    };
    this.fetchHomes = this.fetchHomes.bind(this);
    this.getAllHomeImgs = this.getAllHomeImgs.bind(this);
    console.log(this.props.view);
  }

  componentDidMount() {
    this.fetchHomes();
  }

  fetchHomes() {
    axios.get("/api/homes").then(({ data }) => {
      this.setState({
        homes: data
      });
    });
  }

  getAllHomeImgs(id) {
    axios.get(`/api/images/${id}`).then(({ data }) => {
      this.setState({
        images: data
      });
      axios.get(`/api/homes/${id}`).then(({ data }) => {
        this.setState({
          home: data
        });
        this.props.changeView("homedetails");
      });
    });
  }

  deleteHome(event) {
    var index = event.target.id;
    axios
      .delete(`/api/homes/${this.state.homes[index]._id}`)
      .then(({ data }) => {
        this.state.homes.splice(index, 1);
        let newHomes = this.state.homes;
        this.setState({
          homes: newHomes
        });
      });
  }

  render() {
    if (this.props.view === "home") {
      return (
        <div>
          {this.state.homes.map((home, index) => (
            <HomeList home={home} key={index} getImages={this.getAllHomeImgs} />
          ))}
        </div>
      );
    } else if (this.props.view === "homedetails") {
      return (
        <div>
          <HomeDetail images={this.state.images} home={this.state.home} />
        </div>
      );
    } else if (this.props.view === "post") {
      return (
        <div>
          <PostHome />
        </div>
      );
    }
  }
}
export default Home;

import React from "react";
import HomeList from "./homeList.jsx";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
    this.fetchHomes = this.fetchHomes.bind(this);
  }
  componentDidMount() {
    this.fetchHomes();
  }
  fetchHomes() {
    axios.get("/api/homes").then(({ data }) => {
      this.setState({
        homes: data
      });

      console.log(this.state.homes);
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
    return (
      <div>
        {this.state.homes.map((home, index) => (
          <HomeList home={home} key={index} />
        ))}
      </div>
    );
  }
}
export default Home;

import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home.jsx";
import axios from "axios";
class App extends React.Component {
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

  render() {
    return (
      <div>
        {this.state.homes.map((home, index) => (
          <Home home={home} key={index} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

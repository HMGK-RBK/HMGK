import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home.jsx";
import Navbar from "./components/Navbar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      user: undefined,
      userHomes: []
    };
    this.getUser = this.getUser.bind(this);
    this.changeView = this.changeView.bind(this);
    this.logOut = this.logOut.bind(this);
    this.getUserHomes = this.getUserHomes.bind(this);
  }
  changeView(view) {
    this.setState({ view: view });
  }
  getUser(obj) {
    this.setState({ user: obj });
  }
  getUserHomes() {
    axios
      .get(`/api/userHomes/${this.state.user[0].firstName}`)
      .then(({ data }) => {
        this.setState({
          userHomes: data
        });
      });
  }

  componentDidMount() {
    var token = window.localStorage.getItem("accessToken");
    if (token) {
      axios
        .post("/checkToken", { token: token })
        .then((data) => {
          this.setState({ user: data.data });
        })
        .then(() => {
          this.getUserHomes();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  logOut() {
    this.setState({ user: undefined });
    this.setState({ view: "home" });
    window.localStorage.setItem("accessToken", undefined);
  }

  render() {
    return (
      <div>
        <Navbar
          view={this.state.view}
          isLoggedIn={this.state.user}
          changeView={this.changeView}
          logOut={this.logOut}
          getUserHomes={this.getUserHomes}
        />
        <Home
          view={this.state.view}
          changeView={this.changeView}
          getUser={this.getUser}
          user={this.state.user}
          userHomes={this.state.userHomes}
          getUserHomes={this.getUserHomes}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

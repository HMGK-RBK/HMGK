import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home.jsx";
import Navbar from "./components/Navbar.jsx";
import Logo from "./components/Logo.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      user: undefined
    };
    this.getUser = this.getUser.bind(this);
    this.changeView = this.changeView.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  changeView(view) {
    this.setState({ view: view });
  }
  getUser(obj) {
    this.setState({ user: obj });
  }
  componentWillMount() {
    var token = window.localStorage.getItem("accessToken");
    if (token) {
      axios
        .post("/checkToken", { token: token })
        .then((data) => {
          this.setState({ user: data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  logOut() {
    this.setState({ user: undefined });
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
        />
        <Home
          view={this.state.view}
          changeView={this.changeView}
          getUser={this.getUser}
          user={this.state.user}
        />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("app"));

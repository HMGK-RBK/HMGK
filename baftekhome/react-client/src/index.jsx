import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home.jsx";
import Navbar from "./components/Navbar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      view: "home",
      user: undefined
    };
    this.getUser = this.getUser.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({ view: view });
  }
  getUser(obj) {
    this.setState({ user: obj });
  }

  render() {
    return (
      <div>
        <Navbar
          view={this.state.view}
          isLoggedIn={this.state.user}
          changeView={this.changeView}
        />
        <Home
          view={this.state.view}
          changeView={this.changeView}
          getUser={this.getUser}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

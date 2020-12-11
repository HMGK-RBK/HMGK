import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home.jsx";
import Navbar from "./components/Navbar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      view: "home"
    };
  }

  render() {
    if (this.state.view === "home") {
      return (
        <div>
          <Navbar isLoggedIn={this.state.isLoggedIn} />
          <Home />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

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
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({ view: view });
  }

  render() {
    return (
      <div>
        <Navbar
          view={this.state.view}
          isLoggedIn={this.state.isLoggedIn}
          changeView={this.changeView}
        />
        <Home view={this.state.view} changeView={this.changeView} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

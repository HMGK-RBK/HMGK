import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home.jsx";
import SignUp from "./components/signUp.jsx"
import Login from "./components/login.jsx"

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
     
    };
  }
  render() {
    return( 
      <div>
  <Home />
   <SignUp/>
   <Login/>
      </div>
  
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import HomeDetail from "./HomeDetails.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home"
    };
  }

  render() {
    if(view === "home"){
      return (
        <div>
          <img src={this.props.home.image} />
          <p>{this.props.home.description}</p>
          <p>{this.props.home.location}</p>
          <p></p>
        </div>
      );
    }else if(view === "homedetail"){
      return (
        <HomeDetail/>
      )
    }
  }
}
export default Home;

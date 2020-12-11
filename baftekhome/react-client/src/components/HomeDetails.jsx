import React from "react";
import axios from "axios";

class HomeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    } 
  }

 
  render() {
    return (
      <div>
        <h4 className="">Apartment for Sale at</h4>
        <img className="" />
      </div>
    )
  }
}

export default HomeDetail
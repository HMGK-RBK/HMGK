import React from "react";
import axios from "axios";

class HomeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    } 
    this.getAllHomeImgs = this.getAllHomeImgs.bind(this);
  }

  componentDidMount(){
    this.getAllHomeImgs
  }
 
  getAllHomeImgs(id){
    axios.get(`/api/images/${id}`).then(({ data }) => {
      this.setState({
        images: data
      });
      console.log(this.state.images);
    });
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
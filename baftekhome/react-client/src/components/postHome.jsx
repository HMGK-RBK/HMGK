import React from "react";
import axios from "axios";

class PostHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      image: "",
      description: "",
      location: "",
      category: "",
      contactInformation: ""
    };
  }
  postHomes(image, description, location, category, contactInformation) {
    var obj = {
      image: image,
      description: description,
      location: location,
      category: category,
      contactInformation: contactInformation
    };
    var arr = this.state.data;
    arr.push(obj);
    axios.post("/api/homes").then(({ data }) => {});
  }

  render() {
    return;
  }
}
export default PostHome;

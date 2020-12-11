import React from "react";
import axios from "axios";
import $ from "jquery";

class PostHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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

    axios.post("/api/homes", obj).then(function (response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <input id="image" />
        <input id="description" />
        <input id="location" />
        <input id="category" />
        <input id="contactInformation" />
        <button
          onClick={() => {
            this.postHomes(
              $("#image").val(),
              $("#description").val(),
              $("#location").val(),
              $("#category").val(),
              $("#contactInformation").val()
            );
          }}>
          submit
        </button>
      </div>
    );
  }
}
export default PostHome;

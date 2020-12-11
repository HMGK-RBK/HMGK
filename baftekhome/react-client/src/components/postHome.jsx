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
  postHomes(image, description, location, category, contactInformation, price, userName) {
    var obj = {
      image: image,
      description: description,
      location: location,
      category: category,
      contactInformation: contactInformation,
      price: price,
      userName: userName
    };

    axios.post("/api/homes", obj).then(function (response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <input placeholder="image" id="image" />
        <input placeholder="description" id="description" />
        <input placeholder="location" id="location" />
        <input placeholder="category" id="category" />
        <input placeholder="contactInformation" id="contactInformation" />
        <input placeholder="price" id="price" />
        <button
          onClick={() => {
            this.postHomes(
              $("#image").val(),
              $("#description").val(),
              $("#location").val(),
              $("#category").val(),
              $("#contactInformation").val(),
              $("#price").val()
            );
          }}>
          submit
        </button>
      </div>
    );
  }
}
export default PostHome;

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
  postHomes(userName, image, description, location, category, contactInformation, price) {
    var obj = {
      userName: userName,
      image: image,
      description: description,
      location: location,
      category: category,
      contactInformation: contactInformation,
      price: price,
    };

    axios.post("/api/homes", obj).then(function (response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <labe>User Name:</labe>
        <br></br>
        <input placeholder="userName" id="userName" />
        <br></br>
        <label>Image:</label>
        <br></br>
        <input placeholder="image" id="image" />
        <br></br>
        <labe>Description:</labe>
        <br></br>
        <input placeholder="description" id="description" />
        <br></br>
        <labe>Location:</labe>
        <br></br>
        <input placeholder="location" id="location" />
        <br></br>
        <labe>Categroy:</labe>
        <br></br>
        <input placeholder="category" id="category" />
        <br></br>
        <labe>Contact Information:</labe>
        <br></br>
        <input placeholder="contactInformation" id="contactInformation" />
        <br></br>
        <labe>Price:</labe>
        <br></br>
        <input placeholder="price" id="price" />
        <br></br>
        <button
          onClick={() => {
            this.postHomes(
              $("#userName").val(),
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

import React from "react";
import axios from "axios";
import $ from "jquery";

class PostHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      image: ""
    };
  }
  postHomes(
    image,
    description,
    location,
    category,
    contactInformation,
    price,
    userName
  ) {
    let config = {
      headers: {
        Authorization: "Client-ID 884e577759efe90"
      }
    };
    const fd = new FormData();
    fd.append("image", this.state.image);
    axios
      .post(
        `https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/upload`,
        fd,
        config
      )
      .then((res) => {
        var obj = {
          image: res.data.data.link,
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
      });
  }

  getImage(event) {
    this.setState({ image: event.target.files[0] });
  }
  render() {
    return (
      <div>
        <input
          placeholder="image"
          id="image"
          type="file"
          accept="image/png, image/jpeg"
          onChange={this.getImage.bind(this)}
        />
        <input placeholder="description" id="description" />
        <input placeholder="location" id="location" />
        <input placeholder="category" id="category" />
        <input placeholder="contactInformation" id="contactInformation" />
        <input placeholder="price" id="price" />
        <button
          onClick={() => {
            this.postHomes(
              $("#image").files,
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

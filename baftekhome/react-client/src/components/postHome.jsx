import React from "react";
import axios from "axios";
import $ from "jquery";

class PostHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      image1: "",
      image2: "",
      image3: ""
    };
  }

  postHomes(description, location, category, contactInformation, price) {
    let config = {
      headers: {
        Authorization: "Client-ID 884e577759efe90"
      }
    };
    const fd = new FormData();
    fd.append("image", this.state.image1);
    axios
      .post(
        `https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/upload`,
        fd,
        config
      )
      .then((res) => {
        var image1 = res.data.data.link;
        const fd = new FormData();
        fd.append("image", this.state.image2);
        axios
          .post(
            `https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/upload`,
            fd,
            config
          )
          .then((res) => {
            var image2 = res.data.data.link;
            const fd = new FormData();
            fd.append("image", this.state.image3);
            axios
              .post(
                `https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/upload`,
                fd,
                config
              )
              .then((res) => {
                var image3 = res.data.data.link;
                var firstName = this.props.user[0].firstName;
                var lastName = this.props.user[0].lastName;
                var obj = {
                  firstName: firstName,
                  lastName: lastName,
                  image: image1,
                  description: description,
                  location: location,
                  category: category,
                  contactInformation: contactInformation,
                  price: price
                };
                axios.post("/api/homes", obj).then((res) => {
                  axios
                    .post("/api/images", {
                      homeID: res.data._id,
                      image1: image1,
                      image2: image2,
                      image3: image3
                    })
                    .then(() => {
                      console.log("done");
                      this.props.fetchHomes();
                      this.props.changeView("home");
                    });
                });
              });
          });
      });
  }

  getImage1(event) {
    this.setState({ image1: event.target.files[0] });
  }
  getImage2(event) {
    this.setState({ image2: event.target.files[0] });
  }
  getImage3(event) {
    this.setState({ image3: event.target.files[0] });
  }
  render() {
    return (
      <div>
        <label>Description:</label>
        <br></br>
        <input placeholder="description" id="description" />
        <br></br>
        <label>Location:</label>
        <br></br>
        <input placeholder="location" id="location" />
        <br></br>
        <label>Category:</label>
        <br></br>
        <input placeholder="category" id="category" />
        <br></br>
        <label>Contact Information:</label>
        <br></br>
        <input placeholder="contactInformation" id="contactInformation" />
        <br></br>
        <label>Price:</label>
        <br></br>
        <input placeholder="price" id="price" />
        <br></br>
        <label>Insert Image:</label>
        <br></br>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={this.getImage1.bind(this)}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={this.getImage2.bind(this)}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={this.getImage3.bind(this)}
        />
        <br></br>
        <button
          onClick={() => {
            this.postHomes(
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

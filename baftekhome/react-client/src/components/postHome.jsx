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

  postHomes(description, location, category, price) {
    let config = {
      headers: {
        Authorization: "Client-ID 884e577759efe90"
      }
    };
    const img1 = new FormData();
    const img2 = new FormData();
    const img3 = new FormData();
    img1.append("image", this.state.image1);
    img2.append("image", this.state.image2);
    img3.append("image", this.state.image3);
    Promise.all([
      axios.post(
        `https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/upload`,
        img1,
        config
      ),
      axios.post(
        `https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/upload`,
        img2,
        config
      ),
      axios.post(
        `https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/upload`,
        img3,
        config
      )
    ]).then((res) => {
      var image1 = res[0].data.data.link;
      var image2 = res[1].data.data.link;
      var image3 = res[2].data.data.link;
      var obj = {
        firstName: this.props.user[0].firstName,
        lastName: this.props.user[0].lastName,
        image: image1,
        description: description,
        location: location,
        category: category,
        contactInformation: this.props.user[0].email,
        price: price
      };
      axios.post("/api/homes", obj).then((res) => {
        console.log(res);
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

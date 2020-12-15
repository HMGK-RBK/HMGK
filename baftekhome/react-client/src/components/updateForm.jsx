import React from "react";
import $ from "jquery";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: "",
      image2: "",
      image3: ""
    };
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
        <input id="location" placeholder="location" className="input" />
        <input id="category" placeholder="category" className="input" />
        <input id="desc" placeholder="description" className="input" />
        <input id="price" placeholder="price" className="input" />
        <input
          className="input"
          placeholder="image"
          id="image"
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
        <input
          type="submit"
          className="btn"
          onClick={() => {
            this.props.updateHome(
              this.props.homeId,
              $("#location").val(),
              $("#category").val(),
              $("#desc").val(),
              $("#price").val(),
              this.state.image1,
              this.state.image2,
              this.state.image3
            );
          }}
        />
      </div>
    );
  }
}

export default UpdateForm;

import React from "react";
import $ from "jquery";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handleClick(firstName, lastName, email, password, identity_card) {
    var obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      identity_card: identity_card
    };
    $.ajax({
      method: "POST",
      url: "/api/newuser",
      data: JSON.stringify(obj),
      contentType: "application/json"
    }).done(() => {
      this.props.changeView("login");
    });
  }

  render() {
    return (
      <div>
        <label>First Name:</label>
        <br></br>
        <input id="firstName" placeholder="First Name" />
        <br></br>
        <labe>Last Name:</labe>
        <br></br>
        <input id="lastName" placeholder="Last Name" />
        <br></br>
        <labe>Email:</labe>
        <br></br>
        <input id="email" placeholder="Email" />
        <br></br>
        <labe>Password:</labe>
        <br></br>
        <input id="password" placeholder="password" type="password" />
        <br></br>
        <labe>Identity Card:</labe>
        <br></br>
        <input id="identity_card" placeholder="identity card" type="number" />
        <br></br>
        <button
          type="submit"
          onClick={() =>
            this.handleClick(
              $("#firstName").val(),
              $("#lastName").val(),
              $("#email").val(),
              $("#password").val(),
              $("#identity_card").val()
            )
          }>
          Submit
        </button>
      </div>
    );
  }
}

export default SignUp;

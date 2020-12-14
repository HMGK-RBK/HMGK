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
        <label  className="label" >First Name:</label>
        <br></br>
        <input className = 'input' id="firstName" placeholder="First Name" />
        <br></br>
        <labe  className="label" >Last Name:</labe>
        <br></br>
        <input  className = 'input' id="lastName" placeholder="Last Name" />
        <br></br>
        <labe  className="label" >Email:</labe>
        <br></br>
        <input className = 'input' id="email" placeholder="Email" />
        <br></br>
        <labe  className="label" >Password:</labe>
        <br></br>
        <input className = 'input' id="password" placeholder="password" type="password" />
        <br></br>
        <labe  className="label" >Identity Card:</labe>
        <br></br>
        <input className = 'input' id="identity_card" placeholder="identity card" type="number" />
        <br></br>
        <button className='btn'
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

import React from "react";
import $ from "jquery";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  checkUser(email, password) {
    var obj = {
      email: email,
      password: password
    };
    $.ajax({
      method: "POST",
      url: `/api/users`,
      data: JSON.stringify(obj),
      contentType: "application/json"
    }).done((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <labe>Email:</labe>
        <br></br>
        <input id="logEmail" type="email" placeholder="Email" />
        <br></br>
        <labe>Password:</labe>
        <br></br>
        <input id="logPassword" type="password" placeholder="Pasword" />
        <br></br>
        <button
          onClick={() =>{
            this.checkUser($("#logEmail").val(), $("#logPassword").val())
            }
          }>
          Log In
        </button>
      </div>
    );
  }
}

export default LogIn;

import React, { Component } from "react";
import Register from "../components/Register";
import AuthAPI from "../api/auth";

class AuthenticationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { email: "", password: "" }
    };

    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}
  handleChange(event) {
    const targetName = event.target.name;
    const user = this.state.user;
    if (targetName === "email") {
      user.email = event.target.value;
    } else if (targetName === "password") {
      user.password = event.target.value;
    }
    this.setState({ user });
  }
  handleRegister(event) {
    event.preventDefault();
    const user = this.state.user;



      var formBody = [];
      for (var property in user) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(user[property]);
          formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");



    AuthAPI.register(formBody).then(json => {
      if (json) {
        console.log(json);
      }
    });
  }
  render() {
    return (
      <div>
        {/*TODO:Can add header here*/}
        <div>
          <Register
            user={this.state.user}
            handleRegister={this.handleRegister}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default AuthenticationPage;

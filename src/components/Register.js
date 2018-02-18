import React from "react"

const RegisterForm = props => (
  <div className="is-clearfix">
    <form onSubmit={props.handleRegister} encType="multipart/form-data">
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter your email"
            name="email"
            value={props.user.email}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter your password"
            name="password"
            value={props.user.password}
            onChange={props.handleChange}
          />
        </div>
      </div>

      <input
        className="button is-success is-pulled-right"
        type="submit"
        value="Register"
      />
    </form>
  </div>
);

export default RegisterForm;

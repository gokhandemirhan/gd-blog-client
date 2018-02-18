import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router-dom";

import IndexContainer from "./IndexContainer";
import DetailsContainer from "./DetailsContainer";
import CreateUpdateContainer from "./CreateUpdatePostContainer";
import AuthContainer from "./AuthContainer";

class RootContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*TODO: Create component for navbar*/}
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="/posts">
                <img
                  src="http://gokhandemirhan.com/images/logoo.png"
                  alt="Blog"
                  width="38"
                  height="28"
                />
              </a>

              <button className="button navbar-burger">
                <span />
                <span />
                <span />
              </button>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item" to="/posts">
                  Posts
                </Link>
                <Link className="navbar-item" to={`/createpost`}>
                  Create new post
                </Link>
                <Link className="navbar-item" to={`/register`}>
                  Register
                </Link>
                <Link className="navbar-item" to={`/login`}>
                  Login
                </Link>
              </div>
            </div>
          </nav>

          <hr />
          <Route exact path="/posts" component={IndexContainer} />
          <Route exact path="/posts/:postId" component={DetailsContainer} />
          <Route path="/posts/edit/:postId" component={CreateUpdateContainer} />
          <Route path="/createpost/" component={CreateUpdateContainer} />
          <Route path="/register/" component={AuthContainer} />
          {/*<Route path="/login/" component={AuthContainer} />*/}
          <hr />
        </div>
      </BrowserRouter>
    );
  }
}

export default RootContainer;

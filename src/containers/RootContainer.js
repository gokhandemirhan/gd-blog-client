import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import IndexContainer from "./IndexContainer";
import DetailsContainer from "./DetailsContainer";
import CreateUpdateContainer from "./CreateUpdatePostContainer";

class RootContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/posts" component={IndexContainer} />
          <Route path="/posts/:postId" component={DetailsContainer} />
          <Route path="/posts/edit/:postId" component={CreateUpdateContainer} />
          <Route path="/createpost/" component={CreateUpdateContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default RootContainer;

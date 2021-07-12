import React from "react";

import { Redirect, Route } from "react-router-dom";

const PublicRouter = (props) => {
  const { component: Component } = props;
  return (
    <Route
      render={(props) =>
        !localStorage.authToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/users" />
        )
      }
    />
  );
};

export default PublicRouter;

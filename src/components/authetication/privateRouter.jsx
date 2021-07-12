import React from "react";

import { Redirect, Route } from "react-router-dom";

const PrivateRouter = (props) => {
  const { component: Component } = props;
  console.log(props);
  return (
    <Route
      render={(props) =>
        localStorage.authToken ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRouter;

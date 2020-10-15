import React from 'react';
import {
  Route,
  withRouter,
} from 'react-router-dom';


const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => <Component {...props} />}
    />
  );
};

export default withRouter(PublicRoute);

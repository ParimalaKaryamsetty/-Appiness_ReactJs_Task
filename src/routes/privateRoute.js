import React from 'react';
import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { USER_SIGN_IN } from './../routes'
import Auth from './../utils/auth'

/*
    Check for correct user authentication
    authenticated user will be taken to the entered page.
    or else redirected to auth page.
    based on the routes user redirected to forbidden page.
*/
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (Auth.validate()) {
        
      if (rest.authorized) {
          return <Component {...props} />;
      }
      return (
        <h6>Forbidden</h6>
      );
    }
      
      return (
        <Redirect
          to={{
            pathname: USER_SIGN_IN, //User sign in
          }}
        />
      );

        }
      }
  />
);

export default withRouter(PrivateRoute);

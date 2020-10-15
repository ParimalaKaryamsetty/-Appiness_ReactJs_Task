/*
    This file handles user Authentication part which deals with localStorage.
*/

const Auth = () => {
  // const jwt  = require('jsonwebtoken');
  const JWT_TOKEN_KEY = "Access";

  const userSignOut = () => {
    localStorage.clear();
  };

  const userSignIn = token => {
    localStorage.setItem(JWT_TOKEN_KEY, token);
  };

  const validate = () => {
    const JWTToken = getJWTToken();
    return !!JWTToken;
    //return true;
  };

  const getJWTToken = () => localStorage.getItem(JWT_TOKEN_KEY);

  return {
    signOut: userSignOut,
    signIn: userSignIn,
    token: getJWTToken,
    validate
  };
};

export default Auth();

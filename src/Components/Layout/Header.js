import React from "react";

const LayoutHeader = () => {
  const userLogout = () => {
    localStorage.clear();
    window.location.pathname ='/login'
  };
  return (
    <header className="app-header">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Welcome to Dasboard</a>
        <div className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={userLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default LayoutHeader;

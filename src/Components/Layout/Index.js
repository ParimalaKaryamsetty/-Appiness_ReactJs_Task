import React from "react";
import LayoutHeader from "./Header";
import PrivateRoute from "./../../routes/privateRoute";
import { privateRoutes } from "./../../routes";

class LayoutIndex extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="">
        <LayoutHeader />
        <div className="main-content">
          <main className="main wrapper">
            {privateRoutes.map((route, index) =>
              route.component ? (
                <PrivateRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  authorized={route.authorized ? true : true}
                  component={route.component}
                />
              ) : null
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default LayoutIndex;

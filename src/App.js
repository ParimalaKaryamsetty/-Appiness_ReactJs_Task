import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap";
// css
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
// Components
import LayoutIndex from "./Components/Layout/Index";
import UserSignIn from "./User/SignIn";

// Routes
import { USER_SIGN_IN, publicRoutes } from "./routes";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/Publicroutes";


class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      userAuthentication: localStorage.getItem("Access"),
    };
  }

  componentDidMount() {
    const publicRoutesPath = publicRoutes.map(
      (publicRoute) => publicRoute.path
    );
    if (publicRoutesPath.indexOf(window.location.pathname) !== -1) {
      this.setState({
        isLoading: false,
      });
      return;
    }
  }

  render() {
    return (
      <section>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path={USER_SIGN_IN} exact component={UserSignIn} />
              {publicRoutes.map((route, index) =>
                route.component ? (
                  <PublicRoute
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                  />
                ) : null
              )}
              <PrivateRoute authorized component={LayoutIndex} />
            </Switch>
          </BrowserRouter>
          <ToastContainer />
        </div>
      </section>
    );
  }
}

export default App;

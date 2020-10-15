import React, { Fragment } from "react";
import HomeDashboard from "./Dashboard";
import { DashboardUsers } from "../../utils/base";

class HomeIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      Users: DashboardUsers,
    };
  }
  componentDidMount() {}

  render() {
    const { Users } = this.state;
    return (
      <Fragment>
        <div className="container mt-3">
          <HomeDashboard Users={Users} />
        </div>
      </Fragment>
    );
  }
}

export default HomeIndex;

import React from "react";
import Profile from "../profile/Profile";
import Activity from "../activity/Activity";
import data from "../../assets/data.json";

class Main extends React.Component {
  render() {
    const activity = data.map((data) => {
      return <Activity data={data} />;
    });

    return (
      <div className="Main container-fluid d-flex">
        <div className="profile">
          <Profile name="Jeremy Robson" />
        </div>
        <div className="container-fluid grid_Activities row row-cols-3 m-3">
          {activity}
        </div>
      </div>
    );
  }
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;

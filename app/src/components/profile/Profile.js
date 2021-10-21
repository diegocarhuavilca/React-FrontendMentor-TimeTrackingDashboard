import React from "react";
import PropTypes from "prop-types";
import image from "../../assets/images/image-jeremy.png";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile container m-3 p-0 ">
        <div className="container user d-flex flex-column justify-content-center">
          <div className="profile-picture w-50 m-2 my-3">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="profile-info">
            <div className="container-fluid title">Report for</div>
            <div className="container-fluid leadtext-capitalize name">
              {" "}
              {this.props.name}
            </div>
          </div>
        </div>
        <div className="container dates py-3">
          <ul>
            <li>
              <button>Daily</button>
            </li>
            <li>
              <button>Weekly</button>
            </li>
            <li>
              <button>Monthly</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string,
};

Profile.defaultProps = {
  name: "Usuario",
};

export default Profile;

import React from "react";
import PropTypes from "prop-types";
import "./UserProfile.css"; // optional: tạo file css

function UserProfile({ userData, theme = "light" }) {
  // userData: { name, email, avatarUrl, imageSize }
  const { name, email, avatarUrl, imageSize } = userData;

  return (
    <>
      <div className={`profile-card theme-${theme}`}>
        <h2>User Profile</h2>
        <img
          className="profile-avatar"
          src={avatarUrl}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number,
  }).isRequired,
  theme: PropTypes.string,
};

export default UserProfile;

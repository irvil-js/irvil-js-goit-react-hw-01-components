import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

const ProfileCard = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          //   src="https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      {/* <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">5603</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">4827</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">1308</span>
        </li>
      </ul> */}

      <ul className="stats">
        <li>
          <span className="label">Followers:</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default ProfileCard;

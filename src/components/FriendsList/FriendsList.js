import React from "react";
import PropTypes from "prop-types";
import "./FriensList.css";

const FriendList = ({ friends }) => (
  <ul className="friend_list">
    {friends.map((friend) => (
      <li className="item" key={friend.id}>
        {/* <span className={friend.isOnline ? statusOnline : statusOffline}></span> */}
        <img className="avatar" src={friend.avatar} alt="" width="48" />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;

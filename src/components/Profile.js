import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          //   src="https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"
          src={props.avatar}
          alt="Аватар пользователя"
          //   className="avatar"
        />
        {/* <p className="name">Petra Marica</p>
        <p className="tag">@jgluke</p>
        <p className="location">Ocho Rios, Jamaica</p> */}
        <p>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
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
    </div>
  );
};

export default ProfileCard;

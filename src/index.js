import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const Profile = (
  <div class="profile">
    <div class="description">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"
        alt="Аватар пользователя"
        class="avatar"
      />
      <p class="name">Petra Marica</p>
      <p class="tag">@jgluke</p>
      <p class="location">Ocho Rios, Jamaica</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">5603</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">4827</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">1308</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(Profile, document.getElementById("root"));

export default Profile;

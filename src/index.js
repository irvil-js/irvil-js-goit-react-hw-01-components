import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const Profile = (
//   <div className="profile">
//     <div className="description">
//       <img
//         src="https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"
//         alt="Аватар пользователя"
//         className="avatar"
//       />
//       <p className="name">Petra Marica</p>
//       <p className="tag">@jgluke</p>
//       <p className="location">Ocho Rios, Jamaica</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">Followers</span>
//         <span className="quantity">5603</span>
//       </li>
//       <li>
//         <span className="label">Views</span>
//         <span className="quantity">4827</span>
//       </li>
//       <li>
//         <span className="label">Likes</span>
//         <span className="quantity">1308</span>
//       </li>
//     </ul>
//   </div>
// );

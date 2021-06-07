import React from "react";
import ProfileCard from "./components/Profile";
import Profile from "./index.js";
import user from "./user.json";

const App = () => (
  //   <>
  //     <Profile
  //       name={user.name}
  //       tag={user.tag}
  //       location={user.location}
  //       avatar={user.avatar}
  //       stats={user.stats}
  //     />
  //   </>

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
  <div>
    <ProfileCard
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </div>
);

export default App;

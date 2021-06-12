import React from "react";
import ProfileCard from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";
import FriendList from "./components/FriendsList/FriendsList";
import friends from "./components/FriendsList/Friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => (
  <>
    <ProfileCard
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </>
);

export default App;

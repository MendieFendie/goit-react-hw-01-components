import React from 'react';
import Profile from './profile/profile';
import user from '../path/user.json';
import StatisticsList from './statistics/statisticsList';
import data from '../path/data.json';
import Friends from './friendList/friendList';
import friends from '../path/friends.json';
import Transaction from './transactionHistory/transactionHistoryList';
import transactions from '../path/transactions.json';
export const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <StatisticsList data={data} />
        <Friends friends={friends} />
        <Transaction transactions={transactions} />
      </div>
    </React.StrictMode>
  );
};

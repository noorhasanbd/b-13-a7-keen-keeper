import React from 'react';
import HomeTitle from '../../components/homeTitle/HomeTitle';
import HomeStatusCard from '../../components/HomeStatusCard/HomeStatusCard';
import FriendCard from '../../components/FriendsCard/FriendCard';
import AllFriends from '../../components/allFriends/AllFriends';
import FriendDetailsCard from '../../components/FriendDetailsCard/FriendDetailsCard';

const HomePage = () => {
    return (
        <div>
            <HomeTitle/>
            <HomeStatusCard/>
            <AllFriends/>
            
        </div>
    );
};

export default HomePage;
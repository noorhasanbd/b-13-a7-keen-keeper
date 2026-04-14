import React from 'react';
import HomeTitle from '../../components/homeTitle/HomeTitle';
import HomeStatusCard from '../../components/HomeStatusCard/HomeStatusCard';
import FriendCard from '../../components/FriendsCard/FriendCard';

const HomePage = () => {
    return (
        <div>
            <HomeTitle/>
            <HomeStatusCard/>
            <FriendCard/>
        </div>
    );
};

export default HomePage;
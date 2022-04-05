import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        { id: 'u1', name: 'Heinz Müller', image: 'https://images.squarespace-cdn.com/content/v1/52f8d601e4b0c2f2c1ef74bc/1521393052551-GS13AMHX7KVXBAMVTMA9/Businessfotografie-Hamburg--Jens-Hannewald_DSCDSC3251.jpg?format=2500w', places: 3 },
        { id: 'u2', name: ' Lisa Müller', image: 'https://www.myposter.de/magazin/wp-content/uploads/2016/06/Portrait-junge-Frau-Brille-shutterstock_118972231_kl.jpg', places: 2 }
    ];

    return <UsersList items={USERS} />
};
export default Users;
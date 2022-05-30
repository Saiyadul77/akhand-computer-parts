import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import User from './User';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://secret-fjord-21413.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Product Quantity</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user, index)=><User
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           ></User>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
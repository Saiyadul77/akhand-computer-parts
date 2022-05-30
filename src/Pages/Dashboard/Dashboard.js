import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-4xl text-center font-bold text-primary'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
                
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-40 mt-12 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    {admin && <li><Link to="/dashboard/admin">Admin</Link></li>}
                    {admin && <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>}
                    {admin && <li><Link to="/dashboard/addItem">Add Product</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Link } from 'react-router-dom';


const InventoryDetail = () => {
    return (
        <div className='text-center'>
            
            <div>
                <Link to={`/manageItem`}>
                    <button className='btn btn-primary'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;
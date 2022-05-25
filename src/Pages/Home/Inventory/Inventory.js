import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Inventory.css'

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url=`http://localhost:5000/service`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div id="inventory">
            <h1 className='text-center text-primary mt-5'>Inventory Product</h1>
            <div className='items-container'>

                {
                    items.slice(0, 6).map(item => <Item key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            
        </div>
    );
};

export default Inventory;
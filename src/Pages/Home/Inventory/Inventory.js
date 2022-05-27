import React, { useEffect, useState } from 'react';
import BuyingModel from '../BuyingModel/BuyingModel';
import Item from '../Item/Item';
import './Inventory.css'

const Inventory = () => {
    const [items, setItems] = useState([]);
    const [product, setProduct]= useState(null)

    useEffect(() => {
        const url=`parts.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div id="inventory">
            <h1 className='text-5xl text-center text-primary mb-5'>Latest Computer Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    items.slice(0, 6).map(item => <Item key={item._id}
                        item={item}
                        setProduct={setProduct}
                    ></Item>)
                }
            </div>
            {product && <BuyingModel
             product={product}
             setProduct={setProduct}
             ></BuyingModel>}
            
        </div>
    );
};

export default Inventory;
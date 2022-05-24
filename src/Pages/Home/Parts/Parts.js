import React, { useEffect, useState } from 'react';
import PartsInfo from './PartsInfo/PartsInfo';

const Parts = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        const url=`http://localhost:5000/service`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data));

    },[])
    return (
        <div>
            <h1>This is parts: {products.length}</h1>
            <div className='grid grid-cols-3'>
            {
                products.slice(0,6).map(product=><PartsInfo key={product.id} product={product}>
                    
                </PartsInfo>)
            }
            </div>
        </div>
    );
};

export default Parts;
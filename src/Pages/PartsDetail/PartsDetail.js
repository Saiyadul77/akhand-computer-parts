import React from 'react';
import { useParams } from 'react-router-dom';
import usePartsDetail from '../../hooks/usePartsDetail';

const PartsDetail = () => {
    const {partsId}=useParams();
    const [product]=usePartsDetail(partsId)
    return (
        <div className='text-center w-50 mx-auto'>
            {/* <h1>This is service detail:{inventoryId}</h1> */}
            <h3>{product.name}</h3>
            <img src={product.img} alt="" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity:{product.quantity}</p>
            <button className='btn btn-primary'>Delivered</button><br />
            <input type="text" placeholder='Restock the Item' required/>
            <input type="submit" value="Restock" />
        </div>
    );
};

export default PartsDetail;
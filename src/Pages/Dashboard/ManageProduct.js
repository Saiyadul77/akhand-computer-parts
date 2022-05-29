import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices/useServices';

const ManageProduct = () => {
    const [services, setServices] = useServices();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://secret-fjord-21413.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);

                })
        }
    }
    return (
        <div className='m-5'>
            <h1 className='text-center text-primary mt-5 text-3xl'>Total Inventory Product: {services.length}</h1>
            <Link to={`/addItem`}>
                <button className='btn btn-primary w-100 mx-auto'>Add More Item</button>
            </Link>
            <div className='items-container'>
                {
                    services.map(service => <div key={service._id}>
                        <h5>{service.name}</h5>
                        <img src={service.img} alt="" />
                        <p>{service.description}</p>
                        <p>Price: ${service.price}</p>
                        <p>Quantity: {service.quantity}</p>
                        <p>Supplier Name:{service.supplier}</p>
                        <button className='btn btn-primary' onClick={() => handleDelete(service._id)}>Delete Product</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;
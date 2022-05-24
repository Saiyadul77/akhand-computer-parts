import React, { useEffect, useState } from 'react';

const useServicesDetail = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [products, setProducts]
};

export default useServicesDetail;
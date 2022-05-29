import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        const url = `https://secret-fjord-21413.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },    // coma na deoar karone lal bati dekhaise
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.insertedId){
                    toast('Additing your Item!!');
                    
                }
            })
            

    };

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center mt-3'>Please add to service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Book Name'{...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <textarea className='mb-2' placeholder='Description'{...register("description")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier Name'{...register("supplierName", { required: true, maxLength: 20 })} />
                <input className='text-white bg-primary' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;
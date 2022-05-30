import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddItem = () => {
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
        <div className='ml-20'>
            <h1 className='text-center mt-3 text-3xl'>Add New Product</h1>
            <form className='justify-center items-center ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 input w-full max-w-xs' placeholder='Product Name'{...register("name", { required: true })} /> <br />
                <input className='mb-2 input w-full max-w-xs' placeholder='Unit Price' type="number" {...register("price")} /> <br />
                <textarea className='mb-2 input w-full max-w-xs' placeholder='Description'{...register("description")} /> <br />
                <input className='mb-2 input w-full max-w-xs' placeholder='Photo URL' type="text" {...register("img")} /><br />
                <input className='mb-2 input w-full max-w-xs' placeholder='Available Quantity' type="number" {...register("quantity")} /><br />
                <input className='mb-2 input w-full max-w-xs' placeholder='Minimum order' type="number" {...register("minquantity")} /><br />
                {/* <input className='mb-2 input w-full max-w-xs' placeholder='Supplier Name'{...register("supplierName", { required: true, maxLength: 20 })} /><br /> */}
                <input className='text-white bg-primary input w-full max-w-xs' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddItem;
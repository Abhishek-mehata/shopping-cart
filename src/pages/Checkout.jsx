import React, { useState } from 'react'
import { useEffect, useContext } from 'react'
import { ProductsContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, setCartItems } = useContext(ProductsContext);


    const [totalAmount, setTotalAmount] = useState(0);
    const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        let total = 0;

        cartItems.forEach(item => {
            total += item.price;
        });

        setTotalAmount(total)

    }, [cartItems])
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: ""
    });

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const { name, phone, address } = formData;
        if (name && phone && address) {
            alert("Order placed successfully!")
            // Reset form data
            setFormData({
                name: "",
                phone: "",
                address: ""
            });

            setCartItems([]);
            localStorage.setItem("cartItems", JSON.stringify([]));

            // Navigate to order confirmation page or show success message
            // navigator("/");
            navigate("/")


        } else {
            alert("Please fill all the fields!")
        }
    }


    return (

        <div>

            {
                showForm ?
                    (
                        <div>
                            <form
                                onSubmit={handlePlaceOrder}
                                className='max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-lg my-6'>
                                <h2 className='text-xl font-bold text-white mb-4 text-center'>Shipping Form</h2>

                                <input
                                    type="text"
                                    placeholder='Enter your FUll Name'
                                    required={true}
                                    className='w-full p-2 mb-4 rounded text-white border border-gray-600 bg-gray-800 outline-0 focus:ring-2 focus:ring-blue-500'
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value
                                        });

                                        // console.log(formData)
                                    }}
                                />

                                <input
                                    type="text"
                                    placeholder='Enter Your Phone Number'
                                    className='w-full p-2 mb-4 rounded text-white border border-gray-600 bg-gray-800 outline-0 focus:ring-2 focus:ring-blue-500'
                                    required={true}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value
                                        });
                                        // console.log(formData)
                                    }}
                                />

                                <textarea
                                    name="address"
                                    id="address"
                                    className='w-full p-2 mb-4  rounded text-white border border-gray-600 bg-gray-800 outline-0 focus:ring-2 focus:ring-blue-500'
                                    placeholder='Enter Your Address Here'
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            address: e.target.value
                                        });
                                        // console.log(formData)
                                    }}
                                ></textarea>

                                <div className='w-full flex justify-around gap-2'>

                                    <button
                                        type='submit'
                                        className='px-6 py-2 bg-blue-500 text-white text-[18px] rounded-full cursor-pointer hover:bg-blue-600 transition duration-150 '
                                        onClick={() => {
                                            // alert("Order Placed Successfully!")

                                        }}
                                    >
                                        COD
                                    </button>

                                    <button
                                        type='button'
                                        className='px-6 py-2 bg-blue-500 text-white text-[18px] rounded-full cursor-pointer hover:bg-blue-600 transition duration-150 '
                                        onClick={() => {
                                            alert("This service is currently not available!")
                                        }}
                                    >
                                        Online Payment
                                    </button>
                                </div>

                                <button
                                    className='mt-4 px-6 py-2 bg-gray-500 text-white text-[18px] rounded-full cursor-pointer hover:bg-gray-600 transition duration-150 '
                                    onClick={() => setShowForm(false)}
                                >
                                    Back To Cart
                                </button>


                            </form>
                        </div>)
                    :
                    (
                        <div>
                            <h1 className='text-3xl font-bold text-center'>Checkout Page</h1>
                            <p className='text-center text-base'>Items in cart: {cartItems.length}</p>

                            <table className="w-full mt-6 border border-gray-700 rounded-lg overflow-hidden">
                                <thead className="bg-gray-800">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
                                            Product Name
                                        </th>
                                        <th className="px-4 py-3 text-right text-sm font-semibold text-gray-200">
                                            Price
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-t border-gray-700 hover:bg-gray-700 transition"
                                        >
                                            <td className="px-4 py-3 text-sm">
                                                {item.title}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-right font-medium">
                                                ${item.price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-6 text-right">
                                <span className="text-xl font-bold">
                                    Total: $
                                    {/* {cartItems.reduce((total, item) => total + item.price, 0)} */}
                                    {/* {(totalAmount.toString().includes(".")) ? totalAmount.toFixed(2) : totalAmount} */}
                                    {totalAmount.toFixed(2)}

                                </span>
                            </div>

                            <div>
                                <button
                                    onClick={() => {
                                        setShowForm(!showForm);
                                    }}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-4 py-2 px-4 rounded cursor-pointer"
                                >
                                    Pay Now
                                </button>


                            </div>

                        </div>)
            }

        </div >
    )
}

export default Checkout



// Product A   $10
// Product B   $15
// ----------------
// Total:      $25

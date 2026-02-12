import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContext'

const CartPage = () => {
    const [totalAmount, setTotalAmount] = useState(0);

    const { cartItems, setCartItems, saveToLocalStorage } = useContext(ProductsContext);
    console.log(cartItems)

    const calculateTotalAmount = () => {
        let total = 0;

        cartItems.forEach(item => {
            total += item.price;
        })
        setTotalAmount(total);
    }

    const handleRemoveFromCart = (itemIndex) => {

        const updatedCartItems = cartItems.filter((_, index) => index !== itemIndex);
        setCartItems(updatedCartItems);
        saveToLocalStorage("cartItems", updatedCartItems)
    }
    useEffect(() => {
        calculateTotalAmount();
    }, [cartItems])



    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Carts Page</h1>
            <p className='text-xl text-center'>Total Amount: ${totalAmount}</p>
            {
                cartItems.length > 0 && (
                    <div className='text-center mt-[10px]'>
                        {/* <button className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-[10px] cursor-pointer'>Proceed To Checkout</button> */}
                        <Link
                            to={"/checkout"}
                            className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-[10px] cursor-pointer'
                        >Proceed To Checkout</Link>
                    </div>
                )
            }

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-[20px]'>
                {
                    cartItems.map((item, index) => {
                        return (
                            <div key={index} className='bg-gray-700 h-[350px] p-4 rounded-xl shadow-lg flex flex-col gap-3 hover:scale-[1.02] transition duration-150'>
                                {/* Product Title */}
                                <h2 className='text-base font-semibold text-clip'>{item.title}</h2>
                                <img src={item.image} alt={item.title} className="w-full h-[150px] object-cover rounded-lg" />
                                {/* ss */}
                                <p className='text-sm text-gray-300 line-clamp-3'>{item.description}</p>
                                <p className='text-2xl font-bold '>${item.price}</p>
                                <button
                                    onClick={() => handleRemoveFromCart(index)}
                                    className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mt-auto cursor-pointer'
                                >Remove from cart</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CartPage
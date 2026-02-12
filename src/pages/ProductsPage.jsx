import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductContext'


const ProductsPage = () => {
    const { products, setProducts, cartItems, setCartItems, saveToLocalStorage } = useContext(ProductsContext);

    // console.log(products, "products from context")
    // console.log(cartItems, "cart from context")

    // const addToCart = (product) => {
    //     const updatedCartItems = [...cartItems, product];
    //     setCartItems(updatedCartItems);
    //     saveToLocalStorage(updatedCartItems, products);
    // }

    const handleCartButtonClick = (product) => {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        saveToLocalStorage("cartItems", updatedCartItems)
    }

    return (
        <div className=''>
            <h1 className='text-3xl font-bold text-center my-4'>Products Page</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {products.map(product => (
                    <div key={product.id} className='bg-gray-700 transition-all duration-150 shadow-2xl w-full h-[400px] p-4 rounded  flex flex-col gap-2'>
                        <h2 className='text-[16px] font-semibold my'>{product.title}</h2>
                        <img src={product.images} alt={product.title} className='w-full h-[36%] ' />

                        {/* <p ></p> */}
                        <p className='text-[15px] '>{product.description}</p>
                        {/* <p className='text-lg font-semibold mt-auto'>${product.price}</p> */}
                        <p className='text-[28px] font-semibold'>${product.price}</p>

                        <div className='flex items-center justify-between'>
                            {/* <p className='text-sm text-gray-400'>Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
                            <span className='text-[16px]'>Rating</span>
                            <span className='text-sm text-gray-400'>{product.rating ? product.rating.rate : "N/A"} ({product.rating ? product.rating.count : "0"} reviews)</span>
                        </div>

                        {/* <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Add To Cart</button>
                        <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Buy Now</button> */}
                        <div className='flex gap-2 mt-auto'>
                            <button
                                className='w-full bg-gray-900 text-white px-4 py-2 rounded cursor-pointer'
                                onClick={() => {
                                    // console.log("clicked", product)
                                    handleCartButtonClick(product)
                                }}
                            >Add To Cart</button>
                            {/* <button className='text-white px-4 py-2 rounded'>Buy Now</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsPage










// import React, { useContext } from 'react'
// import { ProductsContext } from '../context/ProductContext'

// const ProductsPage = () => {
//     const { productsData } = useContext(ProductsContext)

//     return (
//         <div className="px-4 py-6">
//             <h1 className="text-3xl font-bold text-center my-6">
//                 Products Page
//             </h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {productsData.map(product => (
//                     <div
//                         key={product.id}
//                         className="bg-gray-700 p-4 rounded-xl shadow-lg flex flex-col gap-3 hover:scale-[1.02] transition"
//                     >
//                         {/* Product Title */}
//                         <h2 className="text-base font-semibold line-clamp-1">
//                             {product.title}
//                         </h2>

//                         {/* Product Image */}
//                         <img
//                             src={product.images}
//                             alt={product.title}
//                             className="w-full h-40 object-contain bg-white rounded-md p-2"
//                         />

//                         {/* Product Description */}
//                         <p className="text-sm text-gray-300 line-clamp-3">
//                             {product.description}
//                         </p>

//                         {/* Price */}
//                         <p className="text-2xl font-bold text-green-400">
//                             ${product.price}
//                         </p>

//                         {/* Rating */}
//                         <div className="flex items-center justify-between text-sm">
//                             <span className="text-gray-300">Rating</span>
//                             <span className="text-yellow-400">
//                                 {product.rating ? product.rating.rate : "N/A"} ⭐
//                                 <span className="text-gray-400">
//                                     {" "}({product.rating ? product.rating.count : "0"})
//                                 </span>
//                             </span>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex gap-2 mt-auto">
//                             <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition">
//                                 Add To Cart
//                             </button>
//                             <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition">
//                                 Buy Now
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ProductsPage

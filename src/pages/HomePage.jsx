import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductContext.jsx'

const HomePage = () => {
    const {products} = useContext(ProductsContext);
    console.log(products)
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-100px)]'>

            <div>
                <div className='text-center max-w-2xl px-4'>
                    <h1 className='text-6xl font-light mb-6 tracking-wide'>Shop Smart</h1>
                    <p className='text-gray-400 text-xl mb-12'>Find everything you need in one place</p>
                    <Link to={"/products"} className='inline-block bg-gray-700 hover:bg-gray-600 px-10 py-4 text-lg transition duration-200'>
                        Start Shopping
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomePage





// import React from 'react'
// import { Link } from 'react-router-dom'

// const HomePage = () => {
//   return (
//     <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
//       <div className="text-center max-w-2xl px-4">
//         <h1 className="text-6xl font-light mb-6 tracking-wide">Shop Smart</h1>
//         <p className="text-gray-400 text-xl mb-12">Find everything you need in one place</p>
//         <Link 
//           to="/products" 
//           className="inline-block bg-gray-700 hover:bg-gray-600 px-10 py-4 text-lg transition duration-200"
//         >
//           Start Shopping
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default HomePage
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
// import { useContext } from 'react'
// import { ProductsProvider } from './context/ProductContext.jsx'
import { ProductsContext } from './context/ProductContext.jsx'

const App = () => {
  const { cartItems } = useContext(ProductsContext);

  const [showCartIndicator, setShowCartindicator] = useState(false);
  const prevCartItemsLength = useRef(cartItems.length);

  useEffect(() => {
    if (prevCartItemsLength.current !== cartItems.length) {
      setShowCartindicator(true);

      const timer = setTimeout(() => {
        setShowCartindicator(false);
      }, 2000);
      prevCartItemsLength.current = cartItems.length;

      return () => clearTimeout(timer);
    }
    // console.log(cartItems)

  }, [cartItems.length])

  return (
    <div className='w-full h-screen overflow-auto bg-gray-800 text-gray-50'>

      <nav className='bg-gray-900 p-4 text-[18px] flex gap-6'>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>

        <Link to={"/cart"} className='relative'>
          Cart

          {showCartIndicator && (
            <span className='absolute -top-[15px] -right-3 bg-red-500 text-white  text-[13px] px-2 py-0.5 rounded-full animate-pulse '>
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>



      <div className='p-2 '>
        <Outlet />
      </div>

    </div>
  )
}

export default App
import { createBrowserRouter } from "react-router-dom";

// Components and pages imports would go here
import App from "../App.jsx"
import HomePage from "../pages/HomePage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import Checkout from "../pages/Checkout.jsx";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>404 this route could not be found! :</div>,
        children: [
            // Define child routes here
            { index: true, element: <HomePage /> },
            { path: "products", element: <ProductsPage /> },
            { path: "cart", element: <CartPage /> },
            { path: "checkout", element: <Checkout /> },
        ]

    }
]);


export default routes;
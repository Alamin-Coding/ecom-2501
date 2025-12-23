import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/easin/Home";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import LoginPages from "./pages/Login";
import ErrorPages from "./pages/Error";
import ProductDetails from "./pages/easin/ProductDetails";
import CheckOut from "./pages/easin/CheckOut";
import Wishlist from "./pages/easin/Wishlist";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{ index: true, Component: Home },
			{ path: "about", Component: About },
			{ path: "contact", Component: Contact },
			{ path: "account", Component: Account },
			{ path: "cart", Component: Cart },
			{ path: "shop", Component: Shop },
			{ path: "signup", Component: Signup },
			{ path: "login", Component: LoginPages },
			{ path: "product/details/:id", Component: ProductDetails },
			{ path: "checkout", Component: CheckOut },
			{ path: "wishlist", Component: Wishlist },
			{ path: "*", Component: ErrorPages },
			{ path: "product/search", Component: SearchPage },
		],
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;

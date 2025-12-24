import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Products from './products';
import UserProfile from '../profile';
import Search from './search';
import PaymentHistory from './payment';
import MyCart from './cart';
import MyOrders from './orders';
import MyAddresses from './address';
import PageNotFound from '../../pages/pagenotfound';

import '../../styles/buyer.css';

function Buyer() {
    const [addToCart, setAddToCart] = useState({})
    const [productsAndVariants, setProductsAndVariants] = useState([]);
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState('profile')

    const handleClick = async (event) => {
        if(event === 'logout') {
            console.log(event);
            try {
                const response = await fetch("http://localhost:8000/users/logout/", {
                    method: "POST",
                    credentials: "include",
                });

                console.log("Logout Response Status:", response.status);

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error("Backend Error:", errorText);
                    throw new Error("Logout failed");
                }

                const data = await response.json();
                alert(data.message);
                navigate("/", { replace: true });

            } catch (err) {
                console.error("Logout failed:", err);
            }
            return ;
        } 
        setActivePage(event);
    };

    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Buyer Dashboard</h2>
                <ul>
                    <li    
                        onClick={
                            () => handleClick('search')
                        }
                    >
                        Search
                    </li>
                    <li    
                        onClick={
                            () => handleClick('products')
                        }
                    >
                        Products
                    </li>
                    <li    
                        onClick={
                            () => handleClick('my_orders')
                        }
                    >
                        My Orders
                    </li>
                    <li    
                        onClick={
                            () => handleClick('my_cart')
                        }
                    >
                        My Cart
                    </li>
                    <li    
                        onClick={
                            () => handleClick('my_address')
                        }
                    >
                        My Addresses
                    </li>
                    <li    
                        onClick={
                            () => handleClick('pay_history')
                        }
                    >
                        Payment History
                    </li>
                    <li
                        onClick={
                            () => handleClick('profile')
                        }
                    >
                        My Profile
                    </li>
                    <li
                        onClick={
                            () => handleClick('logout')
                        }
                    >
                        Logout
                    </li>
                </ul>
            </div>

            <div className="body">
                {activePage === 'products' && (
                    <Products
                    addToCart={addToCart}
                    setAddToCart={setAddToCart}
                    productsAndVariants={productsAndVariants}
                    setProductsAndVariants={setProductsAndVariants}
                    />
                )}

                {activePage === 'my_cart' && (
                    <MyCart
                    addToCart={addToCart}
                    productsAndVariants={productsAndVariants}
                    />
                )}

                {activePage === 'profile' && <UserProfile />}
                {activePage === 'search' && <Search />}
                {activePage === 'my_orders' && <MyOrders />}
                {activePage === 'my_address' && <MyAddresses />}
                {activePage === 'pay_history' && <PaymentHistory />}
            </div>
        </div>
    );
}

export default Buyer;

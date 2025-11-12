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
    const navigate = useNavigate();
    const [bodyComponent, setBodyComponent] = useState(<Products />);

    const handleClick = (event) => {
        if(event === 'logout') {
            console.log(event);
            alert("Loging Out");
            navigate('/');
        } else if(event === 'products') {
            setBodyComponent(<Products />);
        } else if(event === 'profile') {
            setBodyComponent(<UserProfile />);
        } else if(event === 'search') {
            setBodyComponent(<Search />);
        } else if(event === 'pay_history') {
            setBodyComponent(<PaymentHistory />);
        } else if(event === 'my_cart') {
            setBodyComponent(<MyCart />);
        } else if(event === 'my_orders') {
            setBodyComponent(<MyOrders />);
        } else if(event === 'my_address') {
            setBodyComponent(<MyAddresses />);
        } else {
            setBodyComponent(<PageNotFound />)
        }
    }

    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Dashboard</h2>
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
                {bodyComponent}
            </div>
        </div>
    );
}

export default Buyer;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SoldOuts from './soldouts';
import UserProfile from '../profile';
import PaymentHistory from './payment';
import SellMyProducts from './sell';
import PageNotFound from '../../pages/pagenotfound';

import '../../styles/seller.css';

function Seller() {
    const navigate = useNavigate();
    const [bodyComponent, setBodyComponent] = useState(<UserProfile />);

    const handleClick = (event) => {
        if(event === 'logout') {
            console.log(event);
            alert("Loging Out");
            navigate('/');
        } else if(event === 'soldouts') {
            setBodyComponent(<SoldOuts />);
        } else if(event === 'sell') {
            setBodyComponent(<SellMyProducts />);
        } else if(event === 'profile') {
            setBodyComponent(<UserProfile />);
        } else if(event === 'pay_history') {
            setBodyComponent(<PaymentHistory />);
        } else {
            setBodyComponent(<PageNotFound />)
        }
    }

    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Seller Dashboard</h2>
                <ul>
                    <li    
                        onClick={
                            () => handleClick('soldouts')
                        }
                    >
                        Sold Outs
                    </li>
                    <li    
                        onClick={
                            () => handleClick('sell')
                        }
                    >
                        Sell My Products
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

export default Seller;

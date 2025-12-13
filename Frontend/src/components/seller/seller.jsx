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

    const handleClick = async (event) => {
        if(event === 'logout') {
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

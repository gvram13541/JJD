import { useState } from 'react';
import '../styles/register.css';

function Register({setComp}) {
    const [role, setRole] = useState('buyer');

    const handleRoleChange = (event) => {
        const value = event.target.value;
        setRole(value);
    };

    return (
        <div className="register">
            <form action="#" method="POST" className="registerForm">
                
                <div className='sets'>
                    <div className='set1'>
                        <label htmlFor="emailid">Name:</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="pnumber">Phone Number:</label>
                        <input type="text" id="pnumber" name="pnumber" />

                        <label htmlFor="emailid">Email ID:</label>
                        <input type="text" id="emailid" name="email" />

                        <label htmlFor="village">Village/City Name:</label>
                        <input type="text" id="village" name="village" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div className='set2'>
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" name="street" />

                        <label htmlFor="district">District:</label>
                        <input type="text" id="district" name="district" />

                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" />

                        <label htmlFor="pincode">PinCode:</label>
                        <input type="text" id="pincode" name="pincode" />

                        <label htmlFor="cpassword">Confirm Password:</label>
                        <input type="password" id="cpassword" name="cpassword" />
                    </div>
                </div>

                <label>Register as:</label>
                <div className="radioGroup">
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="buyer"
                            checked={role === 'buyer'}
                            onChange={handleRoleChange}
                        />
                        Buyer
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="seller"
                            checked={role === 'seller'}
                            onChange={handleRoleChange}
                        />
                        Seller
                    </label>
                </div>

                <div className="formButtons">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                </div>
            </form>

            <div className="loginPrompt">
                <a 
                    onClick={(e) => {
                        e.preventDefault();
                        setComp("login")
                    }

                    }   
                >
                    Have an account? Login Now!
                </a>
            </div>
        </div>
    );
}

export default Register;
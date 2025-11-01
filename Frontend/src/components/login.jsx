import { useState } from 'react';
import '../styles/login.css';

function Login() {
    const [role, setRole] = useState('buyer');
    const [message, setMessage] = useState('Loging in as Buyer');

    const handleRoleChange = (event) => {
        const value = event.target.value;
        setRole(value);

        if (value === 'seller') {
            setMessage('Logging in as Seller');
        } else if (value === 'buyer') {
            setMessage('Logging in as Buyer');
        } else {
            setMessage('Login');
        }
    };

    return (
        <div className="login">
            <form action="#" method="POST" className="loginForm">
                <h2>{message}</h2>

                <div className='username'>
                    <div className="field">
                      <label htmlFor="pnumber">Phone Number:</label>
                      <input type="text" id="pnumber" name="pnumber" />
                    </div>
                    <div className="or">or</div>
                    <div className="field">
                      <label htmlFor="emailid">Email ID:</label>
                      <input type="text" id="emailid" name="email" />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>

                <label>Logging in as:</label>
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

            <div className="registerPrompt">
                <a href="#">Don't have an account? Register Now!</a>
            </div>
        </div>
    );
}

export default Login;

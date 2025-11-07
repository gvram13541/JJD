import { useState } from 'react';
import '../styles/login.css';

import Register from './register';

function Login({setComp}) {
    const [formData, setFormData] = useState({
        phone_number: "",
        email: "",
        password: "",
        role: "buyer"
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if ((!formData.phone_number && !formData.email) || !formData.password || !formData.role) {
            alert("Please provide required fields (Phone/Email, Password, and Role)");
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/users/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if(!response.ok){
                throw new Error("Failed to login!");
            }

            const data = await response.json();
            console.log("Login Successful", data);
            alert("Login Successful");
            setComp("register");
        } catch(err) {
            console.error("Error occured: ", err);
            alert("Login Failed!");
        }
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="loginForm">
                <h2>Loging in as a {formData.role}</h2>

                <div className='username'>
                    <div className="field">
                      <label>Phone Number:</label>
                      <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange}/>
                    </div>
                    <div className="or">or</div>
                    <div className="field">
                      <label>Email ID:</label>
                      <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                </div>
                
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                </div>

                <label>Logging in as:</label>
                <div className="radioGroup">
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="buyer"
                            checked={formData.role === "buyer"}
                            onChange={handleChange}
                        />
                        Buyer
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="seller"
                            checked={formData.role === 'seller'}
                            onChange={handleChange}
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
                <a 
                    onClick={(e) => {
                        e.preventDefault();
                        setComp("register")
                    }

                    }   
                >
                    Don't have an account? Register Now!
                </a>
            </div>
        </div>
    );
}

export default Login;

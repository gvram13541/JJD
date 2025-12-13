import { useState } from 'react';
import '../styles/register.css';

function Register({setComp}) {
    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        email: "",
        password: "",
        cpassword: "",
        village: "",
        street: "",
        district: "",
        state: "",
        pincode: "",
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

        if(formData.password !== formData.cpassword){
            alert("Password donot Match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/users/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            console.log(response)

            if(!response.ok){
                throw new Error("Failed to register!");
            }

            const data = await response.json();
            console.log("Registered Successfully", data);
            alert("Registration Sucessful!");
            setComp("login");
        } catch (err) {
            console.error("Error: ", err);
            alert("Error while Registring!");
        }
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="registerForm">
                <div className="sets">
                    <div className="set1">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />

                        <label>Phone Number:</label>
                        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />

                        <label>Email ID:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />

                        <label>Village:</label>
                        <input type="text" name="village" value={formData.village} onChange={handleChange} />

                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>

                    <div className="set2">
                        <label>Street:</label>
                        <input type="text" name="street" value={formData.street} onChange={handleChange} />

                        <label>District:</label>
                        <input type="text" name="district" value={formData.district} onChange={handleChange} />

                        <label>State:</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} />

                        <label>PinCode:</label>
                        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />

                        <label>Confirm Password:</label>
                        <input type="password" name="cpassword" value={formData.cpassword} onChange={handleChange} />
                    </div>
                </div>

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
                    checked={formData.role === "seller"}
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
import { useState } from "react"

import '../../styles/login.css';

function Search() {

    const items = ['milk', 'curd', 'panner', 'ghee', 'buffallo milk', 'cow milk', 'honey'];

    const [formData, setFormData] = useState({
        search: "",
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

        try {
            console.log("Searched!");
            const searchTerm = formData.search.toLowerCase();

            if (Array.isArray(items)) {
            if (items.includes(searchTerm)) {
                alert(`You are looking for: ${formData.search}`);
            } else {
                alert("Couldn't find what you are looking for...Sorry!");
            }
            } else if (searchTerm in items) {
            alert(`You are looking for: ${formData.search}`);
            } else {
            alert("Couldn't find what you are looking for...Sorry!");
            }
        } catch (err) {
            console.error("Error occurred:", err);
            alert("An error occurred while searching.");
        }
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit} className="loginForm">
                <h2>What Are You Looking For?</h2>
                <div>
                    {/* <label>What Are You Looking For?: </label> */}
                    <input type="text" name="search" value={formData.search} onChange={handleChange}/>
                </div>
                <div className="formButtons">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
        </div>
    )
}

export default Search;

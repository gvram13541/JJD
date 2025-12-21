import { useEffect, useState } from 'react';

import '../../styles/buyer.css';

function Products() {
    const [selectedOption, setSelectedOption] = useState(false);
    const [itemsList, setItemsList] = useState([]);
    const [productVariantsList, setProductVariantsList] = useState([]);

    const getItemsList = async () => {
        try {
            const response = await fetch("http://localhost:8000/inventory/getproducts/", {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if(!response.ok) {
                throw new Error("Failed to fecth the items list");
            }
            
            const data = await response.json();
            console.log(data.itemsList)
            setItemsList(data.itemsList)
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    const getProductWiseVariants = async () => {
        try {
            const response = await fetch("http://localhost:8000/inventory/getproductvariants/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if(!response.ok) {
                throw new Error("Failed to fetch product varaints from backend");
            }
            const data = await response.json();
            console.log(data.pwv)
            setProductVariantsList(data.pwv)
        } catch(error) {
            console.error("Error fetching product variants: ", error)
        }
    }

    useEffect(() => {
        getItemsList();
    }, []);

    useEffect(() => {
        getProductWiseVariants();
    }, []);

    const handleOptionChange = (event) => {
        console.log("Options");
    };

    const handleAddToCart = (event) => {
        console.log("Adding to Cart");
    };

    const handleQuantity = (event) => {
        console.log("Buying");
    };

    return(
        <div className="product-grid">
            {itemsList.map(p => (
                <div className="card" key={p.i_id}>
                    <img src={p.image_path} alt={p.i_name} />
                    <h3>{p.i_name}</h3>

                    <select name="variant" onChange={handleOptionChange}>
                        <option value="">Select Option</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>

                    <div className="btn-group">
                        <button disabled={!selectedOption} onClick={handleAddToCart}>Add to Cart</button>
                        <div className="quantity">
                            <button disabled={!selectedOption} onClick={handleQuantity}>-1</button>
                            <p className="displayquantity">1</p>
                            <button disabled={!selectedOption} onClick={handleQuantity}>+1</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
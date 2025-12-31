import { useEffect, useState } from "react"

import '../../styles/login.css';

function Search({ 
    productsAndVariants, 
    selectedVariant, 
    addToCart, 
    handleAddToCart, 
    handleQuantityMinus, 
    handleQuantityPlus, 
    handleVariantChange 
}) {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        
        if(!value){
            setSearchResult([]);
            return;
        }

        const results = productsAndVariants.filter(item => 
            item.i_name.toLowerCase().includes(value.toLowerCase())
        );

        setSearchResult(results);
    };

    return (
        <div className="search">
            <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
                <h2>What Are You Looking For?</h2>
                <input type="text" name="search" value={searchValue} onChange={handleChange}/>
            </form>

            <div className="product-grid">
                {searchResult.map(pav => (
                    <div className="card" key={pav.i_id}>
                        <img src={pav.image_path} alt={pav.i_name} />
                        <h3>{pav.i_name}</h3>

                        <select 
                            value={selectedVariant[pav.i_id] || ""} 
                            onChange={(e) => handleVariantChange(pav.i_id, e.target.value)}
                        >
                            <option value="">Select Variants</option>
                            {pav.variants.map((variant) => (
                                <option key={variant.v_id} value={variant.v_id}>
                                    {variant.size} {variant.metric} ₹{variant.cost}
                                </option>
                            ))}
                        </select>

                        <div className="btn-group">
                            <button disabled={!selectedVariant[pav.i_id]} onClick={() => handleAddToCart(pav.i_id, selectedVariant[pav.i_id])}>
                                Add to Cart
                            </button>
                            <div className="quantity">
                                <button disabled={!selectedVariant[pav.i_id]} onClick={() => handleQuantityMinus(selectedVariant[pav.i_id])}>
                                    -1
                                </button>
                                <p className="displayquantity">{addToCart[selectedVariant[pav.i_id]]?.quantity || 0}</p>
                                <button disabled={!selectedVariant[pav.i_id]} onClick={() => handleQuantityPlus(selectedVariant[pav.i_id])}>
                                    +1
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;

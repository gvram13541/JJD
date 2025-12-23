import { useEffect, useState } from 'react';

import '../../styles/buyer.css';

function Products() {
    const [selectedVariant, setSelectedVariant] = useState({});
    const [displayQuantity, setDispalyQuantity] = useState({});
    const [productsAndVariants, setProductsAndVariants] = useState([]);
    const [addToCart, setAddToCart] = useState([]);

    const getProductsAndVariants = async () => {
        try{
            const response = await fetch("http://localhost:8000/inventory/getproductsandvariants/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if(!response.ok){
                throw new Error("Failed to fetch products and respective variants from backend");
            }
            const data = await response.json();
            console.log(data.products_and_variants)
            setProductsAndVariants(data.products_and_variants)
        } catch(error) {
            console.error("Error: ", error)
        }
    }

    useEffect(() => {
        getProductsAndVariants();
    }, []);

    const handleVariantChange = (productId, variantId) => {
        setSelectedVariant(prev => ({
            ...prev,
            [productId]: variantId
        }));

        setDispalyQuantity(prev => ({
            ...prev,
            [variantId]: prev[variantId] || 1
        }));
    };

    const handleAddToCart = (productId, variantId) => {
        setAddToCart(prev => [
            ...prev,
            {
                "ProductID": productId, 
                "VariantID": variantId,
                "Quantity": displayQuantity[variantId]
            }
        ]);
        console.log("Added to Cart");
        console.log("Current Cart: ", addToCart);
    };

    const handleQuantityMinus = (variantId) => {
        setDispalyQuantity(prev => ({
            ...prev,
            [variantId]: Math.max((prev[variantId] || 1)-1, 0)
        }));
        console.log(displayQuantity);
    };

    const handleQuantityPlus = (variantId) => {
        setDispalyQuantity(prev => ({
            ...prev,
            [variantId]: (prev[variantId] || 1)+1
        }))
        console.log(displayQuantity);
    };

    return(
        <div className="product-grid">
            {productsAndVariants.map(pav => (
                <div className="card" key={pav.i_id}>
                    <img src={pav.image_path} alt={pav.i_name} />
                    <h3>{pav.i_name}</h3>

                    <select name="variant" value={selectedVariant[pav.i_id] || ""} onChange={(event) => {handleVariantChange(pav.i_id, event.target.value)}}>
                        <option value="">Select Variants</option>
                        {pav.variants.map(variant => (
                            <option key={variant.v_id + variant.size} value={variant.v_id}>{variant.size} {variant.metric} ₹{variant.cost}</option>
                        ))}
                    </select>

                    <div className="btn-group">
                        <button disabled={!selectedVariant[pav.i_id]} onClick={() => handleAddToCart(pav.i_id, selectedVariant[pav.i_id])}>Add to Cart</button>
                        <div className="quantity">
                            <button disabled={!selectedVariant[pav.i_id]} onClick={() => handleQuantityMinus(selectedVariant[pav.i_id])}>-1</button>
                            <p className="displayquantity">{displayQuantity[selectedVariant[pav.i_id]]}</p>
                            <button disabled={!selectedVariant[pav.i_id]} onClick={() => handleQuantityPlus(selectedVariant[pav.i_id])}>+1</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
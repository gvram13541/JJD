import { useEffect, useState } from 'react';

import '../../styles/buyer.css';

function Products({addToCart, setAddToCart, productsAndVariants, setProductsAndVariants}) {
    const [selectedVariant, setSelectedVariant] = useState({});
    // const [productsAndVariants, setProductsAndVariants] = useState([]);
    // const [addToCart, setAddToCart] = useState({});

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
            console.log(data.products_and_variants);
            setProductsAndVariants(data.products_and_variants);
            sessionStorage.setItem("pav", JSON.stringify(data.products_and_variants));
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
    };

    const handleAddToCart = (productId, variantId) => {
        setAddToCart(prevCart => {
            if(prevCart[variantId]) {
                return {
                    ...prevCart,
                    [variantId]: {
                        ...prevCart[variantId],
                        quantity: prevCart[variantId].quantity + 1
                    }
                };
            } else {
                return {
                    ...prevCart,
                    [variantId]: {
                        productId, quantity: 1
                    }
                }
            }
        });
    };

    useEffect(() => {
        console.log("Cart updated:", addToCart);
    }, [addToCart])

    const handleQuantityMinus = (variantId) => {
        setAddToCart(prevCart => {
            if(!prevCart[variantId]) return prevCart;

            return {
                ...prevCart,
                [variantId]: {
                    ...prevCart[variantId],
                    quantity: Math.max(prevCart[variantId].quantity - 1, 1)
                }
            };
        });
    };

    const handleQuantityPlus = (variantId) => {
        setAddToCart(prevCart => {
            if(!prevCart[variantId]) return prevCart;

            return {
                ...prevCart,
                [variantId]: {
                    ...prevCart[variantId],
                    quantity: prevCart[variantId].quantity + 1
                }
            };
        });
    };

    return(
        <div className="product-grid">
            {productsAndVariants.map(pav => (
                <div className="card" key={pav.i_id}>
                    <img src={pav.image_path} alt={pav.i_name} />
                    <h3>{pav.i_name}</h3>

                    <select name="variant" value={selectedVariant[pav.i_id] || ""} onChange={(event) => {handleVariantChange(pav.i_id, event.target.value)}}>
                        <option value="">Select Variants</option>
                        {Array.from(
                            new Map(
                                pav.variants.map((variant) => [
                                    variant.v_id,
                                    variant,
                                ])
                            ).values()
                        ).map((variant) => (
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
    )
}

export default Products;
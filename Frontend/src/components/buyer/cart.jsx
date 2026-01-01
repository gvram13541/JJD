import "../../styles/address.css";

function MyCart({addToCart = {}, productsAndVariants = [], totals = []}) {
    const variantLookup = {};
    var totalQuantity = 0, totalCost = 0;

    productsAndVariants.forEach(pav => {
        pav.variants.forEach(variant => {
            variantLookup[variant.v_id] = {
                name: pav.i_name,
                image: pav.image_path,
                type: variant.size+variant.metric,
                cost: variant.cost
            };
        });
    });

    const cartList = Object.entries(addToCart).map(([variantId, item]) => {
        const variant = variantLookup[variantId] || {};
        totalQuantity += item.quantity || 0;
        totalCost += (item.quantity || 0) * (variant.cost || 0);
        return {
            variantId,
            name: variant.name || "",
            image: variant.image || "",
            type: variant.type || "",
            quantity: item.quantity || 0,
            cost: variant.cost || 0,
            total: (item.quantity || 0) * (variant.cost || 0)
        };
    });

    return(
        <div className="cart">
            <h2>Did You Forget Anything...</h2>
            {cartList.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
            <table className="address-table">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Image</th>
                        <th>Type</th>
                        <th>Quantity Ordered</th>
                        <th>Cost</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cartList.map((item) => (
                            <tr key={item.variantId}>
                                <td>{item.name}</td>
                                <td>
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} style={{width:60,height:60,objectFit:'cover'}} />
                                    ) : null}
                                </td>
                                <td>{item.type}</td>
                                <td>{item.quantity}</td>
                                <td>₹{item.cost}</td>
                                <td>₹{item.total}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            )}
            <table className="address-table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Total Items: {totalQuantity}</th>
                        <th></th>
                        <th>Total Cost: ₹{totalCost}</th>
                    </tr>
                </thead>
            </table>
            <div className="btn-group">
                <button className="checkout" onClick={() => handleCheckOut()}>
                    Check Out
                </button>
            </div>
        </div>
    )
}

export default MyCart;
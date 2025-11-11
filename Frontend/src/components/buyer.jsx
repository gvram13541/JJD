import '../styles/buyer.css';

function Buyer() {
    const handleOptionChange = (event) => {
        console.log("Options");
    };

    const handleAddToCart = (event) => {
        console.log("Adding to Cart");
    };

    const handleBuyNow = (event) => {
        console.log("Buying");
    };

    const selectedOption = true;

    const products = [
        { id: 1, name: "Milk", img: "milk.jpg" },
        { id: 2, name: "Curd", img: "curd.jpg" },
        { id: 3, name: "Butter", img: "butter.jpg" },
        { id: 4, name: "Cheese", img: "cheese.jpg" },
        { id: 5, name: "Paneer", img: "paneer.jpg" },
        { id: 6, name: "Ghee", img: "ghee.jpg" },
    ];

    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li>Search</li>
                    <li>Products</li>
                    <li>My Orders</li>
                    <li>My Cart</li>
                    <li>My Addresses</li>
                    <li>Payment History</li>
                    <li>My Profile</li>
                    <li>Logout</li>
                </ul>
            </div>

            <div className="body">
                <div className="product-grid">
                    {products.map(p => (
                        <div className="card" key={p.id}>
                            <img src={p.img} alt={p.name} />
                            <h3>{p.name}</h3>

                            <select name="variant" onChange={handleOptionChange}>
                                <option value="">Select Option</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>

                            <div className="btn-group">
                                <button disabled={!selectedOption} onClick={handleAddToCart}>Add to Cart</button>
                                <button disabled={!selectedOption} onClick={handleBuyNow}>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Buyer;

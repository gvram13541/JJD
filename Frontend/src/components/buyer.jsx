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
        { id: 1, name: "Milk", img: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1024x683.jpeg" },
        { id: 2, name: "Curd", img: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2014/06/How-to-set-curd-in-winters-13.jpg.webp" },
        { id: 3, name: "Butter", img: "https://apnifarming.com/wp-content/uploads/2025/02/images-2.jpg" },
        { id: 4, name: "Cheese", img: "https://therecipecritic.com/wp-content/uploads/2025/04/cheese-sauce-4-3.jpg" },
        { id: 5, name: "Paneer", img: "https://5.imimg.com/data5/SELLER/Default/2024/10/459794365/PU/KQ/LI/146757746/fresh-malai-paneer.jpg" },
        { id: 6, name: "Ghee", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Home_made_Ghee.jpg/1200px-Home_made_Ghee.jpg" },
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

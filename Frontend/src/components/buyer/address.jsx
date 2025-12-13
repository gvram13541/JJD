import { useEffect, useState } from "react";
import "../../styles/address.css";

function MyAddresses() {
    const [addressList, setAddressList] = useState([]);

    const getAddresses = async () => {
        try {
            const response = await fetch("http://localhost:8000/users/getaddresses/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Failed to fetch addresses!");
            }

            const data = await response.json();
            setAddressList(data.addresses);
        } catch (error) {
            console.error("Error fetching addresses:", error);
        }
    };

    useEffect(() => {
        getAddresses();
    }, []);

    return (
        <div className="address-container">
            <h2 className="address-title">My Addresses</h2>

            <table className="address-table">
                <thead>
                    <tr>
                        <th>Village</th>
                        <th>Street</th>
                        <th>District</th>
                        <th>State</th>
                        <th>Pincode</th>
                        <th>Default</th>
                    </tr>
                </thead>

                <tbody>
                    {addressList.map((addr) => (
                        <tr key={addr.aid}>
                            <td>{addr.village}</td>
                            <td>{addr.street}</td>
                            <td>{addr.district}</td>
                            <td>{addr.state}</td>
                            <td>{addr.pincode}</td>
                            <td>{addr.is_default ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyAddresses;

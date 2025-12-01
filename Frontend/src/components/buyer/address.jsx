import "../../styles/address.css";

function MyAddresses() {
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
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>No</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyAddresses;

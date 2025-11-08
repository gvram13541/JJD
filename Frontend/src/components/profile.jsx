import { useLocation } from 'react-router-dom';
import '../styles/profile.css';

function UserProfile() {
    const { state } = useLocation();

    if (!state) {
        return <h2>404...Page Not Found!...</h2>;
    }

    const user = state;

    return (
        <div className="userProfile">
            <div className="profile-card">
                <h2 className="profile-title">Profile</h2>

                <div className="sets">

                    <div className="set1">
                        <label>Name: {user.name}</label>
                        <label>Phone Number: {user.phone_number}</label>
                        <label>Email: {user.email}</label>
                        <label>Village: {user.village}</label>
                    </div>

                    <div className="set2">
                        <label>Street: {user.street}</label>
                        <label>District: {user.district}</label>
                        <label>State: {user.state}</label>
                        <label>PinCode: {user.pincode}</label>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserProfile;

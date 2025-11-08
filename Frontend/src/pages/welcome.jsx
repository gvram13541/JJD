import { useState } from 'react';

import Login from '../components/login'
import Register from '../components/register'

import '../styles/welcome.css'
// import dairyImage from '../assets/Dairy-Products.webp';


function Welcome() {
    const [comp, setComp] = useState("login");

    return (
        <> 
            <div className='welcomePage'>
                <div className='heading'>
                    {comp === "login" && <h1>Welcome Back to JJ Dairies</h1>}
                    {comp === "register" && <h1>Welcome to JJ Dairies</h1>}
                </div>

                <div className="welcome">
                    <div className="side1">
                        {comp === "login" && <Login setComp={setComp} />}
                        {comp === "register" && <Register setComp={setComp} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
import Login from '../components/login'

import '../styles/welcome.css'
// import dairyImage from '../assets/Dairy-Products.webp';


function Welcome() {
    return (
        <> 
            <div className='welcomePage'>
                <div className='heading'>
                    <h1>Welcome to JJ Dairies</h1>
                    {/* <img src={dairyImage} alt="Dairy products" /> */}
                </div>

                <div className="welcome">
                    <div className="side1">
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
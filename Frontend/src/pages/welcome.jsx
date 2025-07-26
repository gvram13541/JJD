import '../styles/welcome.css'

function Welcome() {
    return (
        <> 
        <div className='welcomePage'>
            <div className='heading'>
                <h1>Welcome to JJ Dairies</h1>
            </div>

            <div className="welcome">
                <div className="vertical">
                    <div className="side1">
                        JJD
                    </div>

                    <div className="side2">
                        Login
                    </div>
                </div>

                <div className="horizontal">
                    <a>Login as a Seller!</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Welcome
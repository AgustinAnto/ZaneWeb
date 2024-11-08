import React from 'react';

const Navbar = ({  currentUser, setShowLogin, setShowSignup, onLogout }) => {
    if(currentUser){
        console.log("current user true");
        console.log(currentUser)
    } else{
        console.log("current user FALSE");
        console.log(currentUser)
    }
    return (
        <div>
            {(() => {
                if (currentUser) {
                    return <button className="nav-button" onClick={onLogout}>Logout</button>;
                } else {
                    return (
                        <>
                            <button className="nav-button" onClick={() => setShowLogin(true)}>Login</button>
                            <button className="nav-button" onClick={() => setShowSignup(true)}>Sign Up</button>
                        </>
                    );
                }
            })()}
        </div>
    );
}
export default Navbar;
import React from 'react';

const Navbar = ({  currentUser, setShowLogin, setShowSignup, onLogout }) => {
    return (
        <div>
            {currentUser ? (
                    <button className="nav-button" onClick={onLogout}>Logout</button>
                ) : (
                    <>
                        <button className="nav-button" onClick={() => setShowLogin(true)}>Login</button>
                        <button className="nav-button" onClick={() => setShowSignup(true)}>Sign Up</button>
                    </>
                )}
        </div>
    )
}
export default Navbar;
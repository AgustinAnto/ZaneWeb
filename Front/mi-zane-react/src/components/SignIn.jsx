import axios from "axios";
import React, { useState } from "react";

const SignIn = ({ onClose, setCurrentUser, onLogin }) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword] = useState("");

    
    const handleSignOn = async() =>{
        
        try{
            const response = await axios.post('http://localhost:8000/LoggedIn', {
            "password": password,
            "email": email
            });
            console.log(response);
            setIsPassword(response.data.password);
            setIsEmail(response.data.email);
            alert("logged in successfully");
            localStorage.setItem('Email', email);
        }
        catch(error){
         console.log(error);   
         alert("Problems encountered while logging in");

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleSignOn();
        onClose();
        setCurrentUser(true)
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email: 
                            <input
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            /> 
                        </label>
                    </div>
                    <div>
                    <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Log in</button>
                    <button type="button" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
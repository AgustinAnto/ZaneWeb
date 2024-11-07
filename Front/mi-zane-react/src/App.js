import React, {useState} from 'react';
import ReviewsComponent from './components/ReviewsComponent';
import SubmitReviewComponent from './components/SubmitReviewComponent';
import UserCounter from './components/UserCounter';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar'
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isVisible, setIsVisible] = useState(false); //dropdown menu

  const toggleDropdown = () => {
        setIsVisible(!isVisible);
  };
  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setShowLogin(false);
};

const handleLogout = () => {
  setCurrentUser(null);
  localStorage.removeItem('currentUser');
};

  return (
      <div>
                <Navbar 
                    currentUser={currentUser} 
                    setShowLogin={setShowLogin} 
                    setShowSignup={setShowSignup} 
                    onLogout={handleLogout} 
                />
        <div className="top-navigation">
                <div className="hamburger-menu" onClick={toggleDropdown}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>


                <div className={`dropdown-menu ${isVisible ? '' : 'hidden'}`}>
                    <a href="#product">Product</a>
                    <a href="#contact">Contact</a>
                    <a href="#social-media">Social Media</a>
                </div>
            </div>

            <div className="container">
                <div className="subheading">Zane</div>
                <h1>DRONES</h1>
                <div className="elemento">
                    <img 
                        className="lemonade-image" 
                        src="https://i.ibb.co/HdDxWjy/D-NQ-NP-968415-MLU73105490906-122023-O.png" 
                        alt="Lemonade Image" 
                    />
                </div>
            </div>

            <div id="product" className="section">
                <div className="section-title">Our Product</div>
                <p>Details….</p>
            </div>

            <div id="contact" className="section">
                <div className="section-title">Contact Us</div>
                <p>Email or phone</p>
            </div>

            <div id="social-media" className="section">
                <div className="section-title">Follow Us</div>
                <p>Social media platforms.</p>
            </div>
            {showSignup && <SignUp onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
            {showLogin && <SignIn onClose={() => setShowSignup(false)} onLogin={handleLogin}/>}
        <UserCounter />
        <SubmitReviewComponent />
        <ReviewsComponent />
      </div>
  );
};

export default App;
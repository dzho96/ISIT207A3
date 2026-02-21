import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";



const NavBar = ({ user, setUser }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [authModal, setAuthModal] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const navigate = useNavigate();

    const handleNav = () => {
        setDropdownOpen(false);
        setUserDropdown(false);
    };

    const handleLogin = (u) => {
        setUser(u);
        localStorage.setItem("currentUser", JSON.stringify(u));
        setAuthModal(false);
        setShowSignUp(false);
    };
    const handleSignUp = (u) => {
        setUser(u);
        localStorage.setItem("currentUser", JSON.stringify(u));
        setAuthModal(false);
        setShowSignUp(false);
    };
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
        setUserDropdown(false);
        navigate("/");
    };

    return (
        <div className="navbar-sticky-container">
            <nav className="navbar">
                <div className="navbar-logo left-align">
                    <img src='/logo.svg' alt="Pet Haven Logo" />
                    <a>Pet Haven</a>
                </div>
                <div className="navbar-links right-align">
                    <Link to="/" onClick={handleNav}>Home</Link>
                    <div
                        className="navbar-dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <span className="navbar-dropdown-label">
                            Services <span style={{ fontSize: "1.1em" }}>▼</span>
                        </span>
                        {dropdownOpen && (
                            <div className="navbar-dropdown-menu">
                                <Link to="/adoption" className="navbar-dropdown-item" onClick={handleNav}>Adoption</Link>
                                <Link to="/release" className="navbar-dropdown-item" onClick={handleNav}>Rehome</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/about" onClick={handleNav}>About</Link>
                    <Link to="/articles" onClick={handleNav}>Articles</Link>
                    {/* Auth/Login Button */}
                    {!user ? (
                        <a style={{ cursor: "pointer" }} onClick={() => setAuthModal((v) => !v)}>Log In</a>
                    ) : (
                        <div
                            className="navbar-dropdown"
                            onMouseEnter={() => setUserDropdown(true)}
                            onMouseLeave={() => setUserDropdown(false)}
                        >
                            <span className="navbar-dropdown-label">
                                <img className="navbar-user-icon" src="/usericon.svg" alt="User" /> {user.username} <span style={{ fontSize: "1.1em" }}>▼</span>
                            </span>
                            {userDropdown && (
                                <div className="navbar-dropdown-menu">
                                    <Link to="/dashboard" className="navbar-dropdown-item" onClick={handleNav}>Dashboard</Link>
                                    <a onClick={handleLogout}> Log Out</a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
            <hr className="navbar-divider" />
            {/* Auth Modal */}
            {authModal && (
                <div className="auth-modal-bg" onClick={() => setAuthModal(false)}>
                    <div className="auth-modal" onClick={e => e.stopPropagation()}>
                        {!showSignUp ? (
                            <Login
                                onLogin={handleLogin}
                                onSwitch={() => setShowSignUp(true)}
                            />
                        ) : (
                            <SignUp
                                onSignUp={handleSignUp}
                                onSwitch={() => setShowSignUp(false)}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
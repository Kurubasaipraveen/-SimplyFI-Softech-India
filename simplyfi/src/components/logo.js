import React from 'react';
import './logo.css';

const Logo = () => {
    return (
        <div>
        <h1>Assignment 1</h1>
        <div className="logo-container">
            
            <div className="diamond">
                <div className="bar top-bar"></div>
                <div className="bar right-bar"></div>
                <div className="bar bottom-bar"></div>
                <div className="bar left-bar"></div>
            </div>
            <div className="text-container">
                <h1>HTML & CSS</h1>
                <p>design and build websites</p>
            </div>
        </div>
        </div>
    );
};

export default Logo;

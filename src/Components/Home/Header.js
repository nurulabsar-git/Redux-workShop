import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="container ui center">
            <h2>Shop</h2>
            <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default Header;
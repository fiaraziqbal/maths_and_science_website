import React from 'react';

const Navbar = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            <div style={{alignItems: 'left'}}>
                <a href="/">Home</a>
            </div>
            <div style={{alignItems: 'right'}}>
                <button>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
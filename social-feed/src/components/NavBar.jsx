import React from 'react';
import './NavBar.css'


const NavBar = () => {
    return ( 
        <nav className='NavBarItems'>
            <h1 style={{ margin: "2em" }}>
        Social
        <small className="text-muted">Feed</small>
      </h1>
        </nav> );
}
 
export default NavBar;
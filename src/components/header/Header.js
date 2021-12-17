import React from 'react'
import { Link } from 'react-router-dom';

// CSS
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <Link to='/'>BloomTech Eats</Link>
            </div>
            <nav>
                <Link to='/'><span>Home</span></Link>
                <span>Help</span>    
            </nav>
        </header>
    )
}

export default Header;
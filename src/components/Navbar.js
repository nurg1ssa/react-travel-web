import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { Button } from "./Button"
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false)
    const[button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMoblieMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton);
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL<i className="fab fa-typo3"/>
                </Link> 
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-tiem">
                        <Link to='/' className='nav-links' onClick={closeMoblieMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-tiem">
                        <Link to='/services' className='nav-links' onClick={closeMoblieMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-tiem">
                        <Link to='/products' className='nav-links' onClick={closeMoblieMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-tiem">
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMoblieMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar
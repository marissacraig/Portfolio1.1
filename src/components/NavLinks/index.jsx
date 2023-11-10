/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'
import './index.css'

function NavLinks({ closeHamburger, isMobile }) {

    function closeHamburgerMenu () {
        if(isMobile) {
            closeHamburger();
        }
    }
    return (
        <nav className='navLinks'>
            <ul>
                <li>
                    <NavLink to='/' onClick={closeHamburgerMenu}>
                        Home
                    </NavLink>
                    {/* <a href='/'>HomePage</a> */}
                </li>
                <li>
                    <NavLink to='/contact' onClick={closeHamburgerMenu}>
                        Contact
                    </NavLink>
                    {/* <a href='/profile'>Profile</a> */}
                </li>
                <li>
                    <NavLink to='/projects' onClick={closeHamburgerMenu}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks;
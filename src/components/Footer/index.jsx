import { NavLink } from "react-router-dom";
import MobileNav from "../MobileNav";
import Navigation from "../Navigation";
import './index.css'

function Footer() {
    return (
        <footer className="footer">
            <NavLink to='/'>
                <img src="/vite.svg"></img>
            </NavLink>
            
            <Navigation />
            <MobileNav />
        </footer>
    )
}

export default Footer;
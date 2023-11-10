import MobileNav from "../MobileNav";
import Navigation from "../Navigation";
import './index.css'

function Header() {
    return (
        <header className="header">
            
                <h1>.Portfolio</h1>   
            
            <Navigation />
            <MobileNav />
        </header>
    )
}

export default Header;
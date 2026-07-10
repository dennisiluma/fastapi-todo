import { useState } from "react";
import { Link } from "react-router-dom";


export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`}>
            <div className="site-nav__container">
                <Link to="/" className="site-nav__logo" onClick={closeMenu}>
                    <span className="site-nav__logo-icon">✓</span>
                    <span className="site-nav__logo-text">TaskFlow</span>
                </Link>

                <nav className="site-nav__menu">
                    <Link to="/" className="site-nav__link" onClick={closeMenu}>Home</Link>
                    <Link to="/todos" className="site-nav__link" onClick={closeMenu}>Todo's</Link>
                    <Link to="/add" className="site-nav__link site-nav__link--cta" onClick={closeMenu}>Add Todo</Link>
                </nav>

                <button className="site-nav__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="site-nav__hamburger-bar"></span>
                    <span className="site-nav__hamburger-bar"></span>
                    <span className="site-nav__hamburger-bar"></span>
                </button>
            </div>
            {isMenuOpen && <div className="site-nav__overlay" onClick={closeMenu}></div>}
        </header>
    )

}

'use client';

import Link from "next/link";
import { useState } from "react";
import './nav.css'

export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`}>
            <div className="site-nav__container">
                {/* Logo */}
                <Link href="/" className="site-nav__logo" onClick={closeMenu}>
                    <span className="site-nav__logo-icon">✓</span>
                    <span className="site-nav__logo-text">TaskFlow</span>
                </Link>

                {/* Desktop & Mobile Links */}
                <nav className="site-nav__menu">
                    <Link href="/" className="site-nav__link" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link href="/todos" className="site-nav__link" onClick={closeMenu}>
                        Todo's
                    </Link>
                    <Link href="/add" className="site-nav__link site-nav__link--cta" onClick={closeMenu}>
                        Add Todo
                    </Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="site-nav__hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="site-nav__hamburger-bar"></span>
                    <span className="site-nav__hamburger-bar"></span>
                    <span className="site-nav__hamburger-bar"></span>
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMenuOpen && <div className="site-nav__overlay" onClick={closeMenu}></div>}
        </header>
    )

}
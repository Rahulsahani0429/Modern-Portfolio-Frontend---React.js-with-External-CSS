import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useLockBodyScroll, useEscapeKey, useOutsideClick } from '../../hooks/useNavbar';
import './Navbar.css';

// ---------- nav link config ----------
const NAV_LINKS = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState('home');

    const drawerRef = useRef(null);
    const burgerRef = useRef(null);
    const location = useLocation();

    // ─── scroll detection ─────────────────────────────────────────────────────
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ─── active section via IntersectionObserver ──────────────────────────────
    useEffect(() => {
        const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        );

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, [location.pathname]);

    // ─── smooth scroll helper ─────────────────────────────────────────────────
    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 80; // navbar height
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    const handleLinkClick = useCallback((id) => {
        setMenuOpen(false);
        // tiny delay so drawer close animation can start before scroll
        setTimeout(() => scrollToSection(id), 80);
    }, [scrollToSection]);

    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

    // ─── hooks for UX ─────────────────────────────────────────────────────────
    useLockBodyScroll(menuOpen);
    useEscapeKey(closeMenu);
    useOutsideClick(drawerRef, closeMenu, menuOpen);

    // ─── focus management: move focus into drawer when it opens ───────────────
    useEffect(() => {
        if (menuOpen && drawerRef.current) {
            const firstFocusable = drawerRef.current.querySelector('button, a');
            firstFocusable?.focus();
        }
        if (!menuOpen && burgerRef.current) {
            burgerRef.current.focus();
        }
    }, [menuOpen]);

    return (
        <>
            {/* ────────────── NAV BAR ────────────── */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
                <div className="container nav-content">

                    {/* Logo */}
                    <button
                        className="logo"
                        onClick={() => handleLinkClick('home')}
                        aria-label="Go to Home"
                    >
                        Rahul<span className="logo-accent">Sahani</span>
                    </button>

                    {/* Desktop centre links */}
                    <ul className="nav-links" role="list">
                        {NAV_LINKS.map(({ label, id }) => (
                            <li key={id}>
                                <button
                                    className={`nav-link-btn ${activeId === id ? 'active' : ''}`}
                                    onClick={() => handleLinkClick(id)}
                                    aria-current={activeId === id ? 'page' : undefined}
                                >
                                    {label}
                                    <span className="nav-underline" />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Right side — desktop: Download CV + nothing; mobile: hamburger only */}
                    <div className="nav-right">
                        {/* Desktop-only Download CV (hidden on mobile via CSS) */}
                        <a
                            href="/RahulSahani.pdf"
                            className="btn-outline download-cv desktop-cv"
                            download
                            aria-label="Download CV"


                        >
                            Download CV
                            <i className="fas fa-download" style={{ fontSize: '11px', marginLeft: '6px' }} />
                        </a>

                        {/* Hamburger (mobile only) */}
                        <button
                            ref={burgerRef}
                            className={`hamburger ${menuOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-drawer"
                        >
                            <span className="ham-line top" />
                            <span className="ham-line mid" />
                            <span className="ham-line bottom" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ────────────── OVERLAY ────────────── */}
            <div
                className={`nav-overlay ${menuOpen ? 'visible' : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* ────────────── MOBILE DRAWER ────────────── */}
            <aside
                id="mobile-drawer"
                ref={drawerRef}
                className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                inert={menuOpen ? undefined : ''}
            >
                {/* drawer header */}
                <div className="drawer-header">
                    <span className="drawer-logo">
                        Rahul<span className="logo-accent">Sahani</span>
                    </span>
                    <button
                        className="drawer-close"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                    >
                        <i className="fas fa-times" />
                    </button>
                </div>

                {/* drawer divider */}
                <div className="drawer-divider" />

                {/* nav links */}
                <nav aria-label="Mobile navigation links">
                    <ul className="drawer-links" role="list">
                        {NAV_LINKS.map(({ label, id }, idx) => (
                            <li
                                key={id}
                                className="drawer-item"
                                style={{ '--delay': `${idx * 60}ms` }}
                            >
                                <button
                                    className={`drawer-link ${activeId === id ? 'active' : ''}`}
                                    onClick={() => handleLinkClick(id)}
                                    aria-current={activeId === id ? 'page' : undefined}
                                >
                                    <span className="drawer-link-indicator" />
                                    <span className="drawer-link-label">{label}</span>
                                    <i className="fas fa-chevron-right drawer-arrow" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* drawer footer CTAs */}
                <div className="drawer-footer">
                    <button
                        className="btn-primary drawer-hire"
                        onClick={() => handleLinkClick('about')}
                        aria-label="Hire Me – scroll to contact"
                    >
                        <i className="fas fa-paper-plane" style={{ marginRight: '8px' }} />
                        Hire Me
                    </button>
                    <a
                        href="/RahulSahani.pdf"
                        className="btn-outline drawer-cv"
                        download
                        onClick={closeMenu}
                        aria-label="Download CV"
                    >
                        <i className="fas fa-download" style={{ marginRight: '8px', textDecoration: 'none' }} />
                        Download CV
                    </a>
                </div>
            </aside>
        </>
    );
};

export default Navbar;

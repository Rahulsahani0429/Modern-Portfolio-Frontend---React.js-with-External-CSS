import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Hero.css';

const Hero = ({ profile }) => {
    // Typewriter state
    const [roleText, setRoleText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Stable roles list — split profile.title by "|" so each role is a separate
    // typewriter entry (backend may store them as "Role A | Role B | Role C").
    const roles = useMemo(() => {
        const defaultRoles = [
            "MERN Stack Developer",
            "Prompt Engineer",
            "Frontend Developer",
            "Backend Developer",
            "Node Js Developer",
            "React Js Developer",
            "Express Js Developer"
        ];
        if (profile?.title) {
            const fromTitle = profile.title
                .split('|')
                .map(r => r.trim())
                .filter(r => r.length > 0);
            // Merge: profile roles first, then any defaults not already included
            const merged = [...fromTitle, ...defaultRoles.filter(d => !fromTitle.includes(d))];
            return merged;
        }
        return defaultRoles;
    }, [profile?.title]); // eslint-disable-line react-hooks/exhaustive-deps

    // ... rest of state ...
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
    const cardRef = useRef(null);
    const requestRef = useRef();

    // Typewriter logic — roles is stable via useMemo, so excluding it from deps is safe
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                const next = currentRole.substring(0, roleText.length + 1);
                setRoleText(next);
                if (next.length === currentRole.length) {
                    // Pause before starting to delete
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                const next = currentRole.substring(0, roleText.length - 1);
                setRoleText(next);
                if (next.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roleText, isDeleting, roleIndex]);

    // ... updateTilt, handleMouseMove, handleMouseLeave ...
    const updateTilt = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (y - centerY) / (rect.height / 2) * -10;
        const tiltY = (x - centerX) / (rect.width / 2) * 10;
        const spotX = (x / rect.width) * 100;
        const spotY = (y / rect.height) * 100;
        setTilt({ x: tiltX, y: tiltY });
        setSpotlight({ x: spotX, y: spotY });
    };

    const handleMouseMove = (e) => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        requestRef.current = requestAnimationFrame(() => updateTilt(e));
    };

    const handleMouseLeave = () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        setTilt({ x: 0, y: 0 });
        setSpotlight({ x: 50, y: 50 });
    };

    return (
        <section id="home" className="hero-section">
            <div className="noise-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="fade-in">Hi, I am <span className="highlight">{profile?.name || "Rahul Kumar Sahani"}</span></h1>
                    <h2 className="role-text-container">
                        I am a <span className="typewriter">{roleText}</span>
                        <span className="cursor">|</span>
                    </h2>
                    <p className="hero-description fade-in">
                        {profile?.bio || "Focused on building scalable MERN stack applications, designing efficient backend APIs, and leveraging AI with prompt engineering to develop intelligent digital solutions."}
                    </p>
                    <div className="hero-btns fade-in">
                        <a href="#contact" className="btn-primary-v2">Hire Me</a>
                        <a href="#projects" className="btn-glass">View Work</a>
                    </div>
                </div>

                <div
                    className="hero-image-wrapper fade-in"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        className="image-card-v2"
                        ref={cardRef}
                        style={{
                            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                            '--mx': `${spotlight.x}%`,
                            '--my': `${spotlight.y}%`
                        }}
                    >
                        <div className="spotlight"></div>
                        <div className="neon-ring"></div>
                        <img
                            src="/src/assets/projects/IMG_20250324_084038-removebg-preview (2).png"
                            alt={profile?.name || "Rahul Kumar Sahani"}
                            className="profile-img-v2"
                        />
                    </div>
                    {/* Floating Elements */}
                    <div className="floating-element symbol-1">&lt; / &gt;</div>
                    <div className="floating-element symbol-2">&#123; &#125;</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

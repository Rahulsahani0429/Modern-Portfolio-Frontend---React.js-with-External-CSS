import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import { profileData } from '../data/portfolioData';

const Home = () => {
    return (
        <main>
            <Hero profile={profileData} />
            <About profile={profileData} />
            <Skills />
            <Projects />
            <Experience />
            <Education />
        </main>
    );
};

export default Home;

import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import { getProfile, getProjects, getSkills, getExperience, getEducation } from '../api/api';

const Home = () => {
    const [profile, setProfile] = useState(null);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await Promise.allSettled([
                    getProfile(),
                    getProjects(),
                    getSkills(),
                    getExperience(),
                    getEducation()
                ]);

                const getValue = (res, defaultVal) => res.status === 'fulfilled' ? res.value.data : defaultVal;

                setProfile(getValue(results[0], null));
                setProjects(getValue(results[1], []));
                setSkills(getValue(results[2], []));
                setExperience(getValue(results[3], []));
                setEducation(getValue(results[4], []));
            } catch (error) {
                console.error('Error in data fetching layer:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <main>
            <Hero profile={profile} />
            <About profile={profile} experience={experience} education={education} />
            <Skills skills={skills} />
            <Projects projects={projects} />
            <Experience experience={experience} />
            <Education education={education} />
        </main>
    );
};

export default Home;

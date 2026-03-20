import React, { useState } from 'react';
import './About.css';
import { sendMessage } from '../../api/api';

const About = ({ profile }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'
    const [toastMessage, setToastMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setToastMessage('Please fill all fields.');
            setStatus('error');
            return;
        }

        if (!validateEmail(formData.email)) {
            setToastMessage('Please enter a valid email address.');
            setStatus('error');
            return;
        }

        setStatus('submitting');
        setToastMessage('');

        try {
            await sendMessage(formData);
            setStatus('success');
            setToastMessage('Your message has been sent successfully.');
            setFormData({ name: '', email: '', message: '' });
            
            // Clear toast after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setToastMessage('');
            }, 5000);
        } catch (error) {
            const backendError = error.response?.data?.message || error.message;
            console.error('Detailed Backend Error:', backendError);
            
            setStatus('error');
            setToastMessage('Failed to send message. Please try again later.');
        }
    };

    const formatAboutText = (text) => {
        if (!text) return null;
        const keywords = [
            "MERN Stack Developer and Prompt Engineer", "MERN Stack Developer",
            "Prompt Engineer", "MongoDB", "Express.js", "React.js", "Node.js",
            "MySQL", "AI tools", "Prompt Engineering", "MERN Stack",
            "Full Stack Web Development Internship at CodeSoft", "MongoDB University"
        ];

        const boldify = (str) => {
            let result = str;
            keywords.forEach(keyword => {
                const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                result = result.replace(regex, '<strong>$1</strong>');
            });
            return result;
        };

        const paragraphs = text.split('\n\n').filter(p => p.trim());
        return (
            <>
                {paragraphs.map((para, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: boldify(para.trim()) }} />
                ))}
            </>
        );
    };

    return (
        <section id="about" className="about-contact-section">
            <div className="container about-contact-grid">
                <div className="about-info">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-text">
                        {profile?.aboutMe ? formatAboutText(profile.aboutMe) : (
                            <>
                                <p>I am a passionate <strong> MERN Stack Developer and Prompt Engineer</strong> with experience building responsive and scalable web applications. I specialize in developing full-stack solutions using <strong>MongoDB, Express.js, React.js, and Node.js</strong>, along with working knowledge of <strong>MySQL</strong> for relational database management.</p>
                                <p>During my <strong>Full Stack Web Development Internship at CodeSoft</strong>, I worked on building responsive frontend modules and developing backend APIs using modern JavaScript technologies. This experience helped me strengthen my skills in creating efficient and user-friendly applications.</p>
                                <p>I have also completed coursework from <strong>MongoDB University</strong>, gaining hands-on experience in database management, data modeling, and backend optimization.</p>
                                <p>I enjoy solving real-world problems, learning new technologies, and building modern applications that deliver scalable and meaningful user experiences.</p>
                            </>
                        )}
                    </div>

                    <a href="#projects" className="btn-outline">View My Work</a>
                </div>

                <div className="contact-container" id="contact">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>{profile?.email || "rahulcse3212@gmail.com"}</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone-alt"></i>
                            <span>+91 8828929033</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{profile?.location || "India"}</span>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-card">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === 'submitting'}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'submitting'}
                            />
                            <textarea
                                name="message"
                                placeholder="Send Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'submitting'}
                            ></textarea>
                            <button 
                                type="submit" 
                                className="btn-primary full-width"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {/* Feedback Toast Message */}
                            {toastMessage && (
                                <div style={{ 
                                    marginTop: '15px', 
                                    padding: '10px', 
                                    borderRadius: '5px',
                                    textAlign: 'center',
                                    backgroundColor: status === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                                    color: status === 'success' ? '#4caf50' : '#f44336',
                                    border: `1px solid ${status === 'success' ? '#4caf50' : '#f44336'}`
                                }}>
                                    {toastMessage}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="social-footer">
                        {profile?.socials?.github && <a href={profile.socials.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>}
                        {profile?.socials?.linkedin && <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>}
                        {profile?.socials?.twitter && <a href={profile.socials.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>}
                        {!profile?.socials && (
                            <>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

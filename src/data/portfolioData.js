import rahulImg from '../assets/projects/rahul.png';
import flipkartImg from '../assets/projects/flipkart.png';
import doctorImg from '../assets/projects/doctor.png';

export const skillsData = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  Languages: ["JavaScript"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"]
};

export const projectsData = [
  {
    _id: "1",
    title: "Portfolio Website",
    description: "A modern responsive portfolio website to showcase skills, projects, and experience.",
    techStack: ["React", "CSS", "Html", "Bootstrap", "JavaScript"],
    image: rahulImg,
    liveLink: "https://your-portfolio-live-link.com",
    githubLink: "https://github.com/Rahulsahani0429"
  },
  {
    _id: "2",
    title: "E-commerce Website",
    description: "A full-stack MERN e-commerce application with authentication, product browsing, cart system, order management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: flipkartImg,
    liveLink: "https://your-live-demo-ecommerce.com",
    githubLink: "https://github.com/Rahulsahani0429/ecommerce"
  },
  {
    _id: "3",
    title: "Doctor Appointment Booking System",
    description: "A MERN stack doctor appointment booking system with authentication and appointment scheduling features.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: doctorImg,
    liveLink: "https://your-live-demo-doctor.com",
    githubLink: "https://github.com/Rahulsahani0429/doctor-appointment"
  }
];

export const experienceData = [
  {
    _id: "1",
    role: "Full Stack Web Developer",
    company: "MongoDB University",
    duration: "Aug 2024 - Sep 2024",
    description: "Completed MongoDB training covering data modeling, aggregation pipelines, indexing, and database performance optimization.",
    isInternship: false
  },
  {
    _id: "2",
    role: "Oracle Foundation Associate",
    company: "Oracle Cloud",
    duration: "Aug 2024 - Sep 2024",
    description: "Learned cloud computing fundamentals including IaaS, PaaS, SaaS models and core cloud architecture concepts.",
    isInternship: false
  },
  {
    _id: "3",
    role: "Full Stack Web Developer Intern",
    company: "CodeSoft",
    duration: "Apr 2024 - Oct 2024",
    description: "Worked on front-end development using HTML, CSS, JavaScript, and React along with backend development using Node.js and Express. Built responsive applications and integrated REST APIs.",
    isInternship: true
  }
];

export const educationData = [
  {
    _id: "1",
    degree: "B.Tech Computer Science and Engineering",
    institution: "Dhanalakshmi Srinivasan College of Engineering and Technology",
    duration: "2021 - 2025",
    score: "7.5"
  }
];

export const profileData = {
  name: "Rahul Sahani",
  email: "rahulcse3212@gmail.com",
  phone: "+91 8828929033",
  location: "India",
  aboutMe: "I am a passionate **MERN Stack Developer and Prompt Engineer** with experience building responsive and scalable web applications. I specialize in developing full-stack solutions using **MongoDB, Express.js, React.js, and Node.js**, along with working knowledge of **MySQL** for relational database management.\n\nDuring my **Full Stack Web Development Internship at CodeSoft**, I worked on building responsive frontend modules and developing backend APIs using modern JavaScript technologies. This experience helped me strengthen my skills in creating efficient and user-friendly applications.\n\nI have also completed coursework from **MongoDB University**, gaining hands-on experience in database management, data modeling, and backend optimization.\n\nI enjoy solving real-world problems, learning new technologies, and building modern applications that deliver scalable and meaningful user experiences.",
  socials: {
    github: "https://github.com/rahul1083",
    linkedin: "https://www.linkedin.com/in/rahul-sahani-380108226/",
    twitter: "https://twitter.com/your-twitter-handle"
  }
};

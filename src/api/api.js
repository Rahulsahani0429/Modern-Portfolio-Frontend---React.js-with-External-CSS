// import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// const api = axios.create({
//     baseURL: API_BASE_URL,
// });

// export const getProfile = () => api.get('/profile');
// export const getProjects = () => api.get('/projects');
// export const getSkills = () => api.get('/skills');
// export const getExperience = () => api.get('/experience');
// export const getEducation = () => api.get('/education');
// export const sendMessage = (data) => api.post('/contact', data);

// export default api;


import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getProfile = () => api.get('/profile');
export const getProjects = () => api.get('/projects');
export const getSkills = () => api.get('/skills');
export const getExperience = () => api.get('/experience');
export const getEducation = () => api.get('/education');
export const sendMessage = (data) => api.post('/contact', data);

export default api;
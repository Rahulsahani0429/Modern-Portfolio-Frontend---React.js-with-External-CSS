import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import './styles/global.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    {/* All sections live on the single home page */}
                    <Route path="/" element={<Home />} />
                    {/* Catch-all: redirect unknown routes back to home */}
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

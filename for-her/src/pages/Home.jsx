import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../index.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle Logout
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      navigate('/');
    }
  };

  // Helper to check active link
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="home-layout">
      
      {/* NEW SIDEBAR (Left Side) */}
      <nav className="modern-sidebar">
        <div className="sidebar-brand">
          <div className="brand-arch-icon">Start</div> {/* CSS will make this the arch shape */}
          <span className="brand-text">FOR HER</span>
        </div>

        <div className="nav-links">
          <Link to="/home" className={`modern-nav-item ${isActive('/home')}`}>
            MY HOME
          </Link>
          <Link to="/milestones" className={`modern-nav-item ${isActive('/milestones')}`}>
            MILESTONES
          </Link>
          <Link to="/photos" className={`modern-nav-item ${isActive('/photos')}`}>
            PHOTOS
          </Link>
          <Link to="/notes" className={`modern-nav-item ${isActive('/notes')}`}>
            LOVE NOTES
          </Link>
        </div>

        <button className="logout-link" onClick={handleLogout}>
          <span className="logout-icon">↪</span> LOG OUT
        </button>
      </nav>

      {/* MAIN CONTENT (Right Side) */}
      <main className="modern-content">
        
        {/* Top Right Decorative Icon */}
        <div className="top-right-icon">✈️</div>

        <div className="content-grid">
          {/* Left Text Area */}
          <div className="text-area">
            <h1 className="hero-title">
              THIS WEBSITE IS<br/>
              MADE FOR MIA<br/>
              <span className="highlight-text">(MY SUPPORTIVE<br/>GIRLFRIEND)</span>
            </h1>

            <p className="hero-description">
              this is made for the purpose of expressing how much love i have 
              for you, my baby. i have been doing good all thanks to you. 
              you are my inspiration, my will to live, and my everything. 
              I LOVE YOU! 💖
            </p>

            <button className="modern-see-more-btn" onClick={() => alert('Love you!')}>
              SEE MORE
            </button>
          </div>

          {/* Right Arch Window (Clouds) */}
          <div className="arch-container">
            <div className="arch-window">
              <div className="sky">
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
                <div className="cloud cloud-3"></div>
              </div>
              <div className="ground"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
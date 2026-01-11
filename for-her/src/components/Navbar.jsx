import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../index.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      navigate('/');
    }
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="modern-sidebar">
      <div className="sidebar-brand">
        <div className="brand-arch-icon">Start</div>
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
          ANNIV MESSAGE
        </Link>
      </div>

      <button className="logout-link" onClick={handleLogout}>
        <span className="logout-icon">↪</span> LOG OUT
      </button>
    </nav>
  );
};

export default Sidebar;
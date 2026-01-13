import '../index.css';
import Sidebar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // --- NEW FUNCTION TO CALCULATE DAYS ---
  const calculateDaysTogether = () => {
    const startDate = new Date('2024-01-15'); 
    const today = new Date();
    const difference = today.getTime() - startDate.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
  };

  // --- RANDOM PAGE NAVIGATION ---
  const navigateToRandomPage = () => {
    const pages = ['/milestones', '/photos', '/notes'];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    navigate(randomPage);
  };

  return (
    <div className="home-layout">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* MAIN CONTENT (Right Side) */}
      <main className="modern-content">

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

            <div className="days-counter">
              <span className="counter-number">{calculateDaysTogether()}</span>
              <span className="counter-label">DAYS LOVING YOU</span>
            </div>

            <button className="modern-see-more-btn" onClick={navigateToRandomPage}>
              SEE MORE
            </button>
          </div>

          {/* Right Arch Window (Image) */}
          <div className="arch-container">
            <div className="arch-window">
              <img 
                src="./public/images/her.jpg" 
                alt="Gorgeous you!" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
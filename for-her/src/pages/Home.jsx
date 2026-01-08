import '../index.css';
import Sidebar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home-layout">
      {/* Sidebar Navigation */}
      <Sidebar />
      
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
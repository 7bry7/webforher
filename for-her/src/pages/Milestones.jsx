import React, { useState } from 'react';
import Sidebar from '../components/Navbar';
import '../index.css';

const Milestones = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  // Your milestone data
  const milestones = [
    {
      id: 1,
      title: "NILIGAWAN KITAAAAA (NOVEMBER 2023)",
      fullMessage: "This was the beginning of everything beautiful between us...",
      icon: "💖"
    },
    {
      id: 2,
      title: "FIRST KISS SA 2 P. Conducto Street",
      fullMessage: "Our first kiss... I still get butterflies thinking about that magical moment...",
      icon: "💋"
    },
    {
      id: 3,
      title: "SINAGOT MO AKOOOO (JANUARY 15, 2024)",
      fullMessage: "The happiest day of my life! When you said yes to being my girlfriend...",
      icon: "🥰"
    },
    {
      id: 4,
      title: "FIRST MONTHSARY (FEBRUARY 15, 2024)",
      fullMessage: "Our first month together was like a beautiful dream...",
      icon: "🎉"
    },
    {
      id: 5,
      title: "FIRST ANNIVERSARY (JANUARY 15, 2025)",
      fullMessage: "A whole year of pure bliss with you, my queen!",
      icon: "👑"
    }
  ];

  return (
    <div className="home-layout">
      <Sidebar />

      <main className="modern-content milestones-layout">
        
        {/* TOP BAR: Search & Icon */}
        <div className="top-section">
            <div className="top-right-icon">✈️</div>
        </div>

        {/* PAGE TITLE */}
        <h1 className="list-page-title">
          LIST OF MILESTONES THAT WE'VE ACHIEVED FOR<br />
          THE DAYS WE'VE BEEN TOGETHER:
        </h1>

        {/* MILESTONE LIST TABLE */}
        <div className="milestone-list-container">
            
            {/* Header Row */}
            <div className="milestone-row header">
                <div className="col-no header-cell">No.</div>
                <div className="col-desc header-cell">KEY MILESTONES</div>
                <div className="col-action header-cell">Action</div>
            </div>

            {/* Data Rows */}
            {milestones.map((milestone) => (
                <div key={milestone.id} className="milestone-row">
                    <div className="col-no data-cell pink-bg">
                        {milestone.id}
                    </div>
                    <div className="col-desc data-cell pink-bg">
                        {milestone.title}
                    </div>
                    <div className="col-action data-cell white-bg">
                        <button 
                            className="more-action-btn"
                            onClick={() => setSelectedMilestone(milestone)}
                        >
                            More
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* MODAL POPUP (Same logic as before, just kept hidden until clicked) */}
        {selectedMilestone && (
          <div className="modal-overlay" onClick={() => setSelectedMilestone(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <span className="modal-icon-large">{selectedMilestone.icon}</span>
                <h2>Memory #{selectedMilestone.id}</h2>
              </div>
              <h3 style={{color: '#A51919', marginBottom: '10px'}}>{selectedMilestone.title}</h3>
              <p className="modal-body">{selectedMilestone.fullMessage}</p>
              <button className="close-btn" onClick={() => setSelectedMilestone(null)}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Milestones;
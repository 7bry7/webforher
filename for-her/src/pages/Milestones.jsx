import React, { useState } from 'react';
import Sidebar from '../components/Navbar';
import '../index.css';

const Milestones = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  // Your milestone data
  const milestones = [
    {
      id: 1,
      title: "NILIGAWAN KITAAAAA (NOVEMBER 23, 2023)",
      fullMessage: "I would like to apologize that I took the time to finally ask you if I can court you, when in fact, we already kissed mwahaha. Talagang I was doubting myself if I can really do more based on what’s currently on my plate. But then, I still got the courage to ask you, and it was the best decision that I made in my life. Plus, I really did more from what’s on my plate!!!!",
      icon: "💖"
    },
    {
      id: 2,
      title: "FIRST KISS SA 2 P. Conducto Street (NOVEMBER 15, 2023)",
      fullMessage: "This is a groundbreaking event!!! As in, I was so shocked at this time na yung crush ko is kiniss ako jahwdkahdagwfkawl. May maxx na red, tinanong ako kung gusto ko, tapos pinapikit ako, tapos madilim, tapos akala ko gamit kamay na ibibigay sa akin, tas biglang booogsshhhhhhh, HADHSHAWDHAHS, it was so solidddd!",
      icon: "💋"
    },
    {
      id: 3,
      title: "SINAGOT MO AKOOOO (JANUARY 15, 2024)",
      fullMessage: "This is the day na hindi ko alam ang magiging expression ko! We were at the linear park, and it was night, and we were simply walking, tapos bigla mo nalang akong sinagot hdahshdwahshdahdwh it wassss soooo romantic!",
      icon: "🥰"
    },
    {
      id: 4,
      title: "FIRST MONTHSARY (FEBRUARY 15, 2024)",
      fullMessage: "Time flies so fast! Biglang first monthsary na natin! This day was sooo daming nangyari, and gabi na tayo nakapag-celebrate kasi may klase us both. Remarkable sa akin na sa first motmot is ikaw yung gumastos huhuhu. Food yata natin no’n is the silog meals and i was so busog that day and so happy. And nagtiktok din us nung “stay with me, I don’t want you to leave” na mga kiss markkkkk. It was simple yet perfect!!! Even now na sinusulat ko to, talagang I could still feel the butterflies!",
      icon: "🎉"
    },
    {
      id: 5,
      title: "FIRST ANNIVERSARY (JANUARY 15, 2025)",
      fullMessage: "Whatttt??? Anniversary na natin??? So shocking na 1 year na us, and we made it! It feels surreal na nag-celebrate us ng anniversary, and you are my first ever girlfriend!!!! I love you so much, baby. Super thankful ako na dumating ka sa buhay ko, na nagkaroon ako ng ikaw. You are my woman, my love, my everything! You made me see what’s more in life, and you made me experience the beautiful side that this life can offer. I love you so much!",
      icon: "👑"
    },
    {
      id: 6,
      title: "SECOND ANNIVERSARY (JANUARY 15, 2026)",
      fullMessage: "HAPPY 2ND YEAR ANNIVERSARY, MAHAL KO!!! I just wanted to wish us more loving, understanding, and giving years to come! I just can’t believe na lahat ng ‘yon ay ganun lang kabilis nangyari. Parang ginanon ganon lang, tapos 2 years na us!!! From nakikita lang sa picture na sine-send ni Ange, naglalaro ng CODM, binati sa court ng Buting, kaway-kaway sa daan, to magkarelasyon <3333. I just wanted to take this moment for you to read that I am the proudest sa mga na-achieve mo at maa-achieve mo pa. I love you, Mahal! I am so grateful that we breathe the same air on the same planet! I love you so much and God bless you!",
      icon: "💐"
    }
  ];

  return (
    <div className="home-layout">
      <Sidebar />

      <main className="modern-content milestones-layout">

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
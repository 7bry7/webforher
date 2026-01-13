import React, { useState } from 'react';
import Sidebar from '../components/Navbar';
import '../index.css';

const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);

  // You can customize your 2nd Anniversary message here
  const anniversaryMessage = `HAPPY 2ND YEAR ANNIVERSARY, MAHAL KO!!! I just wanted to wish us more loving, understanding, and giving years to come! I just can’t believe na lahat ng ‘yon ay ganun lang kabilis nangyari. Parang ginanon ganon lang, tapos 2 years na us!!! From nakikita lang sa picture na sine-send ni Ange, naglalaro ng CODM, binati sa court ng Buting, kaway-kaway sa daan, to magkarelasyon <3333. I just wanted to take this moment for you to read that I am the proudest sa mga na-achieve mo at maa-achieve mo pa. I love you, Mahal! I am so grateful that we breathe the same air on the same planet! I love you so much and God bless you!`;

  return (
    <div className="home-layout">
      <Sidebar />

      <main className="modern-content notes-layout centered-layout">
        
        {/* BACKGROUND BLUR OVERLAY (Visible when opened) */}
        <div className={`blur-overlay ${isOpen ? 'active' : ''}`}></div>

        {/* THE BIG ENVELOPE (Visible when closed) */}
        {!isOpen && (
          <div className="big-envelope-wrapper">
            <h1 className="anniversary-title">An Anniversary Letter For My Mahal! 💌</h1>
            
            <div className="big-envelope" onClick={() => setIsOpen(true)}>
              <div className="big-envelope-flap"></div>
              <div className="big-envelope-pocket"></div>
              <div className="big-heart">❤️</div>
              <div className="click-hint">Click to Open</div>
            </div>
          </div>
        )}

        {/* THE SURPRISE MODAL (Visible when opened) */}
        {isOpen && (
          <div className="celebration-modal">
            <img 
              src="/images/cute-cake-figure.png" 
              alt="Cute celebration figure" 
              className="celebration-figure"
              onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} 
            />
            {/* Fallback emoji if image is missing */}
            <div className="fallback-figure" style={{display: 'none', fontSize: '80px'}}>🧸🎂</div>

            <h2 className="celebration-title">Happy 2nd Anniversary! 🎉💕🎊</h2>
            
            <div className="celebration-message">
              {anniversaryMessage.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default Notes;
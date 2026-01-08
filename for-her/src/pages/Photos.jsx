import React from 'react';
import Sidebar from '../components/Navbar';
import '../index.css';

const Photos = () => {
  // We define our categories here to make the code cleaner
  const categories = [
    {
      title: "Binondo & National Museum",
      images: [
        { src: "/images/binondo/binondo1.jpg", caption: "Binondo Date" },
        { src: "/images/binondo/binondo2.jpg", caption: "Walking around" },
        { src: "/images/binondo/binondo3.jpg", caption: "Chinatown vibes" },
        { src: "/images/natmus/n2.jfif", caption: "Museum Art" },
        { src: "/images/natmus/n4.jfif", caption: "Us at NatMus" },
      ]
    },
    {
      title: "Your 19th Birthday",
      images: [
        { src: "/images/bday/bday1.jpg", caption: "Birthday Girl" },
        { src: "/images/bday/bday2.jpg", caption: "Arcade Time" },
        { src: "/images/bday/bday3.jpg", caption: "Celebration" },
      ]
    },
    {
      title: "Photobooth Memories",
      images: [
        { src: "/images/photobooths/p1.jpg", caption: "Life4Cuts" },
        { src: "/images/photobooths/p2.jpg", caption: "Cute Poses" },
        { src: "/images/photobooths/p4.jpg", caption: "Market! Market!" },
        { src: "/images/photobooths/p6.jpg", caption: "Sweet Moments" },
      ]
    },
    {
      title: "Food Trips",
      images: [
        { src: "/images/foods/food1.jpg", caption: "Bonchon" },
        { src: "/images/foods/food2.jpg", caption: "Jollibee" },
        { src: "/images/foods/food7.jpg", caption: "Pizza" },
        { src: "/images/foods/food12.jpg", caption: "Cornetto" },
      ]
    }
  ];

  return (
    <div className="home-layout">
      <Sidebar />

      <main className="modern-content photos-layout">
        <h1 className="list-page-title">OUR PHOTO GALLERY 📸</h1>

        <div className="gallery-container">
          {categories.map((category, index) => (
            <div key={index} className="photo-section">
              <h2 className="section-title">{category.title}</h2>
              
              <div className="photo-slider-wrapper">
                <div className="photo-track">
                  {/* We duplicate images to create an infinite scroll effect */}
                  {[...category.images, ...category.images].map((img, i) => (
                    <div key={i} className="photo-card">
                      <img src={img.src} alt={img.caption} />
                      <div className="photo-overlay">
                        <span>{img.caption}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Photos;
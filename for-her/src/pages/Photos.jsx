import React, { useState } from 'react';
import Sidebar from '../components/Navbar';
import '../index.css';

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // We define our categories here to make the code cleaner
  const categories = [
    {
      title: "Binondo & National Museum",
      images: [
        { src: "/images/binondo/binondo1.jpg", caption: "Binondo Date" },
        { src: "/images/binondo/binondo2.jpg", caption: "Walking around" },
        { src: "/images/binondo/binondo3.jpg", caption: "Chinatown vibes" },
        { src: "/images/natmus/n1.jpg", caption: "Museum Art" },
        { src: "/images/natmus/n2.jpg", caption: "Us at NatMus" },
        { src: "/images/natmus/n3.jpg", caption: "Us at NatMus" },
        { src: "/images/natmus/n4.jpg", caption: "Us at NatMus" },
        { src: "/images/natmus/n5.jpg", caption: "Us at NatMus" },
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
        { src: "/images/photobooths/p3.jpg", caption: "Fun Times" },
        { src: "/images/photobooths/p5.jpg", caption: "Silly Faces" },
        { src: "/images/photobooths/p4.jpg", caption: "Market! Market!" },
        { src: "/images/photobooths/p6.jpg", caption: "Sweet Moments" },
      ]
    },
    {
      title: "Food Trips",
      images: [
        { src: "/images/foods/food1.jpg", caption: "Bonchon" },
        { src: "/images/foods/food2.jpg", caption: "Jollibee" },
        { src: "/images/foods/food3.jpg", caption: "Food Adventure" },
        { src: "/images/foods/food4.jpg", caption: "Yummy Treats" },
        { src: "/images/foods/food5.jpg", caption: "Delicious" },
        { src: "/images/foods/food6.jpg", caption: "Food Trip" },
        { src: "/images/foods/food7.jpg", caption: "Pizza" },
        { src: "/images/foods/food8.jpg", caption: "Sweet Snacks" },
        { src: "/images/foods/food9.jpg", caption: "Tasty Meal" },
        { src: "/images/foods/food10.jpg", caption: "Foodie Moments" },
        { src: "/images/foods/food11.jpg", caption: "Dinner Date" },
        { src: "/images/foods/food12.jpg", caption: "Cornetto" },
        { src: "/images/foods/food13.jpg", caption: "Favorite Food" },
        { src: "/images/foods/food14.jpg", caption: "Eating Together" },
        { src: "/images/foods/food15.jpg", caption: "Food Memories" },
      ]
    },
    {
      title: "Bonding Together",
      images: [
        { src: "/images/cine/cine1.jpg", caption: "Sine Togedah" },
        { src: "/images/cine/cine2.jpg", caption: "Sine Togeder" },
        { src: "/images/clay/clay1.jpg", caption: "Teddy Holding a Big Heart" },
        { src: "/images/clay/clay2.jpg", caption: "Plattypus" },
        { src: "/images/firstpicphone.jpg", caption: "First Picture with my IP" },
        { src: "/images/uwithflowers.jpg", caption: "You look beautiful here!" },
      ]
    }
  ];

  return (
    <div className="home-layout">
      <Sidebar />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <p className="lightbox-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}

      <main className={`modern-content photos-layout ${selectedImage ? 'blurred' : ''}`}>
        <h1 className="list-page-title">OUR PHOTOS TOGETHER</h1>

        <div className="gallery-container">
          {categories.map((category, index) => (
            <div key={index} className="photo-section">
              <h2 className="section-title">{category.title}</h2>
              
              <div className="photo-slider-wrapper">
                <div className="photo-track">
                  {/* We duplicate images to create an infinite scroll effect */}
                  {[...category.images, ...category.images].map((img, i) => (
                    <div key={i} className="photo-card" onClick={() => setSelectedImage(img)}>
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
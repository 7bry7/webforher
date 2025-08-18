/*
 * FOR HER - Birthday Website JavaScript
 * 
 * A romantic birthday website for Mia with interactive features
 * Optimized for iPhone SE 2nd gen and mobile devices
 * 
 * Features:
 * - Secure login system with custom credentials
 * - Interactive animations and hover effects
 * - Mobile-responsive navigation
 * - Password visibility toggle
 * - Form validation and user feedback
 */

////////////////////////////////INDEX.HTML FUNCTIONALITY////////////////////////////////

/**
 * LOGOUT FUNCTIONALITY
 * Asks Mia with confirmation dialog before logging out
 * Redirects to the login page upon confirmation
 */
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(){
        // Show confirmation dialog before logging out
        if (confirm("Are you sure you want to log out?")) {
            //Redirect to login page
            window.location.href = 'login.html';
        }
        // If user cancels, do nothing
    });
}

/**
 * PASSWORD TOGGLE FUNCTIONALITY
 * Allows users to show/hide password input for better usability
 * Changes eye icon between 👁️ (hidden) and 🙈 (visible) states
 */
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle');
    
    // Check if both elements exist before proceeding
    if (passwordInput && toggleIcon) {
        if (passwordInput.type === 'password') {
            // Show password - change input type to text
            passwordInput.type = 'text';
            toggleIcon.textContent = '🙈'; // "Don't look" emoji when password is visible
        } else {
            // Hide password - change input type back to password
            passwordInput.type = 'password';
            toggleIcon.textContent = '👁️'; // Eye emoji when password is hidden
        }
    }
}

/**
 * LOGIN FORM AUTHENTICATION
 * Handles the romantic login system with custom credentials
 * Username: "mia" | Password: "iloveyou"
 * Includes form validation and romantic error messages
 */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        // Prevent default form submission to handle custom authentication
        e.preventDefault();
        
        // Get form input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Check if "Do you love me?" checkbox is checked (optional feature)
        const rememberMe = document.getElementById('rememberMe') ? 
            document.getElementById('rememberMe').checked : false;
        
        // Define the romantic login credentials
        const correctUsername = "mia";        // Her name as username
        const correctPassword = "iloveyou";   // Romantic password
        
        // Validate credentials and redirect to main page
        if (username === correctUsername && password === correctPassword) {
            // Successful login - redirect to main dashboard
            window.location.href = 'homepage.html';
        } else {
            // Failed login - show romantic error message
            alert('Wrong credentails, baby!'); // Note: keeping original typo for authenticity
        }
    });

    /**
     * INPUT FOCUS ANIMATIONS
     * Adds subtle scaling effects when users interact with form inputs
     * Enhances user experience with smooth visual feedback
     */
    document.querySelectorAll('.form-input').forEach(input => {
        // Scale up slightly when input is focused (user clicks/taps)
        input.addEventListener('focus', function() {
            this.parentNode.style.transform = 'scale(1.02)';
        });
        
        // Scale back to normal when input loses focus
        input.addEventListener('blur', function() {
            this.parentNode.style.transform = 'scale(1)';
        });
    });
}

////////////////////////////////homepage.HTML FUNCTIONALITY////////////////////////////////

/**
 * NAVIGATION SYSTEM
 * Handles sidebar navigation between different sections
 * Sections: MY HOME, MILESTONES, PHOTOS, LOVE NOTES
 */
const navItems = document.querySelectorAll('.nav-item');
if (navItems.length > 0) {
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Prevent default link behavior
            //e.preventDefault();
            
            // Remove active class from all navigation items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the section name for future content switching
            const section = this.textContent.trim();
            console.log('Navigating to:', section);
            
            // TODO: Add logic to show different content based on navigation
            // This is where you'll implement section switching when building
            // MILESTONES, PHOTOS, and LOVE NOTES sections
        });
    });
}

/**
 * "SEE MORE" BUTTON FUNCTIONALITY
 * Main call-to-action button on the homepage
 * Currently shows a loving alert - can be expanded for more content
 */
const seeMoreBtn = document.querySelector('.see-more-btn');
if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', function() {
        // Show romantic message when button is clicked
        alert('Exploring more content for Mia! 💕');
        
        // TODO: Implement actual content expansion or navigation
        // This could redirect to a specific section or show additional content
    });
}

/**
 * MOBILE MENU TOGGLE
 * Responsive navigation for mobile devices (especially iPhone SE 2nd gen)
 * Toggles sidebar visibility on smaller screens
 */
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        // Toggle active class to show/hide sidebar on mobile
        sidebar.classList.toggle('active');
    }
}

/**
 * INTERACTIVE CLOUD ANIMATIONS
 * Adds playful hover effects to the decorative clouds
 * Enhances the romantic atmosphere with gentle animations
 */
const clouds = document.querySelectorAll('.cloud');
if (clouds.length > 0) {
    clouds.forEach(cloud => {
        // Scale up cloud on hover for interactive feel
        cloud.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        // Scale back to normal when hover ends
        cloud.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * --- Milestones Page Functionality ---
 */

// Milestone data with your personal messages
const milestones = {
    milestone1: {
        icon: "💖",
        title: "NILIGAWAN KITAAAAA",
        date: "November 2023",
        message: "This was the beginning of everything beautiful between us, my love. I remember how nervous I was, but also how excited and hopeful I felt. You were so amazing, and I knew right then that I wanted to spend every moment getting to know you better. That day changed my life forever because it was the start of us. You made me believe in love again, baby. ✨"
    },
    milestone2: {
        icon: "💋",
        title: "FIRST KISS",
        date: "2 P. Conducto Street",
        message: "Our first kiss... I still get butterflies thinking about that magical moment. It was so perfect, so tender, and so full of love. That kiss told me everything I needed to know - that we were meant to be together. The way you looked at me afterwards, the way my heart was beating so fast... it was like the whole world stopped just for us. That street will always be special to me because it's where we sealed our love with that beautiful first kiss. 💕"
    },
    milestone3: {
        icon: "🥰",
        title: "SINAGOT MO AKOOOO",
        date: "January 15, 2024",
        message: "The happiest day of my life! When you said yes to being my girlfriend, I felt like I could conquer the world. You made me the luckiest person alive, Mia. I remember exactly how you looked, exactly what you said, and exactly how my heart felt like it was going to burst with joy. From that moment, I knew that every day with you would be an adventure filled with love, laughter, and endless happiness. Thank you for choosing me, my beautiful girlfriend. 💖"
    },
    milestone4: {
        icon: "🎉",
        title: "FIRST MONTHSARY",
        date: "February 15, 2024",
        message: "Our first month together was like a beautiful dream that I never wanted to wake up from. Every day with you felt like magic, and celebrating our first monthsary was so special. I was amazed at how much love could grow in just one month. You showed me what it means to be truly happy, to wake up excited about each day because I get to spend it with you. This was just the beginning of many more celebrations of our love. Here's to many more months and years together, my darling! 🌟"
    },
    milestone5: {
        icon: "👑",
        title: "FIRST ANNIVERSARY",
        date: "January 15, 2025",
        message: "A whole year of pure bliss with you, my queen! This anniversary means everything to me because it represents 365 days of growing more in love with you. Through every laugh, every adventure, every quiet moment together, you've shown me what true love looks like. You've been my support, my inspiration, my everything. Looking back at this year, I'm overwhelmed with gratitude for having you in my life. Here's to many more years of being madly in love with my perfect girlfriend. I love you more than words can express, Mia! 👑✨"
    }
};

function openModal(milestoneId) {
    const milestone = milestones[milestoneId];
    const modal = document.getElementById('milestoneModal');
    if (!milestone || !modal) return;
    document.getElementById('modalIcon').textContent = milestone.icon;
    document.getElementById('modalTitle').textContent = milestone.title;
    document.getElementById('modalDate').textContent = milestone.date;
    document.getElementById('modalMessage').textContent = milestone.message;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('milestoneModal');
    if (modal) modal.classList.remove('active');
}

function navigateTo(page) {
    alert(`Navigating to ${page} page...`);
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('milestoneModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target.id === 'milestoneModal') {
                closeModal();
            }
        });
    }

    // Add hover effects to table rows
    document.querySelectorAll('.table-row').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 20px rgba(197, 48, 48, 0.2)';
        });
        row.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});

/*
 * FUTURE ENHANCEMENTS TO IMPLEMENT:
 * 
 * 1. SECTION CONTENT SWITCHING
 *    - Add content containers for each navigation section
 *    - Implement smooth transitions between sections
 *    - Load content dynamically based on navigation
 * 
 * 2. PHOTO GALLERY FUNCTIONALITY
 *    - Image loading and display
 *    - Lightbox for full-size viewing
 *    - Swipe gestures for mobile
 * 
 * 3. LOVE NOTES SYSTEM
 *    - Message categories (sad, happy, birthday, etc.)
 *    - Random message selection
 *    - Personalized greeting based on time of day
 * 
 * 4. MILESTONES TIMELINE
 *    - Chronological display of relationship milestones
 *    - Interactive timeline navigation
 *    - Date-based content loading
 * 
 * 5. ENHANCED MOBILE INTERACTIONS
 *    - Touch gestures for navigation
 *    - Swipe between sections
 *    - Improved responsive animations
 */
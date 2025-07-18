////////////////////////////////INDEX.HTML////////////////////////////////

// Password toggle functionality
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle');
    if (passwordInput && toggleIcon) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            toggleIcon.textContent = '👁️';
        }
    }
}

// Login form functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe') ? document.getElementById('rememberMe').checked : false;
        const correctUsername = "mia";
        const correctPassword = "iloveyou";
        if (username === correctUsername && password === correctPassword) {
            window.location.href = 'main.html';
        } else {
            alert('Wrong credentails, baby!');
        }
    });

    // Input focus/blur animation
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.style.transform = 'scale(1.02)';
        });
        input.addEventListener('blur', function() {
            this.parentNode.style.transform = 'scale(1)';
        });
    });
}

////////////////////////////////MAIN.HTML////////////////////////////////

// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
if (navItems.length > 0) {
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            // You can add logic to show different content based on navigation
            const section = this.textContent.trim();
            console.log('Navigating to:', section);
        });
    });
}

// See More button functionality
const seeMoreBtn = document.querySelector('.see-more-btn');
if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', function() {
        alert('Exploring more content for Mia! 💕');
    });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Cloud interactive animations
const clouds = document.querySelectorAll('.cloud');
if (clouds.length > 0) {
    clouds.forEach(cloud => {
        cloud.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        cloud.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}


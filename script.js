document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Animation (Subtle AI Glow Example)
    const heroAnimationBg = document.querySelector('.hero-animation-bg');
    if (heroAnimationBg) {
        let glowIntensity = 0;
        let increasing = true;

        function animateGlow() {
            if (increasing) {
                glowIntensity += 0.005;
                if (glowIntensity >= 0.2) {
                    increasing = false;
                }
            } else {
                glowIntensity -= 0.005;
                if (glowIntensity <= 0.05) {
                    increasing = true;
                }
            }
            heroAnimationBg.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,${glowIntensity}) 0%, rgba(255,255,255,0) 70%)`;
            requestAnimationFrame(animateGlow);
        }
        // Start animation only if the element exists
        // requestAnimationFrame(animateGlow); // Uncomment to activate basic glow
        // For a more complex snake animation, a canvas implementation would be better.
        // This is a placeholder for a more sophisticated animation.
        console.log('Hero animation placeholder active. Consider a canvas for complex effects.');
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation toggle (basic example)
    // Add a menu button to your HTML: <button class="menu-toggle">Menu</button>
    // const menuToggle = document.querySelector('.menu-toggle'); 
    // const navUl = document.querySelector('nav ul');
    // if (menuToggle && navUl) {
    //     menuToggle.addEventListener('click', () => {
    //         navUl.classList.toggle('active');
    //     });
    // }

    // Dark Mode Toggle (Optional - Placeholder)
    // Add a button: <button id="darkModeToggle">Toggle Dark Mode</button>
    // const darkModeToggle = document.getElementById('darkModeToggle');
    // if (darkModeToggle) {
    //     darkModeToggle.addEventListener('click', () => {
    //         document.body.classList.toggle('dark-mode');
    //         // Optionally save preference to localStorage
    //         if (document.body.classList.contains('dark-mode')) {
    //             localStorage.setItem('theme', 'dark');
    //         } else {
    //             localStorage.setItem('theme', 'light');
    //         }
    //     });

    //     // Check for saved theme preference
    //     if (localStorage.getItem('theme') === 'dark') {
    //         document.body.classList.add('dark-mode');
    //     }
    // }

    console.log('JavaScript file loaded and DOM fully parsed.');
});
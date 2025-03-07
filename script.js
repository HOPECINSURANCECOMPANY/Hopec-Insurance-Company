const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const claimButton = document.getElementById('claimButton');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

document.addEventListener('DOMContentLoaded', function() {
    const claimButton = document.getElementById('claimButton');
    if (claimButton) {
        claimButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('claimPopup').style.display = 'block';
        });
    }

    // Add event listeners to handle navigation with popup close
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent immediate navigation

            // Close any open popups
            if (document.getElementById('claimPopup') && document.getElementById('claimPopup').style.display === 'block') {
                document.getElementById('claimPopup').style.display = 'none';
            }
            if (document.getElementById('pricingPopup') && document.getElementById('pricingPopup').style.display === 'block') {
                document.getElementById('pricingPopup').style.display = 'none';
            }

            const href = this.getAttribute('href'); // Get the navigation target

            if (href === '#services') {
                // Scroll to the services section
                const servicesSection = document.querySelector('.services');
                servicesSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else if(href) {
                // Navigate to the link after a short delay
                window.location.href = href;
            }
        });
    });
});
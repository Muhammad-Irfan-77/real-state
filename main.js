document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Effect on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal, .reveal-left');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Property Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                propertyCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.classList.remove('hide');
                        // re-trigger animation
                        card.classList.remove('active');
                        setTimeout(() => card.classList.add('active'), 50);
                    } else {
                        // Check if card contains the filter value in its text
                        const cardText = card.textContent.toLowerCase();
                        if (cardText.includes(filterValue.toLowerCase())) {
                            card.classList.remove('hide');
                            card.classList.remove('active');
                            setTimeout(() => card.classList.add('active'), 50);
                        } else {
                            card.classList.add('hide');
                        }
                    }
                });
            });
        });
    }
});

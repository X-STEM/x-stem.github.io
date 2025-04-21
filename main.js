// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100,
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    

    document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease',
            once: true,
            offset: 100
        });
    }
    
    // Add hover effect to resource items
    const resourceItems = document.querySelectorAll('.resource-item');
    resourceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.resource-icon i');
            icon.classList.add('pulse-effect');
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.resource-icon i');
            icon.classList.remove('pulse-effect');
        });
    });
    
    // Add category expansion/collapse functionality (for mobile)
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const category = this.parentElement;
                const items = category.querySelector('.resource-items');
                
                if (items.style.maxHeight) {
                    items.style.maxHeight = null;
                } else {
                    items.style.maxHeight = items.scrollHeight + 'px';
                }
            }
        });
    });
});
    hamburger.addEventListener('click', function() {
        this.classList.toggle('menu-open');
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking a nav link (on mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('menu-open');
            nav.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }
    });
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    // Competition filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const competitionCards = document.querySelectorAll('.competition-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show all cards if filter is 'all'
            if (filter === 'all') {
                competitionCards.forEach(card => {
                    card.style.display = 'flex';
                    // Add animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 100);
                });
            } else {
                // Filter cards based on data attribute
                competitionCards.forEach(card => {
                    if (card.classList.contains(filter)) {
                        card.style.display = 'flex';
                        // Add animation
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 100);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Glitch effect enhancement
    const glitchElement = document.querySelector('.glitch-effect');
    if (glitchElement) {
        // Occasionally trigger more intense glitch
        setInterval(() => {
            glitchElement.classList.add('intense-glitch');
            setTimeout(() => {
                glitchElement.classList.remove('intense-glitch');
            }, 200);
        }, 5000);
    }
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                const heroContent = document.querySelector('.hero-content');
                heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
                
                const overlay = document.querySelector('.overlay');
                overlay.style.backgroundColor = `rgba(0, 0, 0, ${0.7 + (scrollPosition * 0.0003)})`;
            }
        });
    }
    
    // Add animated class to section headers when scrolled into view
    const sectionHeaders = document.querySelectorAll('.section-header');
    const animateHeaders = () => {
        sectionHeaders.forEach(header => {
            const headerTop = header.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (headerTop < windowHeight - 100) {
                header.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateHeaders);
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Dynamic counters for LaunchSB event
    const specialEvent = document.querySelector('.meeting-card.special');
    if (specialEvent) {
        specialEvent.addEventListener('mouseenter', function() {
            this.classList.add('pulse-effect');
        });
        
        specialEvent.addEventListener('mouseleave', function() {
            this.classList.remove('pulse-effect');
        });
    }
    
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
    
    // Add hover effect to competition cards
    competitionCards.forEach(card => {
        card.classList.add('card-hover');
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button, .filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Typing effect for subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Enhanced competition date display
    const upcomingCompetitionCards = document.querySelectorAll('.competition-card');
    upcomingCompetitionCards.forEach(card => {
        const dateText = card.querySelector('.detail:nth-child(2)');
        if (dateText) {
            const dateStr = dateText.textContent;
            // Extract date information (very basic - would need refinement for real implementation)
            if (dateStr.includes('Submit by')) {
                const date = dateStr.replace('Submit by', '').trim();
                
                // Check if date is in the future
                const today = new Date();
                const month = date.split(' ')[0];
                const day = parseInt(date.split(' ')[1].replace('th', '').replace('st', '').replace('nd', '').replace('rd', ''));
                
                // Very simple month to number conversion
                const months = {
                    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
                    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
                };
                
                const compDate = new Date(2025, months[month], day);
                
                if (compDate < today) {
                    card.classList.add('past-competition');
                    card.style.opacity = '0.7';
                } else if ((compDate - today) / (1000 * 60 * 60 * 24) < 30) {
                    // Less than 30 days away
                    const countdownBadge = document.createElement('div');
                    countdownBadge.classList.add('countdown-badge');
                    const daysLeft = Math.ceil((compDate - today) / (1000 * 60 * 60 * 24));
                    countdownBadge.textContent = `${daysLeft} days left`;
                    card.appendChild(countdownBadge);
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease',
            once: true,
            offset: 100
        });
    }
    
    // Add hover effect to resource items
    const resourceItems = document.querySelectorAll('.resource-item');
    resourceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.resource-icon i');
            icon.classList.add('pulse-effect');
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.resource-icon i');
            icon.classList.remove('pulse-effect');
        });
    });
    
    // Add category expansion/collapse functionality (for mobile)
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const category = this.parentElement;
                const items = category.querySelector('.resource-items');
                
                if (items.style.maxHeight) {
                    items.style.maxHeight = null;
                } else {
                    items.style.maxHeight = items.scrollHeight + 'px';
                }
            }
        });
    });
});
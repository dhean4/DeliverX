// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initFloatingAnimations();
    initHoverEffects();
    initNavbarScroll();
});

// Initialize all animations matching the original Webflow template
function initAnimations() {
    // Hero section animations
    const heroTl = gsap.timeline({ delay: 0.3 });

    // Hero content animations
    heroTl
        .from('.section-badge', {
            duration: 0.6,
            opacity: 0,
            y: 20,
            ease: 'power2.out'
        })
        .from('.hero-title', {
            duration: 0.8,
            opacity: 0,
            y: 30,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.hero-description', {
            duration: 0.6,
            opacity: 0,
            y: 20,
            ease: 'power2.out'
        }, '-=0.2')
        .from('.main-image', {
            duration: 1,
            opacity: 0,
            scale: 0.8,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.floating-card-1', {
            duration: 0.8,
            opacity: 0,
            scale: 0.6,
            rotation: -10,
            ease: 'back.out(1.7)'
        }, '-=0.4')
        .from('.floating-card-2', {
            duration: 0.8,
            opacity: 0,
            scale: 0.6,
            rotation: 15,
            ease: 'back.out(1.7)'
        }, '-=0.6')
        .from('.stats-grid .stat-item', {
            duration: 0.6,
            opacity: 0,
            y: 30,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.2');

    // Story section animations
    gsap.utils.toArray('.story-image img').forEach((img, i) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img.closest('.story-image'),
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            opacity: 0,
            scale: 0.85,
            ease: 'power2.out'
        });
    });

    gsap.utils.toArray('.story-content').forEach((content, i) => {
        gsap.from(content.children, {
            scrollTrigger: {
                trigger: content,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            opacity: 0,
            y: 40,
            stagger: 0.2,
            ease: 'power2.out'
        });
    });

    // Journey section animations
    gsap.from('.journey-content', {
        scrollTrigger: {
            trigger: '.journey-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 0,
        x: -40,
        ease: 'power2.out'
    });

    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        opacity: 0,
        scale: 0.85,
        y: 30,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Partners section animations
    gsap.from('.partners-section .section-badge', {
        scrollTrigger: {
            trigger: '.partners-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        opacity: 0,
        y: 20,
        ease: 'power2.out'
    });

    gsap.from('.partners-section .section-title', {
        scrollTrigger: {
            trigger: '.partners-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power2.out',
        delay: 0.2
    });

    gsap.from('.partner-icon img', {
        scrollTrigger: {
            trigger: '.partners-section .row',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 0,
        y: 20,
        rotateX: -20,
        transformOrigin: 'bottom center',
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.4
    });

    gsap.from('.partner-card', {
        scrollTrigger: {
            trigger: '.partners-section .row',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.6
    });

    // Press section animations
    gsap.from('.press-section .section-badge', {
        scrollTrigger: {
            trigger: '.press-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        opacity: 0,
        y: 20,
        ease: 'power2.out'
    });

    gsap.from('.press-section .section-title', {
        scrollTrigger: {
            trigger: '.press-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power2.out',
        delay: 0.2
    });

    gsap.from('.news-card', {
        scrollTrigger: {
            trigger: '.press-section .row',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        opacity: 0,
        scale: 0.85,
        y: 30,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.4
    });

    // Footer animations
    gsap.from('.footer-top', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power2.out'
    });

    gsap.from('.footer-middle', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power2.out',
        delay: 0.2
    });

    gsap.from('.footer-bottom', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power2.out',
        delay: 0.4
    });
}

// Initialize floating animations for hero cards
function initFloatingAnimations() {
    // Continuous floating animation for floating cards
    const card1 = document.querySelector('.floating-card-1');
    const card2 = document.querySelector('.floating-card-2');

    if (card1) {
        gsap.to(card1, {
            y: -12,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: 1
        });

        gsap.to(card1, {
            rotation: '+=5',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: 1.5
        });
    }

    if (card2) {
        gsap.to(card2, {
            y: 8,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: 1.2
        });

        gsap.to(card2, {
            rotation: '-=3',
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: 1.8
        });
    }
}

// Initialize hover effects
function initHoverEffects() {
    // Partner cards hover effect
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -8,
                scale: 1.02,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // News cards hover effect
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -5,
                scale: 1.01,
                ease: 'power2.out'
            });

            gsap.to(this.querySelector('.news-arrow'), {
                duration: 0.3,
                x: 5,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: 'power2.out'
            });

            gsap.to(this.querySelector('.news-arrow'), {
                duration: 0.3,
                x: 0,
                ease: 'power2.out'
            });
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.2,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.2,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // Timeline cards hover effect
    const timelineCards = document.querySelectorAll('.card.chronology');
    timelineCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -5,
                scale: 1.02,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'scrolled', targets: navbar },
        onToggle: self => {
            if (self.isActive) {
                gsap.to(navbar, {
                    duration: 0.3,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    ease: 'power2.out'
                });
            } else {
                gsap.to(navbar, {
                    duration: 0.3,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(0px)',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    ease: 'power2.out'
                });
            }
        }
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetSection,
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    }
});

// Page loading animation
window.addEventListener('load', function() {
    gsap.from('body', {
        duration: 0.5,
        opacity: 0,
        ease: 'power2.out'
    });
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const text = counter.textContent;
        const numberMatch = text.match(/\d+\.?\d*/);
        const target = numberMatch ? parseFloat(numberMatch[0]) : 0;
        const suffix = text.replace(/[\d\.]/g, '');

        gsap.from({ val: 0 }, {
            duration: 2,
            val: target,
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            onUpdate: function() {
                const current = this.targets()[0].val;
                if (suffix.includes('M')) {
                    counter.textContent = Math.ceil(current) + 'M+';
                } else if (suffix.includes('k')) {
                    counter.textContent = Math.ceil(current) + 'k+';
                } else if (suffix.includes('%')) {
                    counter.textContent = current.toFixed(1) + '%';
                } else {
                    counter.textContent = Math.ceil(current) + suffix;
                }
            },
            ease: 'power2.out'
        });
    });
}

// Initialize counter animations
setTimeout(animateCounters, 1000);
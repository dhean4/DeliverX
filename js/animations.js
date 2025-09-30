// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // HEADER ANIMATIONS
    // ==========================================
    
    // Header fade in and slide down on page load
    gsap.from('.header-wrapper', {
        duration: 0.8,
        y: -100,
        opacity: 0,
        ease: 'power3.out'
    });

    // Header shadow on scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
            className: 'header-scrolled',
            targets: '.header-wrapper'
        }
    });

    
    // ==========================================
    // HERO SECTION ANIMATIONS
    // ==========================================
    
    // Hero section fade in
    gsap.from('.section.hero', {
        duration: 1,
        opacity: 0,
        ease: 'power2.out'
    });

    // Hero badge animation
    gsap.from('.hero .text-200.bold.text-uppercase', {
        duration: 0.6,
        y: 30,
        opacity: 0,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Hero heading animation
    gsap.from('.hero h1', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: 0.4,
        ease: 'power3.out'
    });

    // Hero paragraph animation
    gsap.from('.hero .inner-container._590px p', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });

    // Hero main image animation
    gsap.from('.hero .position-relative > img', {
        duration: 1,
        scale: 0.9,
        opacity: 0,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Floating card 1 - continuous animation
    gsap.to('.hero-02-image-absolute-01', {
        y: '15px',
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    });

    // Floating card 2 - continuous animation (opposite direction)
    gsap.to('.hero-02-image-absolute-02', {
        y: '-15px',
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    });

    // Initial fade in for floating cards
    gsap.from('.hero-02-image-absolute-01', {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        delay: 0.8,
        ease: 'back.out(1.4)'
    });

    gsap.from('.hero-02-image-absolute-02', {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        delay: 1,
        ease: 'back.out(1.4)'
    });

    
    // ==========================================
    // STATS SECTION ANIMATIONS
    // ==========================================
    
    // Animate stats on scroll
    const statsItems = document.querySelectorAll('.grid-4-columns.stats > div');
    
    statsItems.forEach((stat, index) => {
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: index * 0.1,
            ease: 'power3.out'
        });

        // Counter animation for numbers - IMPROVED VERSION
        const numberElement = stat.querySelector('.display-2');
        if (numberElement) {
            const text = numberElement.innerHTML; // Use innerHTML to preserve HTML
            const numberMatch = text.match(/[\d.]+/);
            
            if (numberMatch) {
                const finalNumber = parseFloat(numberMatch[0]);
                // Extract everything after the number (including span tags)
                const suffix = text.substring(text.indexOf(numberMatch[0]) + numberMatch[0].length);
                
                // Set initial state to final value (no animation from 0)
                numberElement.innerHTML = numberMatch[0] + suffix;
                
                // Animate from 0 to final number
                let hasAnimated = false;
                
                ScrollTrigger.create({
                    trigger: stat,
                    start: 'top 85%',
                    onEnter: () => {
                        if (!hasAnimated) {
                            hasAnimated = true;
                            gsap.from({ value: 0 }, {
                                duration: 2,
                                value: finalNumber,
                                ease: 'power2.out',
                                onUpdate: function() {
                                    let currentValue;
                                    if (finalNumber >= 100) {
                                        currentValue = Math.floor(this.targets()[0].value);
                                    } else if (finalNumber >= 10) {
                                        currentValue = this.targets()[0].value.toFixed(1);
                                    } else {
                                        currentValue = this.targets()[0].value.toFixed(1);
                                    }
                                    numberElement.innerHTML = currentValue + suffix;
                                },
                                onComplete: function() {
                                    // Ensure final value is exact
                                    numberElement.innerHTML = numberMatch[0] + suffix;
                                }
                            });
                        }
                    }
                });
            }
        }
    });

    
    // ==========================================
    // STORY SECTION ANIMATIONS
    // ==========================================
    
    // Story images scale up on scroll
    const storyImages = document.querySelectorAll('.story .image-wrapper');
    
    storyImages.forEach(image => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1.2,
            scale: 0.85,
            opacity: 0,
            ease: 'power2.out'
        });
    });

    // Story content fade in
    const storyContents = document.querySelectorAll('.story .inner-container._480px, .story .inner-container._533px');
    
    storyContents.forEach(content => {
        gsap.from(content.children, {
            scrollTrigger: {
                trigger: content,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 40,
            opacity: 0,
            stagger: 0.15,
            ease: 'power3.out'
        });
    });

    
    // ==========================================
    // JOURNEY/TIMELINE SECTION ANIMATIONS
    // ==========================================
    
    // Sticky content fade in
    gsap.from('.position-sticky .inner-container._520px > *', {
        scrollTrigger: {
            trigger: '.position-sticky',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Timeline cards animation
    const timelineCards = document.querySelectorAll('.card.chronology');
    
    timelineCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: 50,
            opacity: 0,
            delay: index * 0.1,
            ease: 'power3.out'
        });

        // Year badge special animation
        const yearBadge = card.querySelector('.heading-h4-size');
        if (yearBadge) {
            gsap.from(yearBadge, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                duration: 0.8,
                scale: 0,
                opacity: 0,
                delay: index * 0.1 + 0.3,
                ease: 'back.out(2)'
            });
        }
    });

    
    // ==========================================
    // PARTNERS SECTION ANIMATIONS
    // ==========================================
    
    // Partners heading
    gsap.from('.partners-section .inner-container._700px > *', {
        scrollTrigger: {
            trigger: '.partners-section .inner-container._700px',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Partner cards
    const partnerCards = document.querySelectorAll('.grid-3-columns.gap-row-80px > div');
    
    partnerCards.forEach((card, index) => {
        // Icon animation with rotation
        const icon = card.querySelector('.inner-container._218px');
        if (icon) {
            gsap.from(icon, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                duration: 1,
                y: 30,
                rotateX: -20,
                opacity: 0,
                delay: index * 0.15,
                ease: 'power3.out'
            });
        }

        // Content fade in
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        
        gsap.from([title, description], {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 20,
            opacity: 0,
            stagger: 0.1,
            delay: index * 0.15 + 0.3,
            ease: 'power3.out'
        });
    });

    
    // ==========================================
    // PRESS SECTION ANIMATIONS
    // ==========================================
    
    // Press heading
    gsap.from('.press-section .inner-container._620px > *', {
        scrollTrigger: {
            trigger: '.press-section .inner-container._620px',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Press cards
    const pressCards = document.querySelectorAll('.card.press.link-content');
    
    pressCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            scale: 0.95,
            delay: (index % 2) * 0.15,
            ease: 'power3.out'
        });

        // Hover animation
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                scale: 1,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                ease: 'power2.out'
            });
        });
    });

    
    // ==========================================
    // FOOTER ANIMATIONS
    // ==========================================
    
    // Footer top section
    gsap.from('.footer-top', {
        scrollTrigger: {
            trigger: '.footer-top',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    });

    // Footer middle section
    gsap.from('.footer-middle', {
        scrollTrigger: {
            trigger: '.footer-middle',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Footer bottom section
    gsap.from('.footer-bottom', {
        scrollTrigger: {
            trigger: '.footer-bottom',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });

    
    // ==========================================
    // BUTTON HOVER ANIMATIONS
    // ==========================================
    
    // Primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(97, 70, 255, 0.3)',
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                boxShadow: '0 0 0 rgba(97, 70, 255, 0)',
                ease: 'power2.out'
            });
        });
    });

    // Secondary buttons
    const secondaryButtons = document.querySelectorAll('.btn-secondary');
    
    secondaryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    
    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#0') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: target,
                            offsetY: 80
                        },
                        ease: 'power3.inOut'
                    });
                }
            }
        });
    });

    
    // ==========================================
    // MOBILE MENU ANIMATION
    // ==========================================
    
    const hamburger = document.querySelector('.hamburger-menu-wrapper');
    const mobileMenu = document.querySelector('.header-nav-menu-wrapper');
    const navOverlay = document.querySelector('.w-nav-overlay');
    
    if (hamburger && mobileMenu) {
        // Set initial state for mobile menu
        if (window.innerWidth <= 991) {
            gsap.set(mobileMenu, { 
                display: 'none',
                opacity: 0,
                height: 0 
            });
        }
        
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                // Open menu
                gsap.set(mobileMenu, { display: 'block' });
                gsap.to(mobileMenu, {
                    duration: 0.4,
                    height: 'auto',
                    opacity: 1,
                    ease: 'power3.out'
                });
                
                // Animate hamburger bars
                gsap.to('.hamburger-menu-bar.top', {
                    duration: 0.3,
                    rotation: 45,
                    y: 8,
                    ease: 'power2.out'
                });
                gsap.to('.hamburger-menu-bar.bottom', {
                    duration: 0.3,
                    rotation: -45,
                    y: -8,
                    ease: 'power2.out'
                });
                
                // Show overlay if it exists
                if (navOverlay) {
                    gsap.set(navOverlay, { display: 'block' });
                    gsap.to(navOverlay, {
                        duration: 0.3,
                        opacity: 1
                    });
                }
            } else {
                // Close menu
                gsap.to(mobileMenu, {
                    duration: 0.3,
                    height: 0,
                    opacity: 0,
                    ease: 'power3.in',
                    onComplete: () => {
                        gsap.set(mobileMenu, { display: 'none' });
                    }
                });
                
                // Reset hamburger bars
                gsap.to('.hamburger-menu-bar.top', {
                    duration: 0.3,
                    rotation: 0,
                    y: 0,
                    ease: 'power2.out'
                });
                gsap.to('.hamburger-menu-bar.bottom', {
                    duration: 0.3,
                    rotation: 0,
                    y: 0,
                    ease: 'power2.out'
                });
                
                // Hide overlay
                if (navOverlay) {
                    gsap.to(navOverlay, {
                        duration: 0.3,
                        opacity: 0,
                        onComplete: () => {
                            gsap.set(navOverlay, { display: 'none' });
                        }
                    });
                }
            }
        });
        
        // Close menu when clicking on overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', function() {
                if (hamburger.classList.contains('active')) {
                    hamburger.click();
                }
            });
        }
        
        // Close menu when clicking on a nav link
        const navLinks = mobileMenu.querySelectorAll('.header-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (hamburger.classList.contains('active') && window.innerWidth <= 991) {
                    hamburger.click();
                }
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 991) {
                // Desktop: ensure menu is visible
                gsap.set(mobileMenu, { 
                    display: 'block',
                    opacity: 1,
                    height: 'auto' 
                });
                hamburger.classList.remove('active');
                gsap.set(['.hamburger-menu-bar.top', '.hamburger-menu-bar.bottom'], {
                    rotation: 0,
                    y: 0
                });
                if (navOverlay) {
                    gsap.set(navOverlay, { display: 'none', opacity: 0 });
                }
            } else {
                // Mobile: hide menu if not active
                if (!hamburger.classList.contains('active')) {
                    gsap.set(mobileMenu, { 
                        display: 'none',
                        opacity: 0,
                        height: 0 
                    });
                }
            }
        });
    }

    
    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================
    
    // Refresh ScrollTrigger on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            ScrollTrigger.refresh();
        }, 250);
    });

    // Refresh ScrollTrigger after images load
    window.addEventListener('load', function() {
        ScrollTrigger.refresh();
    });

    console.log('🎨 GSAP Animations initialized successfully!');
});
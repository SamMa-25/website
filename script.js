// Intro animation and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Creative intro animation functionality
    const introOverlay = document.getElementById('introOverlay');
    
    if (introOverlay) {
        // Show intro animation every time
        introOverlay.style.display = 'flex';
        
        let autoTriggerTimer;
        let workShowcaseInterval;
        let currentWorkIndex = 0;
        let isAutoTriggerActive = false;
        
        const workShowcases = [
            'workShowcase1', 'workShowcase2', 'workShowcase3', 
            'workShowcase4', 'workShowcase5', 'workShowcase6'
        ];
        
        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            if (!particlesContainer) return;
            
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }
        
        // Function to start transition phase
        function startTransitionPhase() {
            // Add transitioning class for smooth background change
            introOverlay.classList.add('transitioning');
            
            // Show transition message gradually
            const transitionMessage = document.getElementById('transitionMessage');
            if (transitionMessage) {
                setTimeout(() => {
                    transitionMessage.classList.add('active');
                }, 1000);
            }
            
            // After transition phase, start the creative animation
            setTimeout(() => {
                startCreativeAutoTriggerAnimation();
            }, 5000);
        }
        
        // Function to start creative auto-trigger animation
        function startCreativeAutoTriggerAnimation() {
            if (isAutoTriggerActive) return;
            isAutoTriggerActive = true;
            
            // Hide transition message
            const transitionMessage = document.getElementById('transitionMessage');
            if (transitionMessage) {
                transitionMessage.classList.add('fade-out');
                setTimeout(() => {
                    transitionMessage.classList.remove('active', 'fade-out');
                }, 1000);
            }
            
            // Remove transitioning class and add auto-trigger class
            introOverlay.classList.remove('transitioning');
            introOverlay.classList.add('auto-trigger');
            
            // Wait for background transition to complete before showing content
            setTimeout(() => {
                // Create particles
                createParticles();
                
                // Start the work showcase sequence
                showNextWork();
            }, 2000); // Wait 2 seconds for background transition
        }
        
        // Function to show next work with creative transitions
        function showNextWork() {
            if (!isAutoTriggerActive) return;
            
            // Hide all work showcases
            workShowcases.forEach(id => {
                const showcase = document.getElementById(id);
                if (showcase) {
                    showcase.classList.remove('active', 'entering', 'exiting');
                }
            });
            
            // Show current work showcase with entering animation
            const currentShowcase = document.getElementById(workShowcases[currentWorkIndex]);
            if (currentShowcase) {
                currentShowcase.classList.add('entering');
                
                // After entering animation, make it active
                setTimeout(() => {
                    currentShowcase.classList.remove('entering');
                    currentShowcase.classList.add('active');
                }, 4000);
                
                // Start exit animation after 6 seconds
                setTimeout(() => {
                    if (isAutoTriggerActive) {
                        currentShowcase.classList.add('exiting');
                        currentShowcase.classList.remove('active');
                        
                        // Move to next work after exit animation
                        setTimeout(() => {
                            currentWorkIndex = (currentWorkIndex + 1) % workShowcases.length;
                            showNextWork();
                        }, 3000);
                    }
                }, 6000);
            }
        }
        
        // Set timer for transition phase (10 seconds after hint appears)
        autoTriggerTimer = setTimeout(() => {
            startTransitionPhase();
        }, 10500); // 10.5 seconds (7.5s for hint + 3s wait)
        
        // Function to dismiss intro
        function dismissIntro() {
            // Clear timers and stop animations
            clearTimeout(autoTriggerTimer);
            isAutoTriggerActive = false;
            
            // Hide transition message
            const transitionMessage = document.getElementById('transitionMessage');
            if (transitionMessage) {
                transitionMessage.classList.remove('active', 'fade-out');
            }
            
            // Remove transition classes
            introOverlay.classList.remove('transitioning', 'auto-trigger');
            
            // Hide all work showcases
            workShowcases.forEach(id => {
                const showcase = document.getElementById(id);
                if (showcase) {
                    showcase.classList.remove('active', 'entering', 'exiting');
                }
            });
            
            // Clear particles
            const particlesContainer = document.getElementById('particles');
            if (particlesContainer) {
                particlesContainer.innerHTML = '';
            }
            
            introOverlay.classList.add('fade-out');
            
            // Hide overlay after animation completes
            setTimeout(() => {
                introOverlay.style.display = 'none';
            }, 800);
        }
        
        // Add click event to dismiss intro
        introOverlay.addEventListener('click', dismissIntro);
    }
    
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe work items for animation
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}); 
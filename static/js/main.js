// Mobile Navigation Functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    let isMobileNavOpen = false;

    mobileMenuBtn.addEventListener('click', function() {
      isMobileNavOpen = !isMobileNavOpen;
      
      if (isMobileNavOpen) {
        mobileNav.classList.add('active');
        mobileMenuBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.mobile-nav') && !e.target.closest('.mobile-menu-btn') && isMobileNavOpen) {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
        isMobileNavOpen = false;
      }
    });

    // Mobile dropdown functionality
    function toggleMobileDropdown(dropdownId) {
      const dropdown = document.getElementById(dropdownId);
      const arrow = document.getElementById(dropdownId + '-arrow');
      
      // Close all other dropdowns
      document.querySelectorAll('.mobile-nav-content').forEach(content => {
        if (content.id !== dropdownId) {
          content.classList.remove('active');
          const otherArrow = document.getElementById(content.id + '-arrow');
          if (otherArrow) {
            otherArrow.textContent = '▼';
          }
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('active');
      if (dropdown.classList.contains('active')) {
        arrow.textContent = '▲';
      } else {
        arrow.textContent = '▼';
      }
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Desktop dropdown functionality
    function toggleDropdown(event, id) {
      event.preventDefault();
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item.querySelector('.dropdown-fullscreen')?.id !== id) {
          item.classList.remove('show');
        }
      });
      const item = document.getElementById(id).parentElement;
      item.classList.toggle('show');
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('show'));
      }
    });

    // Theme switcher functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
      body.setAttribute('data-theme', 'light');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      }
    });

    // Footer dropdown functionality
    function toggleFooterDropdown(dropdownId) {
      const dropdown = document.getElementById(dropdownId);
      const arrow = document.getElementById(dropdownId.replace('-dropdown', '-arrow'));
      
      // Close all other dropdowns
      document.querySelectorAll('.footer-dropdown').forEach(dd => {
        if (dd.id !== dropdownId) {
          dd.classList.remove('active');
          const otherArrow = document.getElementById(dd.id.replace('-dropdown', '-arrow'));
          if (otherArrow) {
            otherArrow.textContent = '+';
            otherArrow.classList.remove('rotated');
          }
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('active');
      if (dropdown.classList.contains('active')) {
        arrow.textContent = '×';
        arrow.classList.add('rotated');
      } else {
        arrow.textContent = '+';
        arrow.classList.remove('rotated');
      }
    }

    // Services Toggle Functionality
    const servicesToggle = document.getElementById('servicesToggle');
    const toggleText = document.getElementById('toggleText');
    const toggleIcon = document.getElementById('toggleIcon');
    const hiddenRows = document.querySelectorAll('.services-row.hidden');
    let isExpanded = false;

    servicesToggle.addEventListener('click', function() {
      if (!isExpanded) {
        // Show more services
        hiddenRows.forEach((row, index) => {
          setTimeout(() => {
            row.classList.remove('hidden');
          }, index * 100);
        });
        toggleText.textContent = 'View Less';
        toggleIcon.textContent = '↑';
        servicesToggle.classList.add('expanded');
        isExpanded = true;
      } else {
        // Hide services
        hiddenRows.forEach((row, index) => {
          setTimeout(() => {
            row.classList.add('hidden');
          }, index * 100);
        });
        toggleText.textContent = 'View More';
        toggleIcon.textContent = '↓';
        servicesToggle.classList.remove('expanded');
        isExpanded = false;
      }
    });

    // Contact Form Functionality
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const services = [];
      
      // Collect selected services
      document.querySelectorAll('input[name="services[]"]:checked').forEach(checkbox => {
        services.push(checkbox.value);
      });
      
      // Validate required fields
      const requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'budget', 'companyName', 'region', 'projectDetails'];
      let isValid = true;
      
      requiredFields.forEach(field => {
        const input = document.querySelector(`[name="${field}"]`);
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ef4444';
        } else {
          input.style.borderColor = '#e5e7eb';
        }
      });
      
      // Validate at least one service is selected
      if (services.length === 0) {
        isValid = false;
        alert('Please select at least one service.');
        return;
      }
      
      if (!isValid) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Simulate form submission
      const submitBtn = document.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
      
      // Simulate API call
      setTimeout(() => {
        alert('Thank you for your inquiry! We will get back to you soon.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
      }, 2000);
    });

    // Enhanced Plexus Animation with Continuous Movement and Repulsion
    class PlexusAnimation {
      constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: -1000, y: -1000 };
        this.mouseRadius = 120;
        this.repulsionForce = 1.2;
                
        this.init();
        this.animate();
        this.bindEvents();
      }

      init() {
        this.resize();
        this.createParticles();
      }

      resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
      }

      createParticles() {
        // Increased particle density
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 7000);
        this.particles = [];

        for (let i = 0; i < particleCount; i++) {
          this.particles.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 1.2, // Increased base velocity
            vy: (Math.random() - 0.5) * 1.2, // Increased base velocity
            baseVx: (Math.random() - 0.5) * 1.2, // Store original velocity
            baseVy: (Math.random() - 0.5) * 1.2, // Store original velocity
            radius: Math.random() * 2.5 + 1.5,
            opacity: Math.random() * 0.4 + 0.4,
            baseOpacity: Math.random() * 0.4 + 0.4
          });
        }
      }

      drawParticles() {
        this.particles.forEach(particle => {
          this.ctx.beginPath();
          this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          this.ctx.fillStyle = `rgba(30, 58, 138, ${particle.opacity})`;
          this.ctx.fill();
        });
      }

      drawConnections() {
        const maxDistance = 130;
        
        for (let i = 0; i < this.particles.length; i++) {
          for (let j = i + 1; j < this.particles.length; j++) {
            const dx = this.particles[i].x - this.particles[j].x;
            const dy = this.particles[i].y - this.particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              const opacity = (maxDistance - distance) / maxDistance * 0.5;
              
              // Create gradient effect for lines
              const gradient = this.ctx.createLinearGradient(
                this.particles[i].x, this.particles[i].y,
                this.particles[j].x, this.particles[j].y
              );
              gradient.addColorStop(0, `rgba(30, 58, 138, ${opacity})`);
              gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.8})`);
              gradient.addColorStop(1, `rgba(30, 58, 138, ${opacity})`);

              this.ctx.beginPath();
              this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
              this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                            this.ctx.strokeStyle = gradient;
              this.ctx.lineWidth = 1.2;
              this.ctx.stroke();
            }
          }
        }
      }

      updateParticles() {
        this.particles.forEach(particle => {
          // Calculate distance from mouse
          const dx = this.mouse.x - particle.x;
          const dy = this.mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Reset to base movement when mouse is not nearby
          if (distance > this.mouseRadius) {
            // Gradually return to base velocity
            particle.vx += (particle.baseVx - particle.vx) * 0.02;
            particle.vy += (particle.baseVy - particle.vy) * 0.02;
            particle.opacity += (particle.baseOpacity - particle.opacity) * 0.05;
          } else {
            // Apply repulsion force when mouse is nearby
            const force = (this.mouseRadius - distance) / this.mouseRadius;
            const repulsionX = -(dx / distance) * force * this.repulsionForce;
            const repulsionY = -(dy / distance) * force * this.repulsionForce;
            
            particle.vx += repulsionX;
            particle.vy += repulsionY;
            
            // Increase opacity when interacting
            particle.opacity = Math.min(0.9, particle.baseOpacity + force * 0.3);
          }

          // Continuous movement - always apply base velocity
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off edges and maintain movement
          if (particle.x <= 0 || particle.x >= this.canvas.width) {
            particle.vx *= -0.8;
            particle.baseVx *= -0.8; // Also flip base velocity
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
          }
          if (particle.y <= 0 || particle.y >= this.canvas.height) {
            particle.vy *= -0.8;
            particle.baseVy *= -0.8; // Also flip base velocity
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
          }

          // Apply slight friction to prevent excessive speed
          particle.vx *= 0.995;
          particle.vy *= 0.995;

          // Ensure minimum movement to keep animation alive
          if (Math.abs(particle.vx) < 0.1) {
            particle.vx += (Math.random() - 0.5) * 0.2;
          }
          if (Math.abs(particle.vy) < 0.1) {
            particle.vy += (Math.random() - 0.5) * 0.2;
          }

          // Randomly adjust base velocity occasionally for organic movement
          if (Math.random() < 0.001) {
            particle.baseVx += (Math.random() - 0.5) * 0.1;
            particle.baseVy += (Math.random() - 0.5) * 0.1;
            
            // Keep base velocity within reasonable bounds
            particle.baseVx = Math.max(-2, Math.min(2, particle.baseVx));
            particle.baseVy = Math.max(-2, Math.min(2, particle.baseVy));
          }
        });
      }

      animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();

        requestAnimationFrame(() => this.animate());
      }

      bindEvents() {
        window.addEventListener('resize', () => {
          this.resize();
          this.createParticles();
        });

        this.canvas.addEventListener('mousemove', (e) => {
          const rect = this.canvas.getBoundingClientRect();
          this.mouse.x = e.clientX - rect.left;
          this.mouse.y = e.clientY - rect.top;
        });

        this.canvas.addEventListener('mouseleave', () => {
          this.mouse.x = -1000;
          this.mouse.y = -1000;
        });

        // Touch events for mobile
        this.canvas.addEventListener('touchmove', (e) => {
          e.preventDefault();
          const rect = this.canvas.getBoundingClientRect();
          const touch = e.touches[0];
          this.mouse.x = touch.clientX - rect.left;
          this.mouse.y = touch.clientY - rect.top;
        });

        this.canvas.addEventListener('touchend', () => {
          this.mouse.x = -1000;
          this.mouse.y = -1000;
        });
      }
    }

    // Footer animation on scroll
    function animateFooterOnScroll() {
      const footer = document.getElementById('footer');
      const footerPosition = footer.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (footerPosition < screenPosition) {
        footer.classList.add('animate');
        
        // Animate logo tagline
        const tagline = document.querySelector('.footer-logo-tagline');
        if (tagline) {
          setTimeout(() => {
            tagline.style.opacity = '1';
            tagline.style.transform = 'translateY(0)';
          }, 300);
        }
      }
    }

    // Smooth scroll for footer links
    document.querySelectorAll('.footer-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Add smooth scroll functionality here if needed
      });
    });

    // Initialize animations and sliders when page loads
    document.addEventListener('DOMContentLoaded', () => {
      const canvas = document.getElementById('plexus-canvas');
      new PlexusAnimation(canvas);
      
      // Add scroll listener for footer animation
      window.addEventListener('scroll', animateFooterOnScroll);
      
      // Initial check for footer animation
      animateFooterOnScroll();
    });

    // Load reCAPTCHA
    window.onload = function() {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    // Enhanced footer interactions
    document.addEventListener('DOMContentLoaded', function() {
      // Add hover effects to footer social links
      const socialLinks = document.querySelectorAll('.footer-social-link');
      socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
        });
      });

      // Add click analytics for footer links (placeholder)
      const footerLinks = document.querySelectorAll('.footer-link');
      footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          // Add analytics tracking here
          console.log('Footer link clicked:', this.textContent);
        });
      });

      // Auto-close footer dropdowns when clicking outside
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.footer-column')) {
          document.querySelectorAll('.footer-dropdown.active').forEach(dropdown => {
            dropdown.classList.remove('active');
            const arrow = document.getElementById(dropdown.id.replace('-dropdown', '-arrow'));
            if (arrow) {
              arrow.textContent = '+';
              arrow.classList.remove('rotated');
            }
          });
        }
      });
    });

    // Add keyboard navigation for footer dropdowns
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.footer-dropdown.active').forEach(dropdown => {
          dropdown.classList.remove('active');
          const arrow = document.getElementById(dropdown.id.replace('-dropdown', '-arrow'));
          if (arrow) {
            arrow.textContent = '+';
            arrow.classList.remove('rotated');
          }
        });
      }
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    }

    function updateScrollEffects() {
      animateFooterOnScroll();
      ticking = false;
    }

    window.addEventListener('scroll', requestTick);

    // Responsive behavior adjustments
    function handleResize() {
      const isMobile = window.innerWidth <= 991;
      
      if (isMobile && isMobileNavOpen) {
        // Close mobile nav if screen becomes larger
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
        isMobileNavOpen = false;
      }
      
      // Close desktop dropdowns on mobile
      if (isMobile) {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('show'));
      }
    }

    window.addEventListener('resize', handleResize);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe sections for animations
    document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('.featured-section, .services-section, .careers-section, .contact-section');
      sections.forEach(section => {
        observer.observe(section);
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Form validation enhancements
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function validatePhone(phone) {
      const re = /^[\+]?[1-9][\d]{0,15}$/;
      return re.test(phone.replace(/\s/g, ''));
    }

    // Enhanced form validation
    document.addEventListener('DOMContentLoaded', function() {
      const emailInput = document.querySelector('input[name="email"]');
      const phoneInput = document.querySelector('input[name="phoneNumber"]');
      
      if (emailInput) {
        emailInput.addEventListener('blur', function() {
          if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#ef4444';
            this.setCustomValidity('Please enter a valid email address');
          } else {
            this.style.borderColor = '#e5e7eb';
            this.setCustomValidity('');
          }
        });
      }
      
      if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
          if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = '#ef4444';
            this.setCustomValidity('Please enter a valid phone number');
          } else {
            this.style.borderColor = '#e5e7eb';
            this.setCustomValidity('');
          }
        });
      }
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }

    // Error handling for video elements
    document.addEventListener('DOMContentLoaded', function() {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.addEventListener('error', function() {
          console.warn('Video failed to load:', this.src);
          // Hide video container or show fallback image
          const fallback = this.nextElementSibling;
          if (fallback && fallback.tagName === 'IMG') {
            this.style.display = 'none';
            fallback.style.display = 'block';
          }
        });
      });
    });

    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', function() {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
      });
    }

    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
          .then(function(registration) {
            console.log('ServiceWorker registration successful');
          })
          .catch(function(err) {
            console.log('ServiceWorker registration failed');
          });
      });
    }
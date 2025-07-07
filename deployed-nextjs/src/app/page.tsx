'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PlexusCanvas from '@/components/PlexusCanvas';
import ReCaptcha from '@/components/ReCaptcha';

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const submitTextRef = useRef<HTMLSpanElement>(null);
  const submitLoaderRef = useRef<HTMLSpanElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);
  const errorMessageRef = useRef<HTMLDivElement>(null);
  const servicesToggleRef = useRef<HTMLButtonElement>(null);
  const toggleTextRef = useRef<HTMLSpanElement>(null);
  const toggleIconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Services toggle functionality
    const servicesToggle = servicesToggleRef.current;
    const toggleText = toggleTextRef.current;
    const toggleIcon = toggleIconRef.current;
    let isExpanded = false;

    if (servicesToggle && toggleText && toggleIcon) {
      servicesToggle.addEventListener('click', () => {
        const allRows = document.querySelectorAll('.services-row');
        
        if (!isExpanded) {
          // Show all services
          allRows.forEach(row => {
            row.classList.remove('hidden');
          });
          toggleText.textContent = 'View Less';
          toggleIcon.textContent = '↑';
          isExpanded = true;
        } else {
          // Hide all except first row
          allRows.forEach((row, index) => {
            if (index === 0) {
              row.classList.remove('hidden');
            } else {
              row.classList.add('hidden');
            }
          });
          toggleText.textContent = 'View More';
          toggleIcon.textContent = '↓';
          isExpanded = false;
        }
      });
    }

    // Populate countries dropdown
    populateCountries();

    // Form submission
    const form = formRef.current;
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);

  const handleFormSubmit = async (e: Event) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const submitBtn = submitBtnRef.current;
    const submitText = submitTextRef.current;
    const submitLoader = submitLoaderRef.current;
    
    if (!submitBtn || !submitText || !submitLoader) return;

    // Check if at least one service is selected
    const services = form.querySelectorAll('input[name="services"]:checked');
    if (services.length === 0) {
      showError('Please select at least one service you are interested in.');
      return;
    }

    // Check if reCAPTCHA is completed
    const recaptchaResponse = (window as unknown as { grecaptcha?: { getResponse: () => string } }).grecaptcha?.getResponse();
    if (!recaptchaResponse) {
      showError('Please complete the reCAPTCHA verification.');
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline';

    try {
      // Prepare form data
      const formData = new FormData(form);
      formData.append('g-recaptcha-response', recaptchaResponse);

      // Submit form (you'll need to implement this endpoint)
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        showSuccess(data.message);
        form.reset();
        (window as unknown as { grecaptcha?: { reset: () => void } }).grecaptcha?.reset();
      } else {
        showError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showError('An error occurred. Please try again.');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitText.style.display = 'inline';
      submitLoader.style.display = 'none';
    }
  };

  const showSuccess = (message: string) => {
    hideMessages();
    if (successMessageRef.current) {
      successMessageRef.current.textContent = message;
      successMessageRef.current.style.display = 'block';
    }
    if (messagesContainerRef.current) {
      messagesContainerRef.current.style.display = 'block';
      messagesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showError = (message: string) => {
    hideMessages();
    if (errorMessageRef.current) {
      errorMessageRef.current.textContent = message;
      errorMessageRef.current.style.display = 'block';
    }
    if (messagesContainerRef.current) {
      messagesContainerRef.current.style.display = 'block';
      messagesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hideMessages = () => {
    if (successMessageRef.current) successMessageRef.current.style.display = 'none';
    if (errorMessageRef.current) errorMessageRef.current.style.display = 'none';
    if (messagesContainerRef.current) messagesContainerRef.current.style.display = 'none';
  };

  const populateCountries = () => {
    const countrySelect = document.querySelector('.country-select') as HTMLSelectElement;
    if (!countrySelect) return;

    const countries = [
      { code: 'US', name: 'United States' },
      { code: 'CA', name: 'Canada' },
      { code: 'GB', name: 'United Kingdom' },
      { code: 'AU', name: 'Australia' },
      { code: 'DE', name: 'Germany' },
      { code: 'FR', name: 'France' },
      { code: 'IN', name: 'India' },
      { code: 'PK', name: 'Pakistan' },
      { code: 'BD', name: 'Bangladesh' },
      { code: 'AE', name: 'United Arab Emirates' },
      { code: 'SA', name: 'Saudi Arabia' },
      { code: 'SG', name: 'Singapore' },
      { code: 'MY', name: 'Malaysia' },
      { code: 'TH', name: 'Thailand' },
      { code: 'PH', name: 'Philippines' },
      { code: 'ID', name: 'Indonesia' },
      { code: 'JP', name: 'Japan' },
      { code: 'KR', name: 'South Korea' },
      { code: 'CN', name: 'China' },
      { code: 'BR', name: 'Brazil' },
      { code: 'MX', name: 'Mexico' },
      { code: 'AR', name: 'Argentina' },
      { code: 'CL', name: 'Chile' },
      { code: 'CO', name: 'Colombia' },
      { code: 'PE', name: 'Peru' },
      { code: 'ZA', name: 'South Africa' },
      { code: 'NG', name: 'Nigeria' },
      { code: 'EG', name: 'Egypt' },
      { code: 'KE', name: 'Kenya' },
      { code: 'GH', name: 'Ghana' }
    ];

    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.code;
      option.textContent = country.name;
      countrySelect.appendChild(option);
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Engineering<br />Next-Gen Software
          </h1>
          <p className="hero-description">
            We help startups and enterprises deploy scalable, secure, and impactful digital products.
          </p>
          <Link href="/contact" className="hero-cta">
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="featured-section">
        <PlexusCanvas />
        <div className="featured-content">
          <div className="featured-left">
            <div className="featured-subtitle">PIONEERING TRUST AND INNOVATION</div>
            <h2 className="featured-title">Deployed&apos;s Achievements</h2>
            <p className="featured-description">
              We take pride in empowering businesses worldwide with innovative solutions. 
              Deployed brings an unwavering commitment to excellence, backed by a global presence.
            </p>
            <Link href="/contact" className="featured-cta">Get In Touch</Link>
          </div>
          <div className="featured-right">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Expert Developers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <div className="services-subtitle">OUR SERVICES</div>
            <h2 className="services-title">Transform Your Business</h2>
          </div>
          
          {/* First Row (Always Visible) */}
          <div className="services-grid services-row" id="services-row-1">
            <Link href="/services/web-development" className="service-card">
              <Image src="/services/web-development.png" alt="Web Development" width={200} height={200} className="service-image" />
              <h3 className="service-name">Web Development</h3>
            </Link>
            <div className="service-card">
              <Image src="/services/mobile-app-development.webp" alt="Mobile Apps" width={200} height={200} className="service-image" />
              <h3 className="service-name">Mobile Apps</h3>
            </div>
            <div className="service-card">
              <Image src="/services/cloud-services.webp" alt="Cloud Solutions" width={200} height={200} className="service-image" />
              <h3 className="service-name">Cloud Solutions</h3>
            </div>
            <div className="service-card">
              <Image src="/services/AI.jpg" alt="AI & Machine Learning" width={200} height={200} className="service-image" />
              <h3 className="service-name">Generative AI</h3>
            </div>
          </div>

          {/* Second Row (Hidden Initially) */}
          <div className="services-grid services-row hidden" id="services-row-2">
            <div className="service-card">
              <Image src="/services/dynamics365.jpg" alt="Dynamics 365" width={200} height={200} className="service-image" />
              <h3 className="service-name">Dynamics 365</h3>
            </div>
            <div className="service-card">
              <Image src="/services/data-analytics.webp" alt="Data Analytics" width={200} height={200} className="service-image" />
              <h3 className="service-name">Data Analytics & Insights</h3>
            </div>
            <div className="service-card">
              <Image src="/services/staff-augmentation.jpg" alt="Staff Augmentation" width={200} height={200} className="service-image" />
              <h3 className="service-name">Staff Augmentation</h3>
            </div>
            <div className="service-card">
              <Image src="/services/game-dev.jpg" alt="Game Development" width={200} height={200} className="service-image" />
              <h3 className="service-name">Game Development</h3>
            </div>
          </div>

          {/* Third Row (Hidden Initially) */}
          <div className="services-grid services-row hidden" id="services-row-3">
            <div className="service-card">
              <Image src="/services/web3.jpg" alt="Web3" width={200} height={200} className="service-image" />
              <h3 className="service-name">Web3 Gaming</h3>
            </div>
            <div className="service-card">
              <Image src="/services/AR:VR:XR.png" alt="AR/VR/XR" width={200} height={200} className="service-image" />
              <h3 className="service-name">AR/VR/XR Gaming</h3>
            </div>
            <div className="service-card">
              <Image src="/services/gaming-art.webp" alt="Game ART" width={200} height={200} className="service-image" />
              <h3 className="service-name">Gaming Art & Design</h3>
            </div>
            <div className="service-card">
              <Image src="/services/QA.avif" alt="Quality Assurance" width={200} height={200} className="service-image" />
              <h3 className="service-name">Quality Assurance</h3>
            </div>
          </div>

          {/* Fourth Row (Hidden Initially) */}
          <div className="services-grid services-row hidden" id="services-row-4">
            <div className="service-card">
              <Image src="/services/e-commerce.jpg" alt="E-Commerce" width={200} height={200} className="service-image" />
              <h3 className="service-name">E-commerce</h3>
            </div>
            <div className="service-card">
              <Image src="/services/UI:UX.jpeg" alt="UI/UX" width={200} height={200} className="service-image" />
              <h3 className="service-name">UI/UX Design</h3>
            </div>
            <div className="service-card">
              <Image src="/services/devops.jpg" alt="DevOps" width={200} height={200} className="service-image" />
              <h3 className="service-name">DevOps</h3>
            </div>
            <div className="service-card">
              <Image src="/services/Saas.jpg" alt="Software As Service" width={200} height={200} className="service-image" />
              <h3 className="service-name">SaaS</h3>
            </div>
          </div>

          {/* Fifth Row (Hidden Initially) */}
          <div className="services-grid services-row hidden" id="services-row-5">
            <div className="service-card">
              <Image src="/services/metaverse.jpg" alt="Metaverse" width={200} height={200} className="service-image" />
              <h3 className="service-name">Metaverse</h3>
            </div>
            <div className="service-card">
              <Image src="/services/cloud-migrations.jpg" alt="Cloud Migrations" width={200} height={200} className="service-image" />
              <h3 className="service-name">Cloud Migrations & Cloud Ops</h3>
            </div>
            <div className="service-card">
              <Image src="/services/custom-software-development.jpg" alt="Custom Software Development" width={200} height={200} className="service-image" />
              <h3 className="service-name">Custom Software Development</h3>
            </div>
            <div className="service-card">
              <Image src="/services/maintenance-support.webp" alt="Maintenance & Support" width={200} height={200} className="service-image" />
              <h3 className="service-name">Maintenance & Support</h3>
            </div>
          </div>

          <div className="services-toggle">
            <button className="toggle-btn" id="servicesToggle" ref={servicesToggleRef}>
              <span id="toggleText" ref={toggleTextRef}>View More</span>
              <span className="toggle-icon" id="toggleIcon" ref={toggleIconRef}>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section className="careers-section">
        <div className="careers-content">
          <div className="careers-left">
            <div className="careers-media">
              <video className="careers-video" autoPlay muted loop>
                <source src="/services/meeting.mp4" type="video/mp4" />
                <Image src="/services/meeting-fallback.jpg" alt="Team Collaboration" width={400} height={300} className="careers-gif" />
              </video>
            </div>
          </div>
          <div className="careers-right">
            <div className="careers-subtitle">CAREERS</div>
            <h2 className="careers-title">Human-first is our foundation.</h2>
            <p className="careers-foundation">
              Join a culture that celebrates excellence and diversity, Globally!
            </p>
            <p className="careers-description">
              At Deployed, we believe our people are our greatest asset. We foster an environment where innovation thrives, 
              diversity is celebrated, and every team member has the opportunity to grow and make a meaningful impact.
            </p>
            <Link href="/careers" className="careers-cta">Join Us</Link>
          </div>
        </div>
      </section>

      {/* READY TO GET STARTED SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-title">Ready to get started?</h2>
            <p className="contact-description">
              Connect with us to explore how we can deliver exceptional IT solutions for your needs.
            </p>
          </div>
          
          <div className="contact-form-container">
            {/* Success/Error Messages */}
            <div id="form-messages" style={{ display: 'none' }} ref={messagesContainerRef}>
              <div id="success-message" className="alert alert-success" style={{ display: 'none' }} ref={successMessageRef}></div>
              <div id="error-message" className="alert alert-error" style={{ display: 'none' }} ref={errorMessageRef}></div>
            </div>
            
            <form className="contact-form" id="contactForm" ref={formRef}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name <span className="required">*</span></label>
                  <input type="text" className="form-input" name="first_name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name <span className="required">*</span></label>
                  <input type="text" className="form-input" name="last_name" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email <span className="required">*</span></label>
                  <input type="email" className="form-input" name="email" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number <span className="required">*</span></label>
                  <div className="phone-group">
                    <select className="form-select country-select" name="country" required>
                      <option value="">Select Country</option>
                    </select>
                    <input type="tel" className="form-input phone-input" name="phone_number" placeholder="Enter your number" required />
                  </div>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Budget <span className="required">*</span></label>
                  <input type="text" className="form-input" name="budget" placeholder="Enter your budget range (e.g., $10,000 - $50,000)" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name <span className="required">*</span></label>
                  <input type="text" className="form-input" name="company_name" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Domain/URL</label>
                  <input type="url" className="form-input" name="company_url" placeholder="https://example.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Region <span className="required">*</span></label>
                  <select className="form-select" name="region" required>
                    <option value="">Select Region</option>
                    <option value="north-america">North America</option>
                    <option value="south-america">South America</option>
                    <option value="europe">Europe</option>
                    <option value="asia-pacific">Asia Pacific</option>
                    <option value="middle-east">Middle East</option>
                    <option value="africa">Africa</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group full-width">
                <label className="form-label">Services you&apos;re looking for <span className="required">*</span></label>
                <div className="services-checkboxes">
                  <div className="checkbox-item">
                    <input type="checkbox" id="remote-it" name="services" value="Remote IT Resources" />
                    <label htmlFor="remote-it">Remote IT Resources</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="custom-software" name="services" value="Custom Software Development" />
                    <label htmlFor="custom-software">Custom Software Development</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="web-dev" name="services" value="Web Development" />
                    <label htmlFor="web-dev">Web Development</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="mobile-dev" name="services" value="Mobile App Development" />
                    <label htmlFor="mobile-dev">Mobile App Development</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="ar-vr" name="services" value="AR/VR" />
                    <label htmlFor="ar-vr">AR/VR</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="gaming" name="services" value="Gaming" />
                    <label htmlFor="gaming">Gaming</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="other-it" name="services" value="Other IT Services" />
                    <label htmlFor="other-it">Other IT Services</label>
                  </div>
                </div>
              </div>
              
              <div className="form-group full-width">
                <label className="form-label">Project Details <span className="required">*</span></label>
                <textarea className="form-textarea" name="project_details" placeholder="Tell us about your project requirements, timeline, and any specific needs..." required></textarea>
              </div>
              
              <ReCaptcha siteKey="6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
              
              <button type="submit" className="submit-btn" id="submitBtn" ref={submitBtnRef}>
                <span id="submitText" ref={submitTextRef}>Submit</span>
                <span id="submitLoader" style={{ display: 'none' }} ref={submitLoaderRef}>Submitting...</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Link href="/contact" className="fixed-cta-button" id="fixedCtaButton">
        Let&apos;s Talk Business
      </Link>

    </>
  );
}
import React, { useEffect, useRef, useCallback } from 'react';
import ReCaptcha from './ReCaptcha';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const submitTextRef = useRef<HTMLSpanElement>(null);
  const submitLoaderRef = useRef<HTMLSpanElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);
  const errorMessageRef = useRef<HTMLDivElement>(null);

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

  const handleFormSubmit = useCallback(async (e: Event) => {
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
      // Submit form
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
  }, [showError, showSuccess]);

  useEffect(() => {
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
  }, [handleFormSubmit]);

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
        {/* reCAPTCHA */}
        <ReCaptcha siteKey="6LeawlorAAAAADLtluLbhQr5AgjEJ3axOznVe04_" />
        <button type="submit" className="submit-btn" id="submitBtn" ref={submitBtnRef}>
          <span id="submitText" ref={submitTextRef}>Submit</span>
          <span id="submitLoader" style={{ display: 'none' }} ref={submitLoaderRef}>Submitting...</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 
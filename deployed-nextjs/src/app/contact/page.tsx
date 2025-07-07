'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    companyName: '',
    companyUrl: '',
    region: '',
    budget: '',
    services: [] as string[],
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'AI & Machine Learning',
    'Game Development',
    'UI/UX Design',
    'DevOps',
    'Data Analytics',
    'E-commerce',
    'Custom Software Development'
  ];

  const regions = [
    'North America',
    'Europe',
    'Asia Pacific',
    'Latin America',
    'Middle East & Africa'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setMessage('Thank you for your inquiry! We will get back to you within 24 hours.');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        country: '',
        companyName: '',
        companyUrl: '',
        region: '',
        budget: '',
        services: [],
        projectDetails: ''
      });
    } catch {
      setSubmitStatus('error');
      setMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">
              Get In<br />Touch
            </h1>
            <p className="hero-description">
              Ready to transform your business with cutting-edge software solutions? 
              Let&apos;s discuss your project and explore how we can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-left">
              <h2 className="contact-title">Start Your Project</h2>
              <p className="contact-description">
                Fill out the form below and our team will get back to you within 24 hours 
                to discuss your project requirements and provide a customized solution.
              </p>

              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  {submitStatus !== 'idle' && (
                    <div className={`alert ${submitStatus === 'success' ? 'alert-success' : 'alert-error'}`}>
                      {submitStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                      {message}
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Phone Number <span className="required">*</span>
                      </label>
                      <div className="phone-group">
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="country-select"
                        >
                          <option value="">+1</option>
                          <option value="+44">+44</option>
                          <option value="+91">+91</option>
                          <option value="+86">+86</option>
                          <option value="+81">+81</option>
                        </select>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="phone-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Company Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Company Website</label>
                      <input
                        type="url"
                        name="companyUrl"
                        value={formData.companyUrl}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="https://example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Region <span className="required">*</span>
                      </label>
                      <select
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select Region</option>
                        {regions.map(region => (
                          <option key={region} value={region}>{region}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Budget Range <span className="required">*</span>
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select Budget Range</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Services Interested In <span className="required">*</span>
                    </label>
                    <div className="services-checkboxes">
                      {services.map(service => (
                        <div key={service} className="checkbox-item">
                          <input
                            type="checkbox"
                            id={service}
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            required={formData.services.length === 0}
                          />
                          <label htmlFor={service}>{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">
                      Project Details <span className="required">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows={5}
                      placeholder="Tell us about your project, goals, and requirements..."
                      required
                    />
                  </div>

                  <div className="recaptcha-container">
                    <div className="g-recaptcha" data-sitekey="6LeawlorAAAAADLtluLbhQr5AgjEJ3axOznVe04_"></div>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="contact-right">
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <h3 className="info-title">Email Us</h3>
                <p className="info-description">
                  Send us an email and we&apos;ll get back to you within 24 hours.
                </p>
                <a href="mailto:business@deployed.com" className="info-cta">
                  business@deployed.com
                </a>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <h3 className="info-title">Call Us</h3>
                <p className="info-description">
                  Prefer to talk? Give us a call during business hours.
                </p>
                <a href="tel:+1-XXX-XXX-XXXX" className="info-cta">
                  +1-XXX-XXX-XXXX
                </a>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <h3 className="info-title">Visit Us</h3>
                <p className="info-description">
                  Located in the United States, serving clients worldwide.
                </p>
                <span className="info-cta">
                  United States
                </span>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <h3 className="info-title">Business Hours</h3>
                <p className="info-description">
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                </p>
                <span className="info-cta">
                  Available 24/7 Online
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed CTA Button */}
        <Link href="/contact" className="fixed-cta-button" id="fixedCtaButton">
          Let&apos;s Talk Business
        </Link>
      </main>

      <Footer />
    </>
  );
} 
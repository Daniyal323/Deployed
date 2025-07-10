'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
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

              <ContactForm />
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
                <a href="mailto:sales@godeployed.com" className="info-cta">
                  sales@godeployed.com
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

      {/* <Footer /> */}
    </>
  );
} 
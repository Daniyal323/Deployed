'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, MapPin, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const [activeDropdowns, setActiveDropdowns] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (key: string) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <Link href="/" className="footer-logo-container">
            <Image
              src="/images/deployed-logo-blur.png"
              alt="Deployed Logo"
              width={40}
              height={40}
              className="footer-logo-image"
            />
            <div className="footer-logo-text">
              <div className="footer-logo-main">Deployed</div>
              <div className="footer-logo-tagline">Engineering Next-Gen Software</div>
            </div>
          </Link>
          
          <div className="footer-address">
            <div className="footer-location">
              <MapPin size={16} />
              <span>United States</span>
            </div>
            <div className="footer-street">Leading Software Company</div>
            <div className="footer-email">
              <Mail size={16} />
              <strong>sales@godeployed.com</strong>
            </div>
          </div>
          
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-separator">•</span>
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-column">
            <div 
              className="footer-column-header"
              onClick={() => toggleDropdown('services')}
            >
              <span>Services</span>
              <ChevronDown className={`footer-arrow ${activeDropdowns.services ? 'rotated' : ''}`} />
            </div>
            <div className={`footer-dropdown ${activeDropdowns.services ? 'active' : ''}`}>
              <Link href="/services/web-development" className="footer-link">Web Development</Link>
              <Link href="/services/mobile-development" className="footer-link">Mobile Development</Link>
              <Link href="/services/cloud-solutions" className="footer-link">Cloud Solutions</Link>
              <Link href="/services/ai-ml" className="footer-link">AI & Machine Learning</Link>
              <Link href="/services/game-development" className="footer-link">Game Development</Link>
              <Link href="/services/ui-ux" className="footer-link">UI/UX Design</Link>
            </div>
          </div>

          <div className="footer-column">
            <div 
              className="footer-column-header"
              onClick={() => toggleDropdown('company')}
            >
              <span>Company</span>
              <ChevronDown className={`footer-arrow ${activeDropdowns.company ? 'rotated' : ''}`} />
            </div>
            <div className={`footer-dropdown ${activeDropdowns.company ? 'active' : ''}`}>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/careers" className="footer-link">Careers</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/blog" className="footer-link">Blog</Link>
            </div>
          </div>

          <div className="footer-column">
            <div 
              className="footer-column-header"
              onClick={() => toggleDropdown('resources')}
            >
              <span>Resources</span>
              <ChevronDown className={`footer-arrow ${activeDropdowns.resources ? 'rotated' : ''}`} />
            </div>
            <div className={`footer-dropdown ${activeDropdowns.resources ? 'active' : ''}`}>
              <Link href="/case-studies" className="footer-link">Case Studies</Link>
              <Link href="/whitepapers" className="footer-link">Whitepapers</Link>
              <Link href="/webinars" className="footer-link">Webinars</Link>
              <Link href="/documentation" className="footer-link">Documentation</Link>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/godeployed/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/deployed" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com/deployed" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/deployed.official/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2024 Deployed. All rights reserved. Engineering Next-Gen Software.
        </div>
      </div>
    </footer>
  );
} 
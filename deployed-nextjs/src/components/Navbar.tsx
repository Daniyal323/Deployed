'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleDropdown = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const toggleMobileDropdown = (dropdownId: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdownId ? null : dropdownId);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.nav-item') && !target.closest('.dropdown-fullscreen')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-left">
          <Link href="/" className="logo-container" style={{ textDecoration: 'none' }}>
            <Image
              src="/images/deployed-logo-blur.png"
              alt="Deployed Logo"
              width={32}
              height={32}
              className="logo-image"
            />
            <div className="logo">Deployed</div>
          </Link>
          <div className="theme-switcher">
            <label className="switch">
              <input 
                type="checkbox" 
                id="themeToggle" 
                checked={theme === 'light'}
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <div 
            className="nav-item"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
              }
              setActiveDropdown('dropdown-what');
            }}
            onMouseLeave={() => {
              dropdownTimeoutRef.current = setTimeout(() => {
                setActiveDropdown(null);
              }, 150);
            }}
          >
            <a onClick={() => toggleDropdown('dropdown-what')} style={{ cursor: 'pointer' }}>
              WHAT WE DO
            </a>
            <div 
              className={`dropdown-fullscreen ${activeDropdown === 'dropdown-what' ? 'show' : ''}`} 
              id="dropdown-what"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setActiveDropdown('dropdown-what');
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150);
              }}
            >
              <div className="dropdown-title">Capabilities</div>
              <div className="capabilities-container">
                <div className="capabilities-column">
                  <strong>Digital Transformation</strong>
                  <ul>
                    <li><Link href="/services/web-development">Web development</Link></li>
                    <li><Link href="/services/app-development">Mobile App Development</Link></li>
                    <li><Link href="/services">Custom Software Development</Link></li>
                    <li><Link href="/services">UX/UI Design</Link></li>
                  </ul>
                  <strong>Business Applications</strong>
                  <ul>
                    <li><Link href="/services">D365 ERP</Link></li>
                    <li><Link href="/services">D365 CRM</Link></li>
                    <li><Link href="/services">Power Apps</Link></li>
                  </ul>
                  <strong>Emerging Technologies</strong>
                  <ul>
                    <li><Link href="/services">Metaverse</Link></li>
                    <li><Link href="/services">Augmented reality</Link></li>
                    <li><Link href="/services">Blockchain & Cryptography</Link></li>
                  </ul>
                  <strong>Data & AI</strong>
                  <ul>
                    <li><Link href="/services/generative-ai">Gen AI</Link></li>
                    <li><Link href="/services">Data Analytics</Link></li>
                  </ul>
                  <strong><Link href="/services">Staff Augmentation</Link></strong>
                </div>
                <div className="capabilities-column">
                  <strong><Link href="/services">Quality Assurance</Link></strong>
                  <strong><Link href="/services">DevOps</Link></strong>
                  <strong><Link href="/services">Cybersecurity</Link></strong>
                  <strong><Link href="/services">SaaS</Link></strong>
                  <strong>E-commerce</strong>
                  <ul>
                    <li><Link href="/services">Design & Development</Link></li>
                    <li><Link href="/services">Maintenance & Support</Link></li>
                    <li><Link href="/services">Automation & Apps</Link></li>
                  </ul>
                  <strong>Gaming</strong>
                  <ul>
                    <li><Link href="/services">Art & Design</Link></li>
                    <li><Link href="/services">Web3</Link></li>
                    <li><Link href="/services">AR/VR/XR</Link></li>
                  </ul>
                  <strong>Cloud</strong>
                  <ul>
                    <li><Link href="/services">Cloud Application</Link></li>
                    <li><Link href="/services">Cloud Ops & Migration</Link></li>
                    <li><Link href="/services">Cloud maintenance & integration</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="nav-item"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
              }
              setActiveDropdown('dropdown-who');
            }}
            onMouseLeave={() => {
              dropdownTimeoutRef.current = setTimeout(() => {
                setActiveDropdown(null);
              }, 150);
            }}
          >
            <a onClick={() => toggleDropdown('dropdown-who')} style={{ cursor: 'pointer' }}>
              WHO WE HELP
            </a>
            <div 
              className={`dropdown-fullscreen ${activeDropdown === 'dropdown-who' ? 'show' : ''}`} 
              id="dropdown-who"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setActiveDropdown('dropdown-who');
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150);
              }}
            >
              <div className="dropdown-title">Industries</div>
              <div className="capabilities-container">
                <div className="capabilities-column">
                  <strong>Travel & Hospitality</strong>
                  <strong>Telecommunication</strong>
                  <strong>Oil, Gas, and Energy</strong>
                  <strong>E-commerce</strong>
                  <strong>Healthcare & Pharmaceuticals</strong>
                </div>
                <div className="capabilities-column">
                  <strong>Public Sector</strong>
                  <strong>Retail & CGP</strong>
                  <strong>Startups</strong>
                  <strong>Banking & Fintech</strong>
                  <strong>Gaming</strong>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="nav-item"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
              }
              setActiveDropdown('dropdown-help');
            }}
            onMouseLeave={() => {
              dropdownTimeoutRef.current = setTimeout(() => {
                setActiveDropdown(null);
              }, 150);
            }}
          >
            <a onClick={() => toggleDropdown('dropdown-help')} style={{ cursor: 'pointer' }}>
              WHO WE ARE
            </a>
            <div 
              className={`dropdown-fullscreen ${activeDropdown === 'dropdown-help' ? 'show' : ''}`} 
              id="dropdown-help"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setActiveDropdown('dropdown-help');
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150);
              }}
            >
              <div className="capabilities-container">
                <div className="capabilities-column">
                  <strong><Link href="/about">About</Link></strong>
                  <strong><Link href="/about">Leadership</Link></strong>
                  <strong><Link href="/about">Geographies</Link></strong>
                  <strong><Link href="/about">Code of Conduct & Values</Link></strong>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="nav-item"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
              }
              setActiveDropdown('dropdown-how');
            }}
            onMouseLeave={() => {
              dropdownTimeoutRef.current = setTimeout(() => {
                setActiveDropdown(null);
              }, 150);
            }}
          >
            <a onClick={() => toggleDropdown('dropdown-how')} style={{ cursor: 'pointer' }}>
              HOW WE DELIVER
            </a>
            <div 
              className={`dropdown-fullscreen ${activeDropdown === 'dropdown-how' ? 'show' : ''}`} 
              id="dropdown-how"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setActiveDropdown('dropdown-how');
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150);
              }}
            >
              <div className="capabilities-container">
                <div className="capabilities-column">
                  <strong>Blogs</strong>
                  <strong>Case Studies</strong>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="nav-item"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
              }
              setActiveDropdown('dropdown-join');
            }}
            onMouseLeave={() => {
              dropdownTimeoutRef.current = setTimeout(() => {
                setActiveDropdown(null);
              }, 150);
            }}
          >
            <a onClick={() => toggleDropdown('dropdown-join')} style={{ cursor: 'pointer' }}>
              JOIN DEPLOYED
            </a>
            <div 
              className={`dropdown-fullscreen ${activeDropdown === 'dropdown-join' ? 'show' : ''}`} 
              id="dropdown-join"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setActiveDropdown('dropdown-join');
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150);
              }}
            >
              <div className="capabilities-container">
                <div className="capabilities-column">
                  <strong><Link href="/careers">Careers</Link></strong>
                  <strong><Link href="/careers">Culture</Link></strong>
                  <strong><Link href="/careers">Diversity, Equity, and Inclusion</Link></strong>
                  <strong><Link href="/careers">Employee Success</Link></strong>
                  <strong><Link href="/careers">Benefits</Link></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop CTA Buttons */}
        <div className="nav-actions">
          <Link href="/careers" className="btn primary">Explore Careers</Link>
          <Link href="/contact" className="btn secondary">Let&apos;s Talk Business</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} 
          id="mobileMenuBtn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`} id="mobileNav">
        <div className="mobile-nav-item">
          <div className="mobile-nav-header" onClick={() => toggleMobileDropdown('mobile-what')}>
            <span>WHAT WE DO</span>
            <span className={`mobile-nav-arrow ${activeMobileDropdown === 'mobile-what' ? 'rotated' : ''}`} id="mobile-what-arrow">▼</span>
          </div>
          <div className={`mobile-nav-content ${activeMobileDropdown === 'mobile-what' ? 'active' : ''}`} id="mobile-what">
            <div className="mobile-nav-section">
              <strong>Digital Transformation</strong>
              <ul>
                <li><Link href="/services/web-development" onClick={closeMobileMenu}>Web development</Link></li>
                <li><Link href="/services" onClick={closeMobileMenu}>Mobile App Development</Link></li>
                <li><Link href="/services" onClick={closeMobileMenu}>Custom Software Development</Link></li>
                <li><Link href="/services" onClick={closeMobileMenu}>UX/UI Design</Link></li>
              </ul>
            </div>
            <div className="mobile-nav-section">
              <strong>Business Applications</strong>
              <ul>
                <li><Link href="/services" onClick={closeMobileMenu}>D365 ERP</Link></li>
                <li><Link href="/services" onClick={closeMobileMenu}>D365 CRM</Link></li>
                <li><Link href="/services" onClick={closeMobileMenu}>Power Apps</Link></li>
              </ul>
            </div>
            <div className="mobile-nav-section">
              <strong>Emerging Technologies</strong>
              <ul>
                <li><Link href="/services" onClick={closeMobileMenu}>Metaverse</Link></li>
                <li><Link href="/services" onClick={closeMobileMenu}>Augmented reality</Link></li>
                <li><Link href="/services" onClick={closeMobileMenu}>Blockchain & Cryptography</Link></li>
              </ul>
            </div>
            <div className="mobile-nav-section">
              <strong>Data & AI</strong>
              <ul>
                                    <li><Link href="/services/generative-ai" onClick={closeMobileMenu}>Gen AI</Link></li>
                <li><Link href="/services" onClick={closeMobileMenu}>Data Analytics</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mobile-nav-item">
          <div className="mobile-nav-header" onClick={() => toggleMobileDropdown('mobile-who')}>
            <span>WHO WE HELP</span>
            <span className={`mobile-nav-arrow ${activeMobileDropdown === 'mobile-who' ? 'rotated' : ''}`}>▼</span>
          </div>
          <div className={`mobile-nav-content ${activeMobileDropdown === 'mobile-who' ? 'active' : ''}`}>
            <div className="mobile-nav-section">
              <strong>Industries</strong>
              <ul>
                <li>Travel & Hospitality</li>
                <li>Telecommunication</li>
                <li>Oil, Gas, and Energy</li>
                <li>E-commerce</li>
                <li>Healthcare & Pharmaceuticals</li>
                <li>Public Sector</li>
                <li>Retail & CGP</li>
                <li>Startups</li>
                <li>Banking & Fintech</li>
                <li>Gaming</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mobile-nav-item">
          <div className="mobile-nav-header" onClick={() => toggleMobileDropdown('mobile-help')}>
            <span>WHO WE ARE</span>
            <span className={`mobile-nav-arrow ${activeMobileDropdown === 'mobile-help' ? 'rotated' : ''}`}>▼</span>
          </div>
          <div className={`mobile-nav-content ${activeMobileDropdown === 'mobile-help' ? 'active' : ''}`}>
            <div className="mobile-nav-section">
              <ul>
                <li><Link href="/about" onClick={closeMobileMenu}>About</Link></li>
                <li><Link href="/about" onClick={closeMobileMenu}>Leadership</Link></li>
                <li><Link href="/about" onClick={closeMobileMenu}>Geographies</Link></li>
                <li><Link href="/about" onClick={closeMobileMenu}>Code of Conduct & Values</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mobile-nav-item">
          <div className="mobile-nav-header" onClick={() => toggleMobileDropdown('mobile-how')}>
            <span>HOW WE DELIVER</span>
            <span className={`mobile-nav-arrow ${activeMobileDropdown === 'mobile-how' ? 'rotated' : ''}`}>▼</span>
          </div>
          <div className={`mobile-nav-content ${activeMobileDropdown === 'mobile-how' ? 'active' : ''}`}>
            <div className="mobile-nav-section">
              <ul>
                <li>Blogs</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mobile-nav-item">
          <div className="mobile-nav-header" onClick={() => toggleMobileDropdown('mobile-join')}>
            <span>JOIN DEPLOYED</span>
            <span className={`mobile-nav-arrow ${activeMobileDropdown === 'mobile-join' ? 'rotated' : ''}`}>▼</span>
          </div>
          <div className={`mobile-nav-content ${activeMobileDropdown === 'mobile-join' ? 'active' : ''}`}>
            <div className="mobile-nav-section">
              <ul>
                <li><Link href="/careers" onClick={closeMobileMenu}>Careers</Link></li>
                <li><Link href="/careers" onClick={closeMobileMenu}>Culture</Link></li>
                <li><Link href="/careers" onClick={closeMobileMenu}>Diversity, Equity, and Inclusion</Link></li>
                <li><Link href="/careers" onClick={closeMobileMenu}>Employee Success</Link></li>
                <li><Link href="/careers" onClick={closeMobileMenu}>Benefits</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Mobile CTA Buttons */}
        <div className="mobile-cta">
          <Link href="/careers" className="btn primary" onClick={closeMobileMenu}>Explore Careers</Link>
          <Link href="/contact" className="btn secondary" onClick={closeMobileMenu}>Let&apos;s Talk</Link>
        </div>
      </div>
    </>
  );
} 
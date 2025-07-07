'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Users, Zap, Heart, Award, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Careers() {
  const benefits = [
    {
      icon: <Users size={24} />,
      title: "Collaborative Culture",
      description: "Work with talented individuals in a supportive and inclusive environment."
    },
    {
      icon: <Zap size={24} />,
      title: "Innovation Focus",
      description: "Be part of cutting-edge projects that push technological boundaries."
    },
    {
      icon: <Heart size={24} />,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to maintain your well-being."
    },
    {
      icon: <Award size={24} />,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement in a fast-growing company."
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / United States",
      type: "Full-time",
      description: "Join our engineering team to build scalable web applications and APIs."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / United States",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences for our products."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / United States",
      type: "Full-time",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / United States",
      type: "Full-time",
      description: "Lead product strategy and work with cross-functional teams."
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote / United States",
      type: "Full-time",
      description: "Develop machine learning models and AI-powered features."
    },
    {
      title: "Sales Representative",
      department: "Sales",
      location: "Remote / United States",
      type: "Full-time",
      description: "Drive business growth by building relationships with potential clients."
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">
              Join Our<br />Team
            </h1>
            <p className="hero-description">
              Be part of a team that&apos;s shaping the future of technology. 
              We&apos;re looking for passionate individuals who want to make a difference.
            </p>
            <Link href="#positions" className="hero-cta">
              View Open Positions
            </Link>
          </div>
        </section>

        {/* CAREERS SECTION */}
        <section className="careers-section">
          <div className="careers-content">
            <div className="careers-left">
              <div className="careers-media">
                <video 
                  className="careers-video"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="/images/careers-poster.jpg"
                >
                  <source src="/services/meeting.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="careers-right">
              <div className="careers-subtitle">JOIN OUR TEAM</div>
              <h2 className="careers-title">Build the Future with Us</h2>
              <div className="careers-foundation">FOUNDATION OF EXCELLENCE</div>
              <p className="careers-description">
                Join a team of passionate innovators who are shaping the future of technology. 
                At Deployed, we believe in fostering creativity, collaboration, and continuous learning.
              </p>
              <p className="careers-description">
                We offer competitive compensation, comprehensive benefits, and opportunities for 
                professional growth in a dynamic and supportive environment.
              </p>
              <Link href="#positions" className="careers-cta">Explore Careers</Link>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="services-section">
          <div className="services-container">
            <div className="services-header">
              <div className="services-subtitle">WHY JOIN US</div>
              <h2 className="services-title">Benefits & Perks</h2>
            </div>
            
            <div className="services-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="service-card">
                  <div className="service-image" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5' }}>
                    {benefit.icon}
                  </div>
                  <h3 className="service-name">{benefit.title}</h3>
                  <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS SECTION */}
        <section id="positions" className="featured-section">
          <div className="featured-content">
            <div className="featured-left">
              <div className="featured-subtitle">CAREER OPPORTUNITIES</div>
              <h2 className="featured-title">Open Positions</h2>
              <p className="featured-description">
                We&apos;re always looking for talented individuals to join our team. 
                Check out our current openings and find the perfect role for you.
              </p>
            </div>
            <div className="featured-right">
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">{openPositions.length}</span>
                  <span className="stat-label">Open Positions</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Departments</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Remote Friendly</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONS LIST */}
        <section className="services-section">
          <div className="services-container">
            <div className="services-header">
              <div className="services-subtitle">CURRENT OPENINGS</div>
              <h2 className="services-title">Available Positions</h2>
            </div>
            
            <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              {openPositions.map((position, index) => (
                <div key={index} className="service-card" style={{ textAlign: 'left', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h3 className="service-name" style={{ marginBottom: '0.5rem' }}>{position.title}</h3>
                      <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        {position.department} • {position.location}
                      </p>
                      <span style={{ 
                        background: '#4f46e5', 
                        color: 'white', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '20px', 
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {position.type}
                      </span>
                    </div>
                    <ArrowRight size={20} style={{ color: '#4f46e5' }} />
                  </div>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    {position.description}
                  </p>
                  <Link 
                    href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="featured-cta"
                    style={{ 
                      display: 'inline-block', 
                      marginTop: '1rem',
                      fontSize: '0.9rem',
                      padding: '0.75rem 1.5rem'
                    }}
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="careers-section">
          <div className="careers-content">
            <div className="careers-left">
              <div className="careers-media">
                <Image 
                  src="/images/careers-cta.jpg" 
                  alt="Join Our Team"
                  width={500}
                  height={400}
                  className="careers-video"
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="careers-right">
              <div className="careers-subtitle">DON&apos;T SEE A FIT?</div>
              <h2 className="careers-title">We&apos;re Always Looking for Talent</h2>
              <div className="careers-foundation">GROW WITH US</div>
              <p className="careers-description">
                Even if you don&apos;t see a position that matches your skills, we&apos;d love to hear from you. 
                Send us your resume and let us know how you can contribute to our team.
              </p>
              <Link href="/contact" className="careers-cta">Send Your Resume</Link>
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
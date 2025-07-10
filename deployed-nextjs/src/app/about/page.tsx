'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const leadershipTeam = [
    {
      id: 1,
      firstName: "Daniyal",
      lastName: "Jawad",
      designation: "CEO & Founder",
      bio: "Visionary leader driving innovation and strategic growth at Deployed. With over a decade of experience in software development and business strategy, Daniyal has led the company from startup to industry leader.",
      image: "/images/team/ceo.jpg",
      linkedin: "https://linkedin.com/in/daniyal-jawad"
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Chen",
      designation: "CTO",
      bio: "Technology expert leading our engineering teams and technical strategy. Sarah brings deep expertise in cloud architecture, AI/ML, and scalable systems design.",
      image: "/images/team/cto.jpg",
      linkedin: "https://linkedin.com/in/sarah-chen"
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Rodriguez",
      designation: "Head of Design",
      bio: "Creative director ensuring exceptional user experiences across all products. Michael specializes in user-centered design and design systems.",
      image: "/images/team/design.jpg",
      linkedin: "https://linkedin.com/in/michael-rodriguez"
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Watson",
      designation: "VP of Engineering",
      bio: "Engineering leader focused on delivering high-quality software solutions. Emily has extensive experience in agile methodologies and team leadership.",
      image: "/images/team/engineering.jpg",
      linkedin: "https://linkedin.com/in/emily-watson"
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Kim",
      designation: "Head of Product",
      bio: "Product strategist driving innovation and market success. David has a proven track record of launching successful products in competitive markets.",
      image: "/images/team/product.jpg",
      linkedin: "https://linkedin.com/in/david-kim"
    },
    {
      id: 6,
      firstName: "Lisa",
      lastName: "Thompson",
      designation: "VP of Operations",
      bio: "Operations expert ensuring smooth delivery and client satisfaction. Lisa oversees project management and quality assurance processes.",
      image: "/images/team/operations.jpg",
      linkedin: "https://linkedin.com/in/lisa-thompson"
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
              About<br />Deployed
            </h1>
            <p className="hero-description">
              We are a team of passionate innovators dedicated to engineering next-generation software solutions that transform businesses and drive digital innovation.
            </p>
            <Link href="/contact" className="hero-cta">
              Get In Touch
            </Link>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="featured-section">
          <div className="featured-content">
            <div className="featured-left">
              <div className="featured-subtitle">OUR MISSION</div>
              <h2 className="featured-title">Empowering Digital Transformation</h2>
              <p className="featured-description">
                At Deployed, we believe that technology should be a catalyst for growth and innovation. 
                Our mission is to help businesses of all sizes leverage cutting-edge software solutions 
                to achieve their goals and stay ahead in an ever-evolving digital landscape.
              </p>
              <p className="featured-description">
                We combine deep technical expertise with strategic business understanding to deliver 
                solutions that not only meet current needs but also scale for future growth.
              </p>
              <Link href="/services" className="featured-cta">Our Services</Link>
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

        {/* VALUES SECTION */}
        <section className="services-section">
          <div className="services-container">
            <div className="services-header">
              <div className="services-subtitle">OUR VALUES</div>
              <h2 className="services-title">What Drives Us Forward</h2>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image" style={{ fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  🚀
                </div>
                <h3 className="service-name">Innovation</h3>
                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
                  We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="service-card">
                <div className="service-image" style={{ fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  🤝
                </div>
                <h3 className="service-name">Collaboration</h3>
                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
                  We work closely with our clients to understand their needs and deliver solutions that exceed expectations.
                </p>
              </div>
              <div className="service-card">
                <div className="service-image" style={{ fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ⚡
                </div>
                <h3 className="service-name">Excellence</h3>
                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
                  We maintain the highest standards of quality in everything we do, from code to customer service.
                </p>
              </div>
              <div className="service-card">
                <div className="service-image" style={{ fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  🌟
                </div>
                <h3 className="service-name">Integrity</h3>
                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
                  We build trust through transparency, honesty, and ethical business practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className="leadership-section">
          <div className="leadership-container">
            <div className="leadership-header">
              <div className="leadership-left">
                <div className="leadership-subtitle">MEET OUR LEADERSHIP</div>
                <h2 className="leadership-title">The Minds Behind Deployed</h2>
              </div>
            </div>

            <div className="leadership-content">
              <div className="leadership-slides" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {leadershipTeam.map((leader) => (
                  <div key={leader.id} className="leadership-slide" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div className="leader-image-container">
                      <Image 
                        src={leader.image} 
                        alt={`${leader.firstName} ${leader.lastName}`}
                        width={250}
                        height={300}
                        className="leader-image"
                      />
                    </div>
                    <div className="leader-info">
                      <h3 className="leader-name">
                        <span className="leader-first-name">{leader.firstName}</span>
                        <span className="leader-last-name">{leader.lastName}</span>
                      </h3>
                      <p className="leader-designation">{leader.designation}</p>
                      <p className="leader-bio">{leader.bio}</p>
                      <a href={leader.linkedin} className="leader-linkedin" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="careers-section">
          <div className="careers-content">
            <div className="careers-left">
              <div className="careers-media">
                <Image 
                  src="/images/about-cta.jpg" 
                  alt="About Deployed"
                  width={500}
                  height={400}
                  className="careers-video"
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="careers-right">
              <div className="careers-subtitle">READY TO GET STARTED?</div>
              <h2 className="careers-title">Let&apos;s Build Something Amazing Together</h2>
              <div className="careers-foundation">TRANSFORM YOUR BUSINESS</div>
              <p className="careers-description">
                Whether you&apos;re a startup looking to disrupt the market or an enterprise seeking digital transformation, 
                we have the expertise and passion to bring your vision to life.
              </p>
              <Link href="/contact" className="careers-cta">Start Your Project</Link>
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
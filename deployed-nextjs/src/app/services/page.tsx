'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      name: "Web Development",
      image: "/services/web-development.png",
      description: "Custom web applications, e-commerce platforms, and responsive websites built with modern technologies.",
      features: ["React/Next.js", "Node.js", "Python/Django", "E-commerce", "API Development"]
    },
    {
      name: "Mobile App Development",
      image: "/services/mobile-app-development.webp",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development", "App Store Optimization"]
    },
    {
      name: "Cloud Solutions",
      image: "/services/cloud-services.webp",
      description: "Scalable cloud infrastructure and migration services for modern applications.",
      features: ["AWS", "Azure", "Google Cloud", "Serverless", "Microservices"]
    },
    {
      name: "AI & Machine Learning",
      image: "/services/AI.jpg",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      features: ["Generative AI", "Computer Vision", "NLP", "Predictive Analytics", "Chatbots"]
    },
    {
      name: "Game Development",
      image: "/services/game-dev.jpg",
      description: "Immersive gaming experiences across multiple platforms and technologies.",
      features: ["Unity", "Unreal Engine", "Mobile Games", "Web3 Gaming", "AR/VR"]
    },
    {
      name: "UI/UX Design",
      image: "/services/UI:UX.jpeg",
      description: "User-centered design solutions that create engaging and intuitive experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      name: "DevOps",
      image: "/services/devops.jpg",
      description: "Streamlined development and deployment processes for faster delivery.",
      features: ["CI/CD", "Docker", "Kubernetes", "Monitoring", "Automation"]
    },
    {
      name: "Data Analytics",
      image: "/services/data-analytics.webp",
      description: "Data-driven insights and business intelligence solutions.",
      features: ["Data Visualization", "Big Data", "Business Intelligence", "Predictive Modeling", "Real-time Analytics"]
    },
    {
      name: "E-commerce",
      image: "/services/e-commerce.jpg",
      description: "Complete e-commerce solutions for online businesses.",
      features: ["Shopify", "WooCommerce", "Custom Platforms", "Payment Integration", "Inventory Management"]
    },
    {
      name: "Custom Software Development",
      image: "/services/custom-software-development.jpg",
      description: "Tailored software solutions designed to meet your specific business needs.",
      features: ["Enterprise Software", "SaaS Development", "Legacy Migration", "System Integration", "Custom APIs"]
    },
    {
      name: "Dynamics 365",
      image: "/services/dynamics365.jpg",
      description: "Microsoft Dynamics 365 implementation and customization services.",
      features: ["CRM", "ERP", "Power Platform", "Integration", "Customization"]
    },
    {
      name: "Staff Augmentation",
      image: "/services/staff-augmentation.jpg",
      description: "Flexible staffing solutions to scale your development team.",
      features: ["Dedicated Teams", "Project-based", "Skill-specific", "Remote Teams", "Long-term Partnerships"]
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
              Our<br />Services
            </h1>
            <p className="hero-description">
              Comprehensive software solutions designed to transform your business 
              and drive digital innovation across all industries.
            </p>
            <Link href="/contact" className="hero-cta">
              Get Started
            </Link>
          </div>
        </section>

        {/* FEATURED SECTION */}
        <section className="featured-section">
          <div className="featured-content">
            <div className="featured-left">
              <div className="featured-subtitle">COMPREHENSIVE SOLUTIONS</div>
              <h2 className="featured-title">End-to-End Development</h2>
              <p className="featured-description">
                From concept to deployment, we provide complete software development services 
                that help businesses achieve their digital transformation goals.
              </p>
              <p className="featured-description">
                Our team of experts combines technical expertise with industry best practices 
                to deliver scalable, secure, and high-performance solutions.
              </p>
              <Link href="/contact" className="featured-cta">Start Your Project</Link>
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
              <div className="services-subtitle">WHAT WE OFFER</div>
              <h2 className="services-title">Our Services</h2>
            </div>
            
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
              {services.map((service, index) => (
                <div key={index} className="service-card" style={{ padding: '2rem', textAlign: 'left' }}>
                  <Image 
                    src={service.image} 
                    alt={service.name}
                    width={80}
                    height={80}
                    className="service-image"
                    style={{ marginBottom: '1rem' }}
                  />
                  <h3 className="service-name" style={{ marginBottom: '1rem' }}>{service.name}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ color: '#4f46e5', fontSize: '0.9rem' }}>Key Features:</strong>
                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', color: '#666' }}>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{ marginBottom: '0.25rem' }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="featured-cta"
                    style={{ 
                      display: 'inline-block',
                      fontSize: '0.9rem',
                      padding: '0.75rem 1.5rem'
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="careers-section">
          <div className="careers-content">
            <div className="careers-left">
              <div className="careers-media">
                <Image 
                  src="/images/process.jpg" 
                  alt="Our Process"
                  width={500}
                  height={400}
                  className="careers-video"
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="careers-right">
              <div className="careers-subtitle">OUR PROCESS</div>
              <h2 className="careers-title">How We Work</h2>
              <div className="careers-foundation">PROVEN METHODOLOGY</div>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ 
                    background: '#4f46e5', 
                    color: 'white', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    1
                  </span>
                  <strong>Discovery & Planning</strong>
                </div>
                <p style={{ marginLeft: '3rem', color: '#666', marginBottom: '1rem' }}>
                  We start by understanding your business goals, requirements, and challenges.
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ 
                    background: '#4f46e5', 
                    color: 'white', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    2
                  </span>
                  <strong>Design & Development</strong>
                </div>
                <p style={{ marginLeft: '3rem', color: '#666', marginBottom: '1rem' }}>
                  Our team creates the solution using modern technologies and best practices.
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ 
                    background: '#4f46e5', 
                    color: 'white', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    3
                  </span>
                  <strong>Testing & Deployment</strong>
                </div>
                <p style={{ marginLeft: '3rem', color: '#666', marginBottom: '1rem' }}>
                  Thorough testing ensures quality, followed by smooth deployment and launch.
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ 
                    background: '#4f46e5', 
                    color: 'white', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    4
                  </span>
                  <strong>Support & Maintenance</strong>
                </div>
                <p style={{ marginLeft: '3rem', color: '#666' }}>
                  Ongoing support and maintenance to keep your solution running smoothly.
                </p>
              </div>
              <Link href="/contact" className="careers-cta">Start Your Project</Link>
            </div>
          </div>
        </section>

        {/* Fixed CTA Button */}
        <Link href="/contact" className="fixed-cta-button" id="fixedCtaButton">
          Let's Talk Business
        </Link>
      </main>

      <Footer />
    </>
  );
} 
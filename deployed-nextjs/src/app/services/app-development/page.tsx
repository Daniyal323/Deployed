import Image from 'next/image';
import Link from 'next/link';

export default function AppDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <div className="hero-glass">
            <div className="service-category">APP DEVELOPMENT</div>
            <h1 className="service-title">Building Powerful Mobile Experiences</h1>
            <Link href="/contact" className="service-cta">Build High-Performance Mobile App</Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">
          <div className="overview-content">
            <div className="overview-subtitle">OVERVIEW</div>
            <p className="overview-description">
              Our mobile app development services deliver cutting-edge, user-centric applications 
              that drive engagement and business growth.<br /> From native iOS and Android apps to 
              cross-platform solutions, we create mobile experiences that users love and businesses rely on.
            </p>
            <div className="overview-highlight">What we are good at:</div>
            <ul className="overview-features">
              <li><strong>Native & Cross-Platform Development:</strong> We develop native apps for iOS and Android using Swift, Kotlin, and React Native, ensuring optimal performance and platform-specific features while maintaining code efficiency.</li>
              <li><strong>User-Centric Design:</strong> Our mobile-first approach focuses on creating intuitive, accessible, and engaging user experiences that keep users coming back.</li>
              <li><strong>Performance Optimization:</strong> We optimize apps for speed, battery efficiency, and smooth performance across all devices and network conditions.</li>
              <li><strong>Security & Compliance:</strong> We implement robust security measures and ensure compliance with app store guidelines, GDPR, HIPAA, and other industry standards.</li>
            </ul>
          </div>
          <div className="overview-image">
            <Image src="/services/mobile-app-development.webp" alt="Mobile App Development Overview" width={600} height={400} />
          </div>
        </div>
      </section>

      {/* Website Now Section */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now">Build Your Mobile App Now</Link>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-header">
            <h2 className="enterprise-title">Seamless & Enterprise-ready Mobile<br />App Development</h2>
          </div>
          <div className="enterprise-grid">
            {/* Native iOS Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/mobile-app-development.webp" alt="Native iOS Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We specialize in building native iOS applications using Swift and SwiftUI that leverage the full power of Apple's ecosystem. Our iOS apps are designed to take advantage of iOS-specific features like Face ID, Apple Pay, Siri integration, and seamless iCloud synchronization. We ensure your app follows Apple's Human Interface Guidelines and maintains the high standards expected by iOS users.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Native iOS Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Native Android Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/mobile-app-development.webp" alt="Native Android Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">Our Android development team creates powerful, scalable applications using Kotlin and Jetpack Compose that work seamlessly across the diverse Android ecosystem. We optimize for different screen sizes, Android versions, and device capabilities while implementing Material Design principles. Our apps integrate with Google services and leverage Android-specific features for enhanced functionality.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Native Android Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Cross-Platform Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/react.png" alt="Cross-Platform Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We develop cross-platform applications using React Native, Flutter, and Xamarin that work seamlessly across iOS and Android platforms. This approach reduces development time and costs while maintaining native performance. Our cross-platform solutions share up to 90% of code between platforms while still providing platform-specific optimizations and features.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cross-Platform Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Progressive Web Apps */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/web-development.png" alt="Progressive Web Apps" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We build Progressive Web Apps (PWAs) that combine the best of web and mobile experiences. Our PWAs offer offline functionality, push notifications, and app-like performance while being easily accessible through web browsers. This approach provides a cost-effective solution for businesses looking to reach users across all devices without maintaining separate native apps.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Progressive Web Apps (PWA)</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* UI/UX Design for Mobile */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/UI:UX.jpeg" alt="Mobile UI/UX Design" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">Our mobile UI/UX design team creates intuitive, engaging, and accessible interfaces that enhance user experience and drive engagement. We follow platform-specific design guidelines (Material Design for Android, Human Interface Guidelines for iOS) while creating unique brand experiences. Our designs prioritize usability, accessibility, and visual appeal across all device sizes.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Mobile UI/UX Design</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* App Store Optimization */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/SEO_Digital_marketing.jpg" alt="App Store Optimization" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We optimize your app for maximum visibility and downloads in the App Store and Google Play Store. Our ASO strategies include keyword optimization, compelling app descriptions, high-quality screenshots and videos, and positive user reviews. We also implement analytics and tracking to monitor app performance and user engagement metrics.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">App Store Optimization (ASO)</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* App Maintenance & Support */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/website_maintainence.jpg" alt="App Maintenance & Support" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We provide comprehensive maintenance and support services to ensure your app continues to perform optimally. Our services include regular updates, bug fixes, performance monitoring, security patches, and feature enhancements. We also handle app store submissions and ensure compliance with the latest platform requirements and guidelines.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">App Maintenance & Support</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Backend Integration */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/api_integeration.jpeg" alt="Backend Integration" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We develop robust backend systems and APIs that power your mobile applications. Our backend solutions include user authentication, data synchronization, push notifications, analytics, and third-party integrations. We ensure secure, scalable, and high-performance backend infrastructure that supports your app's growth and user demands.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Backend Integration & APIs</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Mobile Security */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/web_security.jpg" alt="Mobile Security" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We implement comprehensive security measures to protect your app and user data. Our security practices include secure coding, data encryption, secure API communication, biometric authentication, and regular security audits. We ensure compliance with industry standards and regulations while protecting against common mobile security threats.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Mobile Security & Compliance</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Performance Optimization */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Perfromance_optimization.jpg" alt="Mobile Performance Optimization" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We optimize your mobile app for maximum performance, battery efficiency, and user experience. Our optimization strategies include code optimization, image compression, lazy loading, caching mechanisms, and network optimization. We ensure your app loads quickly, uses minimal resources, and provides smooth interactions across all devices and network conditions.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Performance Optimization</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Sections */}
      <section>
        <div className="full-image">
          <Image src="/services/why_choose_deployed.png" alt="Why Choose Deployed" width={1200} height={400} />
        </div>
      </section>
      <section>
        <div className="full-image">
          <Image src="/services/our_web_process.png" alt="Our App Development Process" width={1200} height={400} />
        </div>
      </section>

      {/* Website Now Section (again) */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Create Scalable Mobile Solutions</Link>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-header">
            <div className="industries-subtitle">INDUSTRIES WE FOCUS</div>
            <h2 className="industries-title">Industries We Serve with Our Custom Mobile App Development Services</h2>
          </div>
          <div className="industries-content">
            {/* First Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Finance & Fintech</h3>
                  <p className="industry-description">We develop secure mobile banking apps, payment solutions, and financial management tools that provide seamless, 24/7 access to financial services. Our fintech apps integrate with payment gateways, offer real-time transaction tracking, and implement advanced security measures like biometric authentication and encryption to ensure user trust and regulatory compliance.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Healthcare</h3>
                  <p className="industry-description">Our healthcare mobile apps include telemedicine platforms, patient portals, and health monitoring applications that comply with HIPAA and GDPR regulations. We create secure, user-friendly interfaces that facilitate communication between patients and healthcare providers while ensuring the privacy and security of sensitive medical information.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">E-commerce & Retail</h3>
                  <p className="industry-description">We build feature-rich e-commerce mobile apps that provide seamless shopping experiences with secure payment processing, real-time inventory management, and personalized recommendations. Our retail apps include features like barcode scanning, loyalty programs, and push notifications to drive customer engagement and increase sales.</p>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Education & E-learning</h3>
                  <p className="industry-description">Our educational mobile apps include learning management systems, interactive course platforms, and skill development applications. We create engaging, personalized learning experiences with features like progress tracking, gamification, offline content access, and collaborative learning tools that enhance student engagement and outcomes.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Logistics & Transportation</h3>
                  <p className="industry-description">We develop logistics and transportation apps that provide real-time tracking, route optimization, and fleet management capabilities. Our solutions include delivery tracking apps, ride-sharing platforms, and supply chain management tools that improve operational efficiency and provide transparency to customers and stakeholders.</p>
                </div>
              </div>
              <div className="industry-card" style={{ opacity: 0.3, pointerEvents: 'none' }}>
                <div className="industry-content">
                  {/* Placeholder for future industries */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Now Section (again) */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Transform Your Mobile Presence</Link>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-container">
          <div className="tech-stack-header">
            <h2 className="tech-stack-title">Our Mobile Tech Stack</h2>
            <p className="tech-stack-description">Equipped with the latest mobile development tools, our teams deliver impactful solutions designed to grow your business.</p>
          </div>
          {/* Tech Stack Grids */}
                      <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/react.png" alt="React" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/angular.png" alt="Angular" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/vuejs.png" alt="Vue.js" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/nextjs.png" alt="Next.js" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/firebase.png" alt="Firebase" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/aws.png" alt="AWS" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/docker.png" alt="Docker" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/kubernetes.png" alt="Kubernetes" width={80} height={80} /></div></div>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/mongodb.png" alt="MongoDB" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/postgresql.png" alt="PostgreSQL" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/redis.png" alt="Redis" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/mysql.png" alt="MySQL" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/gitlab.png" alt="GitLab" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/ansible.png" alt="Ansible" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/terraform.png" alt="Terraform" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/digitaloccean.png" alt="DigitalOcean" width={80} height={80} /></div></div>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/js.png" alt="JavaScript" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/typescript.png" alt="TypeScript" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/laravel.png" alt="Laravel" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/cassandra.png" alt="Cassandra" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/neo4j.png" alt="Neo4j" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/selenium.png" alt="Selenium" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/mocha.png" alt="Mocha" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/cypress.png" alt="Cypress" width={80} height={80} /></div></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Build Your Dream Mobile App?</h2>
          <p className="cta-description">
            Let&apos;s discuss your project and create a mobile solution that drives your business forward. 
            Get started with a free consultation today.
          </p>
          <Link href="/contact" className="cta-button">Start Your Project</Link>
        </div>
      </section>

      {/* Fixed CTA Section */}
      <section className="fixed-cta-section">
        <div className="fixed-cta-container">
          <Link href="/contact" className="fixed-cta-button" id="fixedCtaButton">
            Let&apos;s Talk Business
          </Link>
        </div>
      </section>
    </>
  );
} 
import Image from 'next/image';
import Link from 'next/link';

export default function WebDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <div className="hero-glass">
            <div className="service-category">WEB DEVELOPMENT</div>
            <h1 className="service-title">Building Seamless Experiences</h1>
            <Link href="/contact" className="service-cta">Build High-Performance Website</Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">
          <div className="overview-content">
            <div className="overview-subtitle">OVERVIEW</div>
            <p className="overview-description">
              Our web development services provide enterprise-grade and customized web development solutions 
              tailored to meet the evolving demands of modern businesses.<br /> Whether you need a simple landing 
              page or a complex web application, we have the expertise to deliver results that exceed expectations.
            </p>
            <div className="overview-highlight">What we are good at:</div>
            <ul className="overview-features">
              <li><strong>Cutting-Edge Technologies:</strong> Our use of the latest frameworks and technologies such as React.js, Angular, Vue.js, Node.js, Laravel, Ruby on Rails, and Python ensures your web solutions are future-ready.</li>
              <li><strong>Responsive Design:</strong> Our approach guarantees your website adapts to all screen sizes, providing a seamless user experience across all devices.</li>
              <li><strong>Performance Optimization:</strong> We ensure your website is optimized for speed and performance, leveraging CDNs, lazy loading, and caching strategies to enhance load times.</li>
              <li><strong>Web Security:</strong> We ensure that your website is protected with the latest security standards, including SSL encryption, firewalls, and regular security audits.</li>
            </ul>
          </div>
          <div className="overview-image">
            <Image src="/services/web-development_2.jpeg" alt="Web Development Overview" width={600} height={400} />
          </div>
        </div>
      </section>

      {/* Website Now Section */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now">Build Your Website Now</Link>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-header">
            <h2 className="enterprise-title">Seamless & Enterprise-ready Web<br />Development</h2>
          </div>
          <div className="enterprise-grid">
            {/* Custom Web Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/custom-software-development.jpg" alt="Custom Web Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We specialize in building custom websites tailored to your unique business requirements. Our team works closely with you to understand your vision and create a fully customized web solution that meets both your functional and aesthetic goals. Whether it&apos;s a brand-new website or a platform upgrade, we ensure that the final product is scalable, user-friendly, and designed to evolve with your business.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Custom Web Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* E-Commerce Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/e-commerce_development.jpg" alt="E-Commerce Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We develop powerful and secure e-commerce websites that enable businesses to sell products and services seamlessly online. Our expertise spans across various e-commerce platforms, including Shopify, Magento, WooCommerce, and BigCommerce. From responsive designs and intuitive shopping cart systems to secure payment gateways and inventory management, we deliver solutions that enhance the shopping experience, increase conversions, and drive business growth.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">E-Commerce Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* CMS */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/CMS.jpg" alt="Content Management System" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We build flexible, easy-to-use CMS platforms like WordPress, Drupal, and Joomla that allow businesses to manage their website content effortlessly. Our CMS solutions are designed with scalability in mind, enabling you to grow your website and add new features over time. Whether you need a blog, a portfolio, or an enterprise-level site, we provide the tools you need to create, manage, and publish content effectively.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Content Management System (CMS)</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Web Application Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/web-development_2.jpeg" alt="Web Application Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">Our team develops complex, scalable web applications tailored to your business needs. Using frameworks such as React, Angular, and Vue.js, we build responsive, high-performance applications that are secure and user-friendly. Whether you need a custom CRM system, project management tool, or client portal, we provide end-to-end solutions that improve business processes and increase operational efficiency.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Web Application Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* UI/UX Design */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/UI:UX_web.jpeg" alt="UI/UX Design" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">Designing for an exceptional user experience is at the core of our development process. Our UI/UX designers work to create visually stunning, intuitive, and user-friendly interfaces that ensure your website or application engages visitors and enhances their experience. By focusing on accessibility, navigation, and responsive design, we create digital experiences that leave a lasting impression.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">UI/UX Design</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* API Integration & Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/api_integeration.jpeg" alt="API Integration & Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We specialize in integrating third-party services and APIs into your web platform to enhance functionality and improve efficiency. Whether it&apos;s payment gateways, social media platforms, CRM systems, or other enterprise software, we ensure that the integration process is seamless and that all systems communicate effectively. Our team also develops custom APIs to connect your website with other platforms or services, enhancing flexibility and scalability.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">API Integration & Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Website Maintenance & Support */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/website_maintainence.jpg" alt="Website Maintenance & Support" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">Once your website is live, we provide ongoing maintenance and support services to ensure it runs smoothly, remains secure, and stays up-to-date with the latest technology trends. Our team performs regular updates, security audits, bug fixes, and optimizations, ensuring your website continues to perform at its best. We offer flexible support packages tailored to your needs, ensuring your site is always ready for growth.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Website Maintenance & Support</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* SEO & Digital Marketing Integration */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/SEO_Digital_marketing.jpg" alt="SEO & Digital Marketing Integration" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">To help your website reach its full potential, we integrate SEO and digital marketing best practices throughout the development process. From on-page optimization, such as keyword research, content structuring, and metadata management, to off-page SEO strategies, we ensure your website ranks higher on search engines. We also integrate analytics tools and optimize content for maximum reach, helping you drive organic traffic and improve conversions.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">SEO & Digital Marketing Integration</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Web Security Solutions */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/web_security.jpg" alt="Web Security Solutions" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We understand that website security is critical to protecting your business and users. We implement industry-standard security measures such as SSL certificates, firewalls, data encryption, and two-factor authentication to ensure that your website remains secure from threats. Regular security audits and updates are also part of our services, keeping your website protected from emerging vulnerabilities.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Web Security Solutions</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Performance Optimization */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Perfromance_optimization.jpg" alt="Performance Optimization" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">Website performance is a critical factor in user experience and SEO rankings. We optimize your site for faster load times by implementing strategies like image compression, minification of CSS and JavaScript files, caching mechanisms, and Content Delivery Networks (CDNs). This ensures that your website provides an exceptional user experience while maintaining excellent performance across devices.</p>
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
          <Image src="/services/our_web_process.png" alt="Our Web Process" width={1200} height={400} />
        </div>
      </section>

      {/* Website Now Section (again) */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Create Scalable Web Solutions</Link>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-header">
            <div className="industries-subtitle">INDUSTRIES WE FOCUS</div>
            <h2 className="industries-title">Industries We Serve with Our Custom Web Development Services</h2>
          </div>
          <div className="industries-content">
            {/* First Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Finance & Fintech</h3>
                  <p className="industry-description">In finance, precision and performance are paramount. We build secure web portals and mobile banking apps that allow seamless, 24/7 access to services. Our solutions integrate payment gateways, transaction tracking, and real-time notifications, ensuring your digital banking services are reliable, secure, and scalable. We are committed to providing fintech solutions that foster trust, transparency, and financial growth.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Healthcare</h3>
                  <p className="industry-description">Digital solutions in healthcare must adhere to strict regulations like HIPAA and GDPR. We develop secure patient portals, telemedicine apps, and healthcare management systems that streamline operations while safeguarding patient data. Our expertise ensures that your healthcare applications not only meet regulatory standards but also enhance the overall user experience for patients and providers alike.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Logistics & Supply Chain</h3>
                  <p className="industry-description">From real-time tracking systems to warehouse management apps and route optimization software, we create custom digital platforms that provide end-to-end visibility into your supply chain operations. Our solutions improve operational efficiency, accuracy, and decision-making, enabling you to optimize logistics and streamline supply chain processes for maximum performance.</p>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Education & E-learning</h3>
                  <p className="industry-description">We build scalable Learning Management Systems (LMS) and e-learning platforms that offer interactive, customizable content and data-driven insights. Our platforms are ideal for schools, universities, and corporate training programs, providing personalized learning experiences and real-time progress tracking. Whether you&apos;re delivering courses or conducting assessments, we ensure a seamless, engaging, and effective online learning environment.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Retail</h3>
                  <p className="industry-description">In the competitive retail landscape, a fast, smooth, and responsive platform is essential for customer retention and increasing sales. We specialize in building custom e-commerce websites, mobile apps, and PWAs (Progressive Web Apps) that integrate seamlessly with payment systems, real-time inventory management, and advanced analytics. Our solutions are designed to scale as your business grows, helping you deliver exceptional customer experiences and boost conversions.</p>
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
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Transform Your Digital Presence</Link>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-container">
          <div className="tech-stack-header">
            <h2 className="tech-stack-title">Our Tech Stack</h2>
            <p className="tech-stack-description">Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.</p>
          </div>
          {/* Tech Stack Grids */}
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/aws.png" alt="AWS" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/docker.png" alt="Docker" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/kubernetes.png" alt="Kubernetes" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/mysql.png" alt="MySQL" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/postgresql.png" alt="PostgreSQL" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/mongodb.png" alt="MongoDB" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/selenium.png" alt="Selenium" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/apache.png" alt="Apache" width={80} height={80} /></div></div>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/firebase.png" alt="Firebase" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/js.png" alt="JavaScript" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/typescript.png" alt="TypeScript" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/react.png" alt="React" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/nextjs.png" alt="Next.js" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/vuejs.png" alt="Vue.js" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/angular.png" alt="Angular" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/svelte.png" alt="Svelte" width={80} height={80} /></div></div>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/tailwindcss.webp" alt="Tailwind CSS" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/boostrap.png" alt="Bootstrap" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/laravel.png" alt="Laravel" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/cassandra.png" alt="Cassandra" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/redis.png" alt="Redis" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/neo4j.png" alt="Neo4j" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/gitlab.png" alt="GitLab" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/terraform.png" alt="Terraform" width={80} height={80} /></div></div>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/ansible.png" alt="Ansible" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/digitaloccean.png" alt="DigitalOcean" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/joker.png" alt="Joker" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/mocha.png" alt="Mocha" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/cypress.png" alt="Cypress" width={80} height={80} /></div></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Build Your Dream Website?</h2>
          <p className="cta-description">
            Let&apos;s discuss your project and create a web solution that drives your business forward. 
            Get started with a free consultation today.
          </p>
          <Link href="/contact" className="cta-button">Start Your Project</Link>
        </div>
      </section>

      {/* Fixed CTA Section */}
      <section className="fixed-cta-section">
        <div className="fixed-cta-container">
          <h2 className="careers-title">Let&apos;s Build Your Next Web Solution</h2>
          <Link href="/contact" className="fixed-cta-button" id="fixedCtaButton">
            Let&apos;s Talk Business
          </Link>
        </div>
      </section>
    </>
  );
} 
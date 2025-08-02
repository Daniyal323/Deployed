import Image from 'next/image';
import Link from 'next/link';

export default function CloudSolutions() {
  return (
    <>
    
      {/* Hero Section */}
      <section className="service-hero" style={{
        backgroundImage: 'url(/services/cloud-solutions-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-glass">
            <div className="service-category">CLOUD SOLUTIONS</div>
            <h1 className="service-title">Transform Your Business with Cloud Solutions</h1>
            <Link href="/contact" className="service-cta">Start Your Cloud Journey</Link>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(10, 20, 60, 0.55)',
          zIndex: -1,
        }} />
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">
          <div className="overview-content">
            <div className="overview-subtitle">OVERVIEW</div>
            <p className="overview-description">
            At Deployed, our Cloud Maintenance & Integration Services are crafted to ensure your cloud infrastructure stays reliable, secure, and high-performing. We specialize in seamless integration across diverse platforms, enabling unified operations and streamlined data management.
            </p>
            <div className="overview-highlight">What we are good at:</div>
            <ul className="overview-features">
              <li><strong>Cloud Integration Solutions:</strong> Connect and unify multiple cloud environments for consistent and efficient data flow.</li>
              <li><strong>Proactive Monitoring & Management:</strong> Continuously monitor and manage your cloud systems to maintain optimal performance and security.</li>
              <li><strong>Automated Backup & Disaster Recovery:</strong> Protect critical data with automated backups and rapid, reliable recovery processes.</li>
              <li><strong>Advanced Cloud Security:</strong> Tailored, proactive security measures to safeguard your specific cloud environment.</li>
              <li><strong>Application Performance Optimization:</strong> Fine-tune cloud-based applications for smoother, faster, and more reliable user experiences.</li>
              <li><strong>Compliance & Regulatory Management:</strong> Ensure your cloud infrastructure complies with relevant industry standards and regulations.</li>
              <li><strong>Cloud Cost Optimization:</strong> Cut unnecessary expenses and improve operational efficiency with data-driven cost strategies.</li>
              <li><strong>Custom API Integration:</strong> Seamlessly connect your custom apps and services with tailored API solutions.</li>
            </ul>
          </div>
          <div className="overview-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Image src="/services/cloud-solutions-overview.jpeg" alt="Cloud Solutions Overview" width={600} height={400} />
          </div>
        </div>
      </section>

      {/* Website Now Section */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now">Start Your Cloud Project</Link>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-header">
            <h2 className="enterprise-title">Enterprise-Ready Cloud<br />Solutions</h2>
          </div>
          <div className="enterprise-grid">
            {/* Cloud Migration Services */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/cloud-migrations.jpg" alt="Cloud Migration Services" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  We focus on transferring your legacy applications and data to the cloud, delivering a smooth, secure, and streamlined migration process. Our method reduces operational complexity, boosts scalability, and accelerates time-to-market. Utilizing AWS Migration Hub, Azure Migrate, and Google Cloud Migration Tools, we guarantee efficient migration with minimal impact.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cloud Migration Services</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Cloud-Native Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/cloud-native1.png" alt="Cloud-Native Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Our experts develop cloud-native applications engineered for high performance, reliability, and scalability. Emphasizing microservices, serverless architecture, and containerization, we ensure quick responsiveness to market shifts and faster service deployment, using technologies such as Kubernetes, Docker, AWS Lambda, and Azure Functions.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cloud-Native Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Managed Cloud Services */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/managed-cloud-services.jpg" alt="Managed Cloud Services" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Deployed provides end-to-end management of your cloud infrastructure, guaranteeing ongoing optimization for availability, performance, and security. Our skilled team reduces the burden on your IT staff, enabling them to prioritize strategic initiatives while we handle cloud operations to reduce downtime and sustain optimal performance.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Managed Cloud Services</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Cloud Security Services */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/cloud-security-services.jpg" alt="Cloud Security Services" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  We deploy strong security frameworks customized to secure your cloud infrastructure. Our solutions cover identity management, data encryption, and compliance protocols, ensuring sensitive data is protected, threats are mitigated, and adherence to industry regulations is consistently upheld.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cloud Security Services</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Cloud Optimization Services */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/cloud-optimization-services.jpg" alt="Cloud Optimization Services" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  We consistently refine your cloud environment with an emphasis on cost savings and resource optimization. Our team enhances cloud performance, ensuring smooth application operation and dynamic resource scaling, all while utilizing tools like AWS Cost Explorer, Azure Cost Management, and Google Cloud Operations Suite.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cloud Optimization Services</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Disaster Recovery & Backup Solutions */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/disastere-recovery-backup-solutions.jpg" alt="Disaster Recovery & Backup Solutions" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Our disaster recovery and automated backup plans safeguard data integrity and ensure business continuity. We secure vital information, enabling swift recovery during outages while meeting industry compliance standards, using solutions like Veeam, AWS Backup, and Azure Site Recovery.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Disaster Recovery & Backup Solutions</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Cloud DevOps & Automation */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/cloud-devops-automation.jpg" alt="Cloud DevOps & Automation" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    We apply DevOps methodologies and CI/CD pipelines to automate cloud processes, allowing quicker deployments and improved consistency. Leveraging tools such as Jenkins, GitLab CI/CD, Terraform, and Ansible, we boost collaboration, simplify operations, and accelerate time-to-market.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cloud DevOps & Automation</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Sections */}
      <section>
        <div className="full-image" >
          <Image src="/services/why-choose-us.jpeg" alt="Why Choose Deployed" width={1200} height={400} />
        </div>
      </section>
      <section>
        <div className="full-image">
          <Image src="/services/cloud-maintanace-process1.jpg" alt="Our Cloud Deployment Process" width={1200} height={400} />
        </div>
      </section>

      {/* Website Now Section (again) */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Create Scalable Cloud Solutions</Link>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-header">
            <div className="industries-subtitle">INDUSTRIES WE FOCUS</div>
            <h2 className="industries-title">Industries We Serve with Our Cloud Solutions</h2>
          </div>
          <div className="industries-content">
            {/* First Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Finance & Fintech</h3>
                  <p className="industry-description">We deliver secure, compliant, and scalable cloud solutions for financial institutions, enabling real-time analytics, fraud detection, and digital banking innovation.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Healthcare</h3>
                  <p className="industry-description">Our cloud services help healthcare providers securely store patient data, enable telemedicine, and ensure compliance with HIPAA and other regulations.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Logistics & Supply Chain</h3>
                  <p className="industry-description">We build cloud-based platforms for real-time tracking, inventory management, and predictive analytics to optimize logistics and supply chain operations.</p>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Education & E-learning</h3>
                  <p className="industry-description">We create scalable cloud-based LMS and e-learning platforms for schools, universities, and enterprises, supporting remote learning and real-time collaboration.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Retail</h3>
                  <p className="industry-description">Our cloud solutions power e-commerce, omnichannel retail, and personalized customer experiences with secure, scalable infrastructure and advanced analytics.</p>
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
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Transform Your Cloud Infrastructure</Link>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-container">
          <div className="tech-stack-header">
            <h2 className="tech-stack-title">Our Cloud Tech Stack</h2>
            <p className="tech-stack-description">We leverage the latest cloud-native tools and platforms to deliver secure, scalable, and innovative solutions for your business.</p>
          </div>
          {/* Tech Stack Grids */}
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/aws.png" alt="AWS" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/azure.png" alt="Azure" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/google-cloud.png" alt="Google Cloud" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/docker.png" alt="Docker" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/kubernetes.png" alt="Kubernetes" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/terraform.png" alt="Terraform" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/ansible.png" alt="Ansible" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/redis.png" alt="Redis" width={80} height={80} /></div></div>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/postgresql.png" alt="PostgreSQL" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/mongodb.png" alt="MongoDB" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/mysql.png" alt="MySQL" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/gitlab.png" alt="GitLab" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/cypress.png" alt="Cypress" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/selenium.png" alt="Selenium" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/apache.png" alt="Apache" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/digitaloccean.png" alt="DigitalOcean" width={80} height={80} /></div></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Modernize Your Business?</h2>
          <p className="cta-description">
            Let&apos;s discuss your cloud project and create a solution that drives your business forward. 
            Get started with a free consultation today.
          </p>
          <Link href="/contact" className="cta-button">Start Your Cloud Project</Link>
        </div>
      </section>

      {/* Fixed CTA Section */}
      <section className="fixed-cta-section">
        <div className="fixed-cta-container">
          <Link href="/contact" className="fixed-cta-button" id="fixedCtaButton">
            Let&apos;s Talk Cloud
          </Link>
        </div>
      </section>
    </>
  );
} 
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WebDevelopment() {
  return (
    <>
      <style jsx>{`
        .service-hero {
          --service-hero-image: url('/services/generativeAI-frontpage.jpg');
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <div className="hero-glass">
            <div className="service-category">GENERATIVE AI</div>
            <h1 className="service-title">AI-Driven Transformation for Your IT Ecosystem</h1>
            <Link href="/contact" className="service-cta">Create & Automate Now</Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">
          <div className="overview-content">
            <div className="overview-subtitle">OVERVIEW</div>
            <p className="overview-description">
              At Deployed, we specialize in creating cutting-edge generative AI solutions that revolutionize how businesses operate and innovate. Our team leverages state-of-the-art machine learning frameworks including TensorFlow, PyTorch, and advanced language models to build intelligent systems that drive growth and efficiency.
            </p>
            <div className="overview-highlight">What we are good at:</div>
            <ul className="overview-features">
              <li><strong>Custom AI Model Development:</strong> We design and implement bespoke generative AI models that create original content, from text and images to complex multimedia outputs tailored to your specific business needs.</li>
              <li><strong>Advanced AI Technology Stack:</strong> Our expertise spans the latest AI frameworks and tools, including TensorFlow, PyTorch, Hugging Face, and custom GPT implementations for enterprise applications.</li>
              <li><strong>Intelligent Data Solutions:</strong> We transform your data into powerful AI-driven insights, creating intelligent systems that learn, adapt, and deliver exceptional user experiences.</li>
            </ul>
          </div>
          <div className="overview-image">
            <Image src="/services/genai-overview.jpg" alt="Generative AI Overview" width={600} height={400} />
          </div>
        </div>
      </section>

      {/* Website Now Section */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now">Leverage AI Innvocation</Link>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-header">
            <h2 className="enterprise-title">Innovative AI Solutions</h2>
          </div>
          <div className="enterprise-grid">
            {/* Custom Web Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/autonomous_agent.jpg" alt="Autonomous Agent Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We develop intelligent self-learning autonomous AI agents, similar to AutoGPT or BabyAGI, that operate independently and adapt to changing conditions. Our autonomous agents can automate complex processes, make intelligent decisions, and continuously learn from their environment to optimize performance. These AI systems work autonomously to handle tasks, adapt to new scenarios, and drive operational efficiency across your business processes.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Autonomous Agent Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* E-Commerce Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/model_fine-tuning.jpg" alt="AI Model Fine-Tuning & Customization" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We specialize in customizing and fine-tuning pre-trained AI models to align with your specific business requirements. Our expertise in model optimization enhances performance, accuracy, and relevance for your targeted use cases. By adapting existing models to your domain-specific needs, we deliver AI solutions that provide superior results while reducing development time and computational costs.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">AI Model Fine-Tuning & Customization</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* CMS */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/llm_integeration.jpg" alt="LLM Integration" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We integrate cutting-edge Large Language Models (LLMs) into your existing systems to enhance decision-making capabilities and operational efficiency. Our LLM integration services help businesses leverage advanced AI models to streamline workflows, extract valuable insights from data, and automate complex cognitive tasks. By seamlessly incorporating these powerful AI models, we enable your organization to make more informed decisions and discover actionable business intelligence.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">LLM Integration</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Web Application Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/personalization_engines.jpg" alt="Personalization Engines" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We build intelligent personalization engines that adapt user experiences in real-time based on individual behavior patterns and preferences. Our AI-driven personalization systems analyze user interactions, learning patterns, and preferences to deliver customized content, recommendations, and interfaces. These engines create highly engaging and relevant user experiences that increase engagement, conversion rates, and customer satisfaction through dynamic content adaptation.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Personalization Engines</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* UI/UX Design */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/semantic_search.jpg" alt="Vector Semantic Search Solutions" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We develop advanced vector-based semantic search systems powered by AI and natural language processing to understand user intent and deliver precise search results. Our semantic search solutions go beyond traditional keyword matching to comprehend context, meaning, and relationships within data. This enables lightning-fast information retrieval with high accuracy, providing users with relevant results even when they don't use exact search terms.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Vector Semantic Search Solutions</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* API Integration & Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/simulation_training.jpg" alt="Simulation and Training Data Generation" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">We create sophisticated synthetic datasets that accurately replicate real-world conditions and scenarios for comprehensive AI model training. Our simulation and data generation services produce high-quality training data that mirrors authentic environments, enabling safe and efficient model development without the risks associated with real-world data collection. These synthetic datasets accelerate training processes while ensuring models are robust and well-prepared for deployment in actual applications.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Simulation and Training Data Generation</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Website Maintenance & Support */}
            <div className="enterprise-card">
                              <div className="card-image">
                  <Image src="/services/text_generation.jpg" alt="AI-Powered Text Generation" width={400} height={300} />
                  <div className="card-overlay">
                    <p className="overlay-text">Leverage advanced generative AI technology to produce sophisticated, contextually relevant content that elevates your marketing campaigns, streamlines customer service operations, and creates comprehensive documentation. Our AI solutions generate engaging copy, personalized responses, and detailed technical content that maintains your brand voice while significantly reducing content creation time and costs.</p>
                  </div>
                </div>
              <div className="card-content">
                <h3 className="card-title">AI-Powered Text Generation</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* SEO & Digital Marketing Integration */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/code_gen.jpg" alt="Code Generation" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">Speed up development cycles by generating code snippets or entire scripts for complex projects.</p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Code Generation</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Full Image Sections */}
      <section>
        <div className="full-image">
          <Image src="/services/deployedai_enterprise_catalyze.jpg" alt="Catalyze Enterprise" width={1200} height={400} />
        </div>
      </section>
      <section>
        <div className="full-image">
          <Image src="/services/deployment_process.jpg" alt="Our Deployment Process" width={1200} height={400} />
        </div>
      </section>

      {/* Website Now Section (again) */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Talk To Our Gen AI Expert</Link>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-header">
            <div className="industries-subtitle">INDUSTRIES WE FOCUS</div>
            <h2 className="industries-title">AI for Every Sector</h2>
          </div>
          <div className="industries-content">
            {/* First Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Finance & Fintech</h3>
                  <p className="industry-description">Within the financial sector, where accuracy and protection are essential, Deployed&apos;s generative AI solutions deliver intelligent analytics for enhanced, swifter strategic decisions. By examining intricate financial datasets instantaneously, our specialists proficiently bolster fraud prevention, portfolio predictions, and compliance oversight. We enable financial organizations to achieve operational excellence through AI-powered business intelligence, equipping them to maintain market leadership within regulatory frameworks.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Healthcare</h3>
                  <p className="industry-description">Our advanced AI solutions are revolutionizing healthcare delivery by optimizing patient diagnostics, treatment planning, and clinical research. Deployed&apos;s intelligent systems process comprehensive medical datasets to generate personalized care protocols, empowering healthcare professionals with predictive analytics and evidence-based recommendations. Through accelerated pharmaceutical research and immersive medical training simulations, our AI technology enables healthcare institutions to implement data-driven, precision medicine approaches that enhance patient outcomes and advance medical innovation.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Gaming</h3>
                  <p className="industry-description">At Deployed, our advanced AI solutions enable game development studios to craft immersive and boundless virtual realms with exceptional productivity. Leveraging intelligent procedural content generation, we accelerate the development of complex game landscapes, varied character interactions, and adaptive narrative systems, significantly reducing production timelines and expenses. Our technology breathes life into interactive gaming experiences, elevating user engagement and establishing innovative benchmarks in digital entertainment.</p>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Media & Entertainment</h3>
                  <p className="industry-description">Deployed&apos;s advanced AI solutions catalyze creativity in content creation, spanning automated storyline development and music composition to crafting engaging virtual reality environments. Our specialists assist entertainment organizations in delivering premium, captivating media at volume, enabling them to remain flexible and dynamically engage with viewers—while minimizing production schedules and maintaining artistic excellence.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Education & E-learning</h3>
                  <p className="industry-description">Deployed&apos;s generative AI solutions revolutionize educational technology by creating personalized learning experiences and intelligent content generation. Our AI-powered platforms develop adaptive curricula, generate interactive assessments, and provide real-time student feedback, enabling educational institutions to deliver customized instruction at scale. We help schools and training organizations enhance engagement through AI-driven tutoring systems, automated grading, and dynamic content creation that adapts to individual learning styles and progress.</p>
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
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Boost Productivity With AI</Link>
      </section>

      

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Transform Your Business with AI?</h2>
          <p className="cta-description">
            Let&apos;s discuss your AI vision and create intelligent solutions that revolutionize your operations.<br />
            Get started with a free AI consultation today.
          </p>
          <Link href="/contact" className="cta-button">Start Your AI Journey</Link>
        </div>
      </section>

      {/* Fixed CTA Section */}
      {/*  */}
      <section className="fixed-cta-section">
        <div className="fixed-cta-container">
          {/* <h2 className="careers-title">Let&apos;s Build Your Next Web Solution</h2> */}
          <Link href="/contact" className="fixed-cta-button" id="fixedCtaButton">
            Let&apos;s Talk Business
          </Link>
        </div>
      </section>
    </>
  );
} 
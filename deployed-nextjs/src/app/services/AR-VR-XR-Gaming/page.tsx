import Image from 'next/image';
import Link from 'next/link';

export default function ARVRXRGaming() {
  return (
    <>
    
      {/* Hero Section */}
      <section className="service-hero" style={{
        backgroundImage: 'url(/services/AR-VR-XR-Gaming.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-glass">
            <div className="service-category">AR/VR/XR GAMING</div>
            <h1 className="service-title">Create Immersive Gaming Experiences</h1>
            <Link href="/contact" className="service-cta">Start Your AR/VR/XR Gaming Project</Link>
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
            At Deployed, our AR/VR/XR Gaming Services are designed to create cutting-edge immersive gaming experiences that blur the line between reality and virtual worlds. We specialize in developing next-generation games for Virtual Reality (VR), Augmented Reality (AR), and Extended Reality (XR) platforms that deliver unparalleled user engagement and interactive experiences.
            </p>
            <div className="overview-highlight">What we are good at:</div>
            <ul className="overview-features">
              <li><strong>Virtual Reality (VR) Game Development:</strong> Create fully immersive VR experiences with 360-degree environments and interactive gameplay mechanics.</li>
              <li><strong>Augmented Reality (AR) Gaming:</strong> Develop AR games that overlay digital content onto the real world for enhanced interactive experiences.</li>
              <li><strong>Extended Reality (XR) Solutions:</strong> Build mixed reality experiences that combine virtual and real-world elements seamlessly.</li>
              <li><strong>3D Environment Design:</strong> Design stunning 3D worlds and environments optimized for immersive gaming experiences.</li>
              <li><strong>Spatial Computing Integration:</strong> Implement advanced spatial computing features for natural interaction and movement.</li>
              <li><strong>Cross-Platform VR/AR Development:</strong> Ensure your games work across multiple VR/AR platforms and devices.</li>
              <li><strong>Motion Tracking & Gesture Recognition:</strong> Integrate advanced motion tracking and gesture-based controls for intuitive gameplay.</li>
              <li><strong>Haptic Feedback Systems:</strong> Implement tactile feedback systems to enhance immersion and user experience.</li>
            </ul>
          </div>
          <div className="overview-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Image src="/services/AR-VR-XR-Overview.png" alt="AR/VR/XR Gaming Overview" width={600} height={400} />
          </div>
        </div>
      </section>

      {/* Website Now Section */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now">Start Your AR/VR/XR Gaming Project</Link>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-header">
            <h2 className="enterprise-title">Next-Generation AR/VR/XR<br />Gaming Solutions</h2>
          </div>
          <div className="enterprise-grid">
            {/* Full-Cycle AR/VR/XR Game Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/full-cycle-AR.png" alt="Virtual Reality (VR) Game Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  We create advanced VR games that immerse players in rich, interactive 3D environments. Our experiences incorporate lifelike physics, spatial sound, and user-friendly controls to deliver captivating and unforgettable gameplay on all leading VR platforms.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Full-Cycle AR/VR/XR Game Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* AR & VR Experience Design */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/AR-Experience-Design.png" alt="Augmented Reality (AR) Gaming" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Designing visually immersive, user-focused interfaces and interaction experiences for AR/VR games, customized for mobile platforms, VR headsets, and mixed-reality devices. Our approach prioritizes intuitive navigation, responsive controls, and seamless user engagement, enhancing gameplay across diverse hardware ecosystems.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">AR & VR Experience Design                </h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* 3D Asset Creation and Optimization */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/3D-Asset.png" alt="Extended Reality (XR) Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Creating, refining, and optimizing high-quality 3D assets to elevate visual realism while maintaining seamless performance across AR, VR, and XR platforms. Our workflow balances aesthetic detail with technical efficiency, ensuring compatibility and responsiveness on all major devices.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">3D Asset Creation and Optimization</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Cross-Platform AR/VR/XR Integration */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Cross-platform.png" alt="3D Environment & World Design" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Developing cross-platform compatibility for top AR/VR systems—including Oculus, HTC Vive, HoloLens, and Magic Leap—to expand reach while preserving high quality and optimal performance. Our solutions ensure consistent user experiences across diverse hardware ecosystems.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cross-Platform AR/VR/XR Integration</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Spatial Audio Engineering */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Spatial-Audio.png" alt="Spatial Computing Integration" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Creating dynamic 3D audio and spatial soundscapes that respond in real-time to user actions and environmental changes, enhancing immersion and deepening player engagement. By tailoring sound to the player's interactions and surroundings, the experience becomes more lifelike and emotionally impactful. This adaptive audio design fosters a stronger connection between the player and the virtual world.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Spatial Audio Engineering</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Gesture and Motion Tracking Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Gesture-Motion.png" alt="Cross-Platform VR/AR Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Developing interactive systems that incorporate gesture recognition, motion tracking, and haptic feedback to deliver realistic and intuitive control within the game environment. These technologies enable players to engage more naturally, creating a seamless and immersive gameplay experience where physical movements directly influence in-game actions.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Gesture and Motion Tracking Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Cloud-Based AR/VR/XR Solutions */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Cloud-based-AR.png" alt="Motion Tracking & Gesture Recognition" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Utilizing cloud technologies to facilitate real-time data processing, multiplayer functionality, and high-performance rendering, ensuring smooth and seamless multiplayer experiences in AR, VR, and MR games. This approach allows for scalable, low-latency interactions, enabling players to connect and collaborate effortlessly within immersive virtual environments.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cloud-Based AR/VR/XR Solutions</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Mixed Reality (MR) Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Mixed-Reality.png" alt="Haptic Feedback Systems" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Incorporating mixed reality (MR) technology to seamlessly merge real and virtual environments, crafting interactive experiences where players can engage with both physical and digital elements simultaneously. This fusion enhances immersion by enabling natural interactions that bridge the gap between the tangible world and digital content.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Mixed Reality (MR) Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* AI-Powered Interactivity */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/AI-Powered-Interactivity.png" alt="Social VR/AR Experiences" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Integrating artificial intelligence to create dynamic NPC behaviors, adaptive difficulty levels, and procedural content generation, making games more engaging and responsive to player actions. This AI-driven approach ensures a personalized and evolving gameplay experience that keeps players challenged and invested.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">AI-Powered Interactivity</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Augmented Reality (AR) Geo-Location & Mapping */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Geo-location.png" alt="Location-Based AR Gaming" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Creating location-based AR games that utilize accurate positioning and detailed map overlays, perfect for mobile AR experiences that seamlessly blend gameplay with real-world environments. This technology enhances player engagement by encouraging exploration and interaction within their actual surroundings.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Augmented Reality (AR) Geo-Location & Mapping</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Multiplayer AR/VR/XR Solutions */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Multiplayer-AR-VR-Solution.png" alt="VR/AR Content Creation Tools" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Constructing robust infrastructure to support real-time multiplayer experiences across AR, VR, and XR platforms, featuring advanced networking solutions that enable synchronized, cross-device gameplay. This ensures smooth, coordinated interactions among players, enhancing social connectivity and immersion in shared virtual spaces.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Multiplayer AR/VR/XR Solutions</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* AR/VR/XR Prototyping and MVP Development*/}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/MVP-development.png" alt="Performance Optimization for VR/AR" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Providing rapid prototyping and minimum viable product (MVP) development services to quickly test ideas and collect user feedback. This approach enables fast iteration and efficient scaling, ensuring the final product closely aligns with user needs and market demands.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">AR/VR/XR Prototyping and MVP Development                </h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* VR Training and Simulation Games */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Simulation-game.png" alt="VR/AR UX/UI Design" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                  Creating VR-based training games tailored for industries such as healthcare, military, and education, offering immersive and safe simulation environments. These experiences enable users to practice skills and scenarios realistically without real-world risks, improving learning outcomes and preparedness.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">VR Training and Simulation Games</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Sections */}
      <section>
        <div className="full-image">
          <Image src="/services/XR-Inovation.png" alt="Why Choose Deployed" width={1200} height={400} />
        </div>
      </section>
      <section>
        <div className="full-image">
          <Image src="/services/Game-Workflow.png" alt="Our AR/VR/XR Gaming Process" width={1200} height={400} />
        </div>
      </section>

      {/* Website Now Section (again) */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Create Immersive AR/VR/XR Games</Link>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-header">
            <div className="industries-subtitle">INDUSTRIES WE FOCUS</div>
            <h2 className="industries-title">Industries We Serve with Our AR/VR/XR Gaming Solutions</h2>
          </div>
          <div className="industries-content">
            {/* First Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Gaming Studios</h3>
                  <p className="industry-description">We help traditional gaming studios transition to AR/VR/XR by creating immersive gaming experiences that leverage cutting-edge spatial computing and interactive technologies.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Entertainment & Media</h3>
                  <p className="industry-description">Our AR/VR/XR solutions power entertainment platforms with immersive storytelling, interactive experiences, and virtual events that engage audiences in new ways.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Education & Training</h3>
                  <p className="industry-description">We build educational VR/AR applications that provide hands-on learning experiences, simulations, and interactive training programs for various industries.</p>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Healthcare & Medical</h3>
                  <p className="industry-description">Create therapeutic VR/AR applications for pain management, rehabilitation, mental health treatment, and medical training simulations.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Real Estate & Architecture</h3>
                  <p className="industry-description">Develop VR/AR solutions for virtual property tours, architectural visualization, and immersive design experiences for real estate and construction industries.</p>
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
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Transform Gaming with AR/VR/XR</Link>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-container">
          <div className="tech-stack-header">
            <h2 className="tech-stack-title">Our AR/VR/XR Gaming Tech Stack</h2>
            <p className="tech-stack-description">We leverage cutting-edge spatial computing and immersive technologies to create engaging, high-performance AR/VR/XR gaming experiences.</p>
          </div>
          {/* Tech Stack Grids */}
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/unity.png" alt="Unity" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/unreal-engine.png" alt="Unreal Engine" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/blender.png" alt="blender" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/Maya.png" alt="Maya" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/3DX-Max.png" alt="3DS" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/Substance-Painter.png" alt="Painter" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/Photon.png" alt="Photon" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/arkit.png" alt="Arkit" width={80} height={80} /></div></div>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/ARCore.png" alt="ARCore" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/oculus.png" alt="Oculus" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/vuforia.png" alt="Vuforia" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/microsoft.png" alt="Microsoft" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/vive.png" alt="Vive" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/WebXR.png" alt="WebXR" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/google-cloud.png" alt="Google Cloud" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/azure.png" alt="Azure" width={80} height={80} /></div></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Build the Future of Gaming?</h2>
          <p className="cta-description">
            Let&apos;s discuss your AR/VR/XR gaming project and create an immersive solution that revolutionizes the gaming industry. 
            Get started with a free consultation today.
          </p>
          <Link href="/contact" className="cta-button">Start Your AR/VR/XR Gaming Project</Link>
        </div>
      </section>

      
    </>
  );
}
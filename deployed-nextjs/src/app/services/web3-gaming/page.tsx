import Image from 'next/image';
import Link from 'next/link';

export default function Web3Gaming() {
  return (
    <>
    
      {/* Hero Section */}
      <section className="service-hero" style={{
        backgroundImage: 'url(/services/web3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-glass">
            <div className="service-category">WEB3 GAMING</div>
            <h1 className="service-title">Revolutionize Gaming with Web3 Technology</h1>
            <Link href="/contact" className="service-cta">Start Your Web3 Gaming Project</Link>
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
            At Deployed, our Web3 Gaming & Metaverse Services are designed to create immersive, decentralized gaming experiences that leverage blockchain technology, NFTs, and virtual worlds. We specialize in building next-generation games that offer true ownership, play-to-earn mechanics, and seamless integration with Web3 ecosystems.
            </p>
            <div className="overview-highlight">What we are good at:</div>
            <ul className="overview-features">
              <li><strong>Blockchain Game Development:</strong> Build decentralized games with smart contracts, NFT integration, and cryptocurrency rewards.</li>
              <li><strong>NFT Gaming Platforms:</strong> Create unique digital assets and collectibles that players truly own and can trade.</li>
              <li><strong>Play-to-Earn Mechanics:</strong> Implement tokenized rewards and economic systems that incentivize player engagement.</li>
              <li><strong>Metaverse Development:</strong> Design immersive virtual worlds and 3D environments for social interaction and gaming.</li>
              <li><strong>Smart Contract Integration:</strong> Develop secure, auditable smart contracts for game mechanics and asset management.</li>
              <li><strong>Cross-Chain Compatibility:</strong> Ensure your games work seamlessly across multiple blockchain networks.</li>
              <li><strong>Web3 Wallet Integration:</strong> Seamlessly connect players with their digital assets and cryptocurrency wallets.</li>
              <li><strong>GameFi Solutions:</strong> Combine gaming with DeFi to create innovative financial gaming experiences.</li>
            </ul>
          </div>
          <div className="overview-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Image src="/services/game-dev.jpg" alt="Web3 Gaming Overview" width={600} height={400} />
          </div>
        </div>
      </section>

      {/* Website Now Section */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now">Start Your Web3 Gaming Project</Link>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-header">
            <h2 className="enterprise-title">Next-Generation Web3<br />Gaming Solutions</h2>
          </div>
          <div className="enterprise-grid">
            {/* Blockchain Game Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/game-dev.jpg" alt="Blockchain Game Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    We develop cutting-edge blockchain games that leverage smart contracts and decentralized technology. Our games feature true asset ownership, transparent gameplay mechanics, and innovative tokenomics that create engaging player experiences while maintaining security and scalability.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Blockchain Game Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* NFT Integration & Marketplace Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/gaming-art.webp" alt="NFT Integration & Marketplace Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Create comprehensive NFT systems and marketplaces for gaming assets. Our solutions include NFT minting, trading platforms, rarity systems, and seamless integration with popular blockchain networks for optimal asset management and trading experiences.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">NFT Integration & Marketplace Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Play-to-Earn (P2E) Game Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/P2E.jpeg" alt="Play-to-Earn (P2E) Game Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Design and develop sophisticated play-to-earn games that reward players with cryptocurrency and NFTs. Our P2E mechanics create sustainable economies, prevent inflation, and provide genuine value while maintaining game balance and long-term engagement.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Play-to-Earn (P2E) Game Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Smart Contract Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/smart-contract-development.jpg" alt="Smart Contract Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Develop and deploy secure, audited smart contracts for game mechanics, asset management, and economic systems. Our smart contracts are gas-optimized, thoroughly tested, and designed to handle complex gaming logic while ensuring transparency and security.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Smart Contract Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Decentralized Finance (DeFi) Integration */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/DeFi.jpg" alt="Decentralized Finance (DeFi) Integration" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Integrate DeFi protocols and financial services into gaming ecosystems. Our solutions include yield farming, liquidity pools, lending platforms, and staking mechanisms that enhance player engagement and create new revenue streams.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Decentralized Finance (DeFi) Integration</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Tokenomics & Game Economy Design */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/tokenomics.jpg" alt="Tokenomics & Game Economy Design" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Design comprehensive tokenomics and economic systems for Web3 games. Our expertise includes token distribution, inflation control, reward mechanisms, and economic balance to ensure sustainable and engaging gaming experiences.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Tokenomics & Game Economy Design</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Metaverse Game Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/metaverse-game-development.jpg" alt="Metaverse Game Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Build immersive metaverse games with 3D worlds, virtual real estate, and social interaction features. Our metaverse solutions include avatar systems, virtual commerce, and seamless blockchain integration for true digital ownership and experiences.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Metaverse Game Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Cross-Chain Compatibility */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/cross-chain.jpg" alt="Cross-Chain Compatibility" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Develop games that work seamlessly across multiple blockchain networks, allowing players to use different cryptocurrencies and access various DeFi protocols. Our cross-chain solutions ensure maximum accessibility and interoperability for broader adoption.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Cross-Chain Compatibility</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Decentralized Autonomous Organizations (DAO) Integration */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/DAO.jpg" alt="Decentralized Autonomous Organizations (DAO) Integration" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Integrate DAO governance systems into gaming platforms, enabling community-driven decision making, voting mechanisms, and decentralized governance. Our DAO solutions foster player engagement and create truly community-owned gaming experiences.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Decentralized Autonomous Organizations (DAO) Integration</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Virtual Reality (VR) and Augmented Reality (AR) with Web3 */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/AR:VR:XR.png" alt="Virtual Reality (VR) and Augmented Reality (AR) with Web3" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Create immersive VR and AR gaming experiences integrated with Web3 technology. Our solutions combine cutting-edge spatial computing with blockchain features, enabling players to interact with digital assets in real-world and virtual environments.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Virtual Reality (VR) and Augmented Reality (AR) with Web3</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Game Asset Tokenization */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/game-assist-tokenization.jpg" alt="Game Asset Tokenization" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Transform in-game assets into tradeable NFTs with real-world value. Our tokenization services include character skins, weapons, land parcels, and other digital items that players can truly own, trade, and monetize across different platforms.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Game Asset Tokenization</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Multi-Platform Web3 Game Development */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/multiplatform.jpg" alt="Multi-Platform Web3 Game Development" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Develop Web3 games that work across multiple platforms including mobile, desktop, and web browsers. Our multi-platform solutions ensure consistent gameplay experiences and cross-platform asset ownership while maintaining blockchain integration.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Multi-Platform Web3 Game Development</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Game as a Service (GaaS) with Blockchain */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/GaaS.jpg" alt="Game as a Service (GaaS) with Blockchain" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Create sustainable Game-as-a-Service models powered by blockchain technology. Our GaaS solutions include subscription models, battle passes, seasonal content, and continuous updates while leveraging Web3 for enhanced player engagement and monetization.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Game as a Service (GaaS) with Blockchain</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
            {/* Web3 Game UX/UI Design */}
            <div className="enterprise-card">
              <div className="card-image">
                <Image src="/services/Web3-UI:UX.jpg" alt="Web3 Game UX/UI Design" width={400} height={300} />
                <div className="card-overlay">
                  <p className="overlay-text">
                    Design intuitive and engaging user experiences for Web3 games that simplify blockchain interactions. Our UX/UI solutions make complex Web3 features accessible to mainstream users while maintaining the security and functionality of decentralized gaming.
                  </p>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Web3 Game UX/UI Design</h3>
                <Link href="/contact" className="card-button">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Sections */}
      <section>
        <div className="full-image">
          <Image src="/services/Web3-about-us.png" alt="Why Choose Deployed" width={1200} height={400} />
        </div>
      </section>
      <section>
        <div className="full-image">
          <Image src="/services/Web3-gaming-process.png" alt="Our Web3 Gaming Process" width={1200} height={400} />
        </div>
      </section>

      {/* Website Now Section (again) */}
      <section className="website-now-section">
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Create Innovative Web3 Games</Link>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-header">
            <div className="industries-subtitle">INDUSTRIES WE FOCUS</div>
            <h2 className="industries-title">Industries We Serve with Our Web3 Gaming Solutions</h2>
          </div>
          <div className="industries-content">
            {/* First Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Gaming Studios</h3>
                  <p className="industry-description">We help traditional gaming studios transition to Web3 by integrating blockchain technology, NFT systems, and play-to-earn mechanics into their existing games.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Metaverse Platforms</h3>
                  <p className="industry-description">Our Web3 solutions power metaverse platforms with virtual real estate, social interactions, and digital asset trading capabilities.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">NFT Marketplaces</h3>
                  <p className="industry-description">We build specialized NFT marketplaces for gaming assets, collectibles, and virtual items with advanced trading features and liquidity pools.</p>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="industries-row">
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">DeFi Gaming</h3>
                  <p className="industry-description">Create innovative GameFi applications that combine gaming mechanics with decentralized finance, yield farming, and liquidity mining.</p>
                </div>
              </div>
              <div className="industry-card">
                <div className="industry-content">
                  <h3 className="industry-name">Esports & Competitive Gaming</h3>
                  <p className="industry-description">Develop competitive gaming platforms with blockchain-based tournaments, prize pools, and transparent reward distribution systems.</p>
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
        <Link href="/contact" className="website-now" style={{ marginTop: 50 }}>Transform Gaming with Web3</Link>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-container">
          <div className="tech-stack-header">
            <h2 className="tech-stack-title">Our Web3 Gaming Tech Stack</h2>
            <p className="tech-stack-description">We leverage cutting-edge blockchain and gaming technologies to create immersive, secure, and scalable Web3 gaming experiences.</p>
          </div>
          {/* Tech Stack Grids */}
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/ethereum.png" alt="Ethereum" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/polygon.png" alt="Polygon" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/solana.png" alt="Solana" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/unity.png" alt="Unity" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/unreal-engine.png" alt="Unreal Engine" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/binance.png" alt="binance" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/webb3.png" alt="Webb3.js" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/alchemy.png" alt="alchemy" width={80} height={80} /></div></div>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/truffle-suite.png" alt="Truffle" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/chainlink.png" alt="chainlink" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/infura.png" alt="infura" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/metamask.png" alt="metamask" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/openZeppelin.png" alt="openZeppelin" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/threejs.png" alt="threejs" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/redis.png" alt="Redis" width={80} height={80} /></div></div>
            <div className="tech-stack-item"><div className="tech-stack-icon"><Image src="/services/aws.png" alt="AWS" width={80} height={80} /></div></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Build the Future of Gaming?</h2>
          <p className="cta-description">
            Let&apos;s discuss your Web3 gaming project and create an innovative solution that revolutionizes the gaming industry. 
            Get started with a free consultation today.
          </p>
          <Link href="/contact" className="cta-button">Start Your Web3 Gaming Project</Link>
        </div>
      </section>

     
    </>
  );
} 
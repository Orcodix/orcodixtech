import React, { useState } from 'react'

export default function ProjectsPage({ onNavigateHome, onOpenContactModal }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  const filterCategories = ['All', 'Web Apps', 'Mobile Apps', 'Brand & UI/UX', '3D & Motion']

  const projectsData = [
    {
      id: 'case-ai',
      num: '01',
      title: 'CASE AI Platform',
      subtitle: 'NEXT-GEN AI & SAAS WORKSPACE',
      category: 'Web Apps',
      metric: '+210% User Growth',
      image: 'https://i.pinimg.com/1200x/fe/82/6c/fe826cbb2c342cd30c2567796282302b.jpg',
      tags: ['React 19', 'AI Integration', 'Tailwind', 'Node.js'],
      client: 'Apex AI Technologies',
      duration: '6 Weeks Sprint',
      challenge: 'The client required a unified dashboard to orchestrate multi-modal AI workflows with real-time response latency under 300ms.',
      solution: 'We engineered an obsidian-themed glassmorphic Web App interface with WebGL hardware-accelerated rendering and optimistic state UI updates.',
      results: [
        '210% increase in daily active users within 30 days',
        'Sub-300ms real-time AI response latency',
        'Featured on Product Hunt #1 Product of the Day',
      ],
      liveUrl: 'https://example.com',
    },
    {
      id: 'aura-mobile',
      num: '02',
      title: 'AURA Mobile & Studio',
      subtitle: 'CREATIVE STUDIO & iOS APP',
      category: 'Mobile Apps',
      metric: 'Apple Design Award',
      image: 'https://i.pinimg.com/736x/20/2e/56/202e56956a1b96859a1a37b2cdd0a2cc.jpg',
      tags: ['iOS & Android', 'Flutter UI', 'Figma Tokens', 'Animation'],
      client: 'Aura Digital Labs',
      duration: '8 Weeks Sprint',
      challenge: 'Create a mobile experience for high-profile creators that combines zero-lag video playback with intuitive touch-first gestures.',
      solution: 'Designed a custom mobile design token system and fluid touch micro-interactions that resulted in a 4.9 star App Store rating.',
      results: [
        'Over 500,000 iOS & Android downloads in month one',
        '4.9 Star average App Store rating',
        'Nominated for Apple Design Excellence Award',
      ],
      liveUrl: 'https://example.com',
    },
    {
      id: 'revana-commerce',
      num: '03',
      title: 'REVANA Luxury Commerce',
      subtitle: 'FASHION & HEADLESS E-COMMERCE',
      category: 'Web Apps',
      metric: '$4.8M Revenue Generated',
      image: 'https://i.pinimg.com/736x/0f/ac/d5/0facd5f6729fa68df616c6d5a0165e60.jpg',
      tags: ['Next.js', 'Shopify Storefront', 'GraphQL', 'Tailwind'],
      client: 'Revana Couture Global',
      duration: '5 Weeks Sprint',
      challenge: 'Legacy e-commerce platform suffered from slow load times (4.2s) and high checkout drop-off rates on mobile devices.',
      solution: 'Migrated to a headless Next.js storefront with instant page transitions, dynamic cart drawers, and 100/100 Lighthouse performance.',
      results: [
        '$4.8M generated in sales during launch quarter',
        'Checkout drop-off rate reduced by 44%',
        'Page load time reduced from 4.2s to 0.6s',
      ],
      liveUrl: 'https://example.com',
    },
    {
      id: 'nexus-dashboard',
      num: '04',
      title: 'NEXUS Cloud Infrastructure',
      subtitle: 'ENTERPRISE DATA & MONITORING',
      category: 'Brand & UI/UX',
      metric: '0.4s Instant Load',
      image: 'https://i.pinimg.com/1200x/4c/93/0b/4c930b7176db6669fcd2a32d3a60ff22.jpg',
      tags: ['Design System', 'Data Analytics', 'TypeScript', 'D3.js'],
      client: 'Nexus Data Systems',
      duration: '7 Weeks Sprint',
      challenge: 'Engineers struggled to monitor 10,000+ real-time server nodes due to cluttered legacy dashboard interfaces.',
      solution: 'Re-architected the entire UI/UX design system with dark mode high-contrast telemetry charts and custom keyboard shortcuts.',
      results: [
        'Reduced incident response resolution time by 62%',
        'Adopted by 150+ enterprise engineering teams',
        '99.9% customer satisfaction score',
      ],
      liveUrl: 'https://example.com',
    },
    {
      id: 'lumina-fintech',
      num: '05',
      title: 'LUMINA Fintech & Wallet',
      subtitle: 'DIGITAL BANKING & MOBILE UI',
      category: 'Mobile Apps',
      metric: '100k+ Active Users',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      tags: ['Fintech UI', 'Mobile App', 'Biometric Auth', 'Security'],
      client: 'Lumina Financial Group',
      duration: '8 Weeks Sprint',
      challenge: 'Build a trust-first mobile wallet interface for Gen-Z users with strict compliance, face-ID auth, and real-time transaction alerts.',
      solution: 'Created a sleek minimalist mobile app interface with biometric authentication flow, interactive expense charts, and instant transfers.',
      results: [
        'Surpassed 100,000 active monthly users within 60 days',
        'Zero security incidents reported',
        'Featured in TechCrunch & Forbes Fintech Radar',
      ],
      liveUrl: 'https://example.com',
    },
    {
      id: 'vortex-motion',
      num: '06',
      title: 'VORTEX Interactive 3D',
      subtitle: 'WEBGL 3D BRAND EXPERIENCE',
      category: '3D & Motion',
      metric: 'Awwwards Site of the Day',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      tags: ['Three.js', 'WebGL Shaders', '3D Motion', 'GLSL'],
      client: 'Vortex Creative Studio',
      duration: '4 Weeks Sprint',
      challenge: 'Stand out in the luxury creative market with a jaw-dropping interactive 3D website that runs smoothly on mobile phones.',
      solution: 'Developed custom Three.js particle shaders and GPU-optimized 3D models with fallback 2D canvas states for mobile devices.',
      results: [
        'Awarded Awwwards Site of the Day & FWA of the Month',
        '650,000+ unique web visitors in launch week',
        'Average visitor time on site increased to 4 minutes',
      ],
      liveUrl: 'https://example.com',
    },
  ]

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter)

  return (
    <div className="projects-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="projects-hero-section">
        <div className="projects-hero-container">
          <div className="projects-eyebrow-bar">
            <span className="eyebrow-dash-line" />
            <span className="eyebrow-accent">FEATURED PORTFOLIO</span>
            <span className="eyebrow-separator">—</span>
            <span className="eyebrow-slogan">REAL RESULTS FOR AMBITIOUS BRANDS</span>
          </div>

          <h1 className="projects-main-headline">
            <span className="heading-row-solid-dark">OUR FEATURED</span>
            <span className="heading-row-brand">PROJECTS</span>
          </h1>

          <p className="projects-hero-subtitle">
            Explore our portfolio of high-converting web applications, mobile apps, 3D interactive experiences, and digital brand transformations.
          </p>

          {/* Filter Pills Bar */}
          <div className="projects-filter-pills-bar">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`projects-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROJECTS GRID SECTION */}
      <section className="projects-grid-section">
        <div className="projects-grid-container">
          
          <div className="projects-cards-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                
                {/* Media Image Banner */}
                <div
                  className="project-media-wrap"
                  onClick={() => setSelectedCaseStudy(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-overlay" />

                  {/* Top Badges */}
                  <div className="project-top-badges">
                    <span className="badge-cat">{project.category}</span>
                    <span className="badge-metric">⚡ {project.metric}</span>
                  </div>

                  {/* Quick View Button */}
                  <button type="button" className="project-quick-view-btn">
                    <span>View Case Study</span>
                    <span className="arrow">→</span>
                  </button>
                </div>

                {/* Info Bar */}
                <div className="project-info-bar">
                  <div className="project-heading-group">
                    <span className="project-sub-title">{project.subtitle}</span>
                    <h3
                      className="project-title"
                      onClick={() => setSelectedCaseStudy(project)}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Tech Tags */}
                  <div className="project-tags-flex">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions-row">
                    <button
                      type="button"
                      className="project-btn btn-case-study"
                      onClick={() => setSelectedCaseStudy(project)}
                    >
                      Case Study
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn btn-live-demo"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CASE STUDY POPUP MODAL */}
      {selectedCaseStudy && (
        <div className="project-modal-overlay" onClick={() => setSelectedCaseStudy(null)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close Case Study"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="project-modal-header">
              <span className="modal-cat-tag">{selectedCaseStudy.category} • CASE STUDY</span>
              <h2 className="modal-project-title">{selectedCaseStudy.title}</h2>
              <p className="modal-project-sub">{selectedCaseStudy.subtitle}</p>
            </div>

            {/* Hero Image */}
            <div className="project-modal-media">
              <img src={selectedCaseStudy.image} alt={selectedCaseStudy.title} className="modal-img" />
            </div>

            {/* Modal Body Info */}
            <div className="project-modal-body">
              <div className="modal-meta-grid">
                <div className="meta-item">
                  <span className="meta-lbl">Client</span>
                  <span className="meta-val">{selectedCaseStudy.client}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-lbl">Timeline</span>
                  <span className="meta-val">{selectedCaseStudy.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-lbl">Impact Metric</span>
                  <span className="meta-val highlight">{selectedCaseStudy.metric}</span>
                </div>
              </div>

              {/* Text Blocks */}
              <div className="modal-text-block">
                <h3 className="block-heading">The Challenge</h3>
                <p>{selectedCaseStudy.challenge}</p>
              </div>

              <div className="modal-text-block">
                <h3 className="block-heading">The Strategic Solution</h3>
                <p>{selectedCaseStudy.solution}</p>
              </div>

              <div className="modal-text-block">
                <h3 className="block-heading">Key Results &amp; ROI Impact</h3>
                <ul className="results-list">
                  {selectedCaseStudy.results.map((res, idx) => (
                    <li key={idx}>✓ {res}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="modal-footer-actions">
                <button
                  type="button"
                  className="modal-cta-btn"
                  onClick={() => {
                    setSelectedCaseStudy(null)
                    onOpenContactModal()
                  }}
                >
                  Start a Similar Project With ORCODIX
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. CTA SECTION */}
      <section className="orcodix-cta-section" id="quote">
        <div className="orcodix-cta-container">
          <div className="orcodix-cta-card">
            <div className="orcodix-cta-content">
              <span className="orcodix-cta-tag">// GET STARTED WITH ORCODIX</span>
              <h2 className="orcodix-cta-title">
                Have a Project in Mind?<br />Let&apos;s Build It Together.
              </h2>
              <p className="orcodix-cta-desc">
                Partner with ORCODIX for high-converting web design, 3D interactive visuals, and scalable software engineering.
              </p>
              <button
                type="button"
                className="orcodix-cta-btn"
                onClick={onOpenContactModal}
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAIN SITE FOOTER */}
      <footer className="orcodix-footer">
        <div className="footer-ambient-glow" />

        <div className="orcodix-footer-inner">
          <div className="footer-main-grid">
            <div className="footer-col-brand">
              <a href="#home" className="footer-brand-logo-link" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>
                <img src="/assets/logo.png" alt="ORCODIX" className="footer-logo-img" />
              </a>
              <p className="footer-brand-tagline">
                Maximize your digital infrastructure and enhance organizational efficiency.
              </p>

              <div className="footer-quick-contact">
                <span className="quick-contact-heading">QUICK CONTACT</span>
                <div className="social-buttons-flex">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-square-btn" aria-label="Facebook">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-square-btn" aria-label="Instagram">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-square-btn" aria-label="X (Twitter)">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-square-btn" aria-label="YouTube">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#08090d"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-col-nav">
              <h4 className="footer-nav-title">Quick Links</h4>
              <ul className="footer-menu-links">
                <li><a href="#home" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>Home</a></li>
                <li><a href="#about-page" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>About Us</a></li>
                <li><a href="#services-page" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>Services</a></li>
                <li><a href="#projects-page">Projects</a></li>
                <li><a href="#quote" onClick={(e) => { e.preventDefault(); if (onOpenContactModal) onOpenContactModal(); }}>Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col-nav">
              <h4 className="footer-nav-title">Support</h4>
              <ul className="footer-menu-links">
                <li><a href="#process">FAQs</a></li>
                <li><a href="#quote" onClick={(e) => { e.preventDefault(); if (onOpenContactModal) onOpenContactModal(); }}>Support Center</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Web Development</a></li>
              </ul>
            </div>

            <div className="footer-col-nav footer-col-contact">
              <h4 className="footer-nav-title">Get in Touch With Us</h4>
              <ul className="footer-contact-details">
                <li><span className="contact-label">Phone:</span> <a href="tel:+18005550199">+1 (800) 555-0199</a></li>
                <li><span className="contact-label">Email:</span> <a href="mailto:info@orcodixsolutions.com">info@orcodixsolutions.com</a></li>
                <li><span className="contact-label">Email:</span> <a href="mailto:sales@orcodixsolutions.com">sales@orcodixsolutions.com</a></li>
                <li><span className="contact-label">Address:</span> <span>Global Remote First</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>© {new Date().getFullYear()} ORCODIX. All rights reserved.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-giant-watermark-wrap" aria-hidden="true">
          <span className="giant-watermark-text">ORCODIX</span>
        </div>
      </footer>

    </div>
  )
}

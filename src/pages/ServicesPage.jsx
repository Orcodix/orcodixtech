import React, { useState } from 'react'

export default function ServicesPage({ onNavigateHome, onOpenContactModal }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filterCategories = [
    'All',
    'UI/UX Design',
    'Web Development',
    'Mobile App Design',
    'Custom Software Design',
  ]

  const servicesData = [
    {
      id: 'uiux-design',
      category: 'UI/UX Design',
      title: 'UI/UX Design',
      subtitle: 'INTERACTIVE & USER-CENTERED DESIGN',
      desc: 'Crafting user-centered interfaces, wireframes, and interactive design systems that maximize user retention, engagement, and conversion.',
      deliverables: ['Design Systems', 'User Journey Mapping', 'Figma Wireframing', 'Interactive Prototypes', 'Micro-Animations'],
      techStack: ['Figma', 'Framer', 'Adobe CC', 'Protopie', 'Storybook'],
      visualType: 'uiux',
    },
    {
      id: 'web-development',
      category: 'Web Development',
      title: 'Web Development',
      subtitle: 'HIGH-PERFORMANCE WEB APPLICATIONS',
      desc: 'Building ultra-fast, responsive websites and web applications with modern tech stacks, 100/100 Google Lighthouse speed, and clean code.',
      deliverables: ['Custom Web Apps', 'E-Commerce Portals', 'WebGL 3D Motion', 'SEO Architecture', 'Speed Audit 100/100'],
      techStack: ['React 19', 'Next.js', 'Vite', 'Three.js', 'Tailwind CSS'],
      visualType: 'webdev',
    },
    {
      id: 'mobile-app-design',
      category: 'Mobile App Design',
      title: 'Mobile App Design',
      subtitle: 'iOS & ANDROID EXPERIENCES',
      desc: 'Designing seamless iOS and Android mobile app experiences optimized for touch gestures, accessibility, dark mode, and high app store conversion.',
      deliverables: ['iOS App Design', 'Android Material UI', 'Mobile Prototypes', 'App Store Graphics', 'Design Tokens'],
      techStack: ['Flutter UI', 'React Native', 'Swift UI', 'Kotlin', 'Figma Mobile'],
      visualType: 'mobile',
    },
    {
      id: 'custom-software-design',
      category: 'Custom Software Design',
      title: 'Custom Software Design',
      subtitle: 'ENTERPRISE ARCHITECTURE & APIS',
      desc: 'Architecting tailor-made software solutions, scalable cloud APIs, automated enterprise workflows, and robust security infrastructure.',
      deliverables: ['Custom REST/GraphQL APIs', 'Database Architecture', 'Microservices', 'Cloud Infrastructure', '24/7 Monitoring'],
      techStack: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS / GCP'],
      visualType: 'software',
    },
  ]

  const workflowSteps = [
    {
      num: '01',
      title: 'Listen & Understand',
      desc: 'We start with a quick conversation about your vision and goals. No buzzwords — just clear alignment on what needs to be built.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff542e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Design & Test Ideas',
      desc: 'We craft interactive Figma prototypes so you can feel and test the user experience before a single line of code is written.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff542e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Build & Refine',
      desc: 'Our engineers build your product using fast, clean code. You get live weekly preview links to watch progress in real-time.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff542e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Launch & Support',
      desc: 'We test on all screens, optimize performance, and handle your deployment smoothly so you can focus on scaling your business.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff542e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ]

  const filteredServices = activeFilter === 'All'
    ? servicesData
    : servicesData.filter((svc) => svc.category === activeFilter)

  return (
    <div className="services-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="services-hero-section">
        <div className="services-hero-container">
          <div className="services-eyebrow-bar">
            <span className="eyebrow-dash-line" />
            <span className="eyebrow-accent">OUR EXPERTISE</span>
            <span className="eyebrow-separator">—</span>
            <span className="eyebrow-slogan">ELEVATE YOUR DIGITAL PRESENCE</span>
          </div>

          <h1 className="services-main-headline">
            <span className="heading-row-solid-dark">OUR CORE</span>
            <span className="heading-row-brand">SERVICES</span>
          </h1>

          <p className="services-hero-subtitle">
            Empowering modern businesses with UI/UX design, web development, mobile app experiences, and custom software architecture.
          </p>

          {/* Filter Pills Bar */}
          <div className="services-filter-pills-bar">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`services-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES CARDS GRID SECTION */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          
          <div className="services-cards-grid services-cards-grid-4">

            {filteredServices.map((svc) => (
              <div key={svc.id} className="svc-reference-card">
                <div className="svc-card-visual-area">
                  
                  {/* 1. UI/UX DESIGN VISUAL: Interactive Prototype Canvas */}
                  {svc.visualType === 'uiux' && (
                    <div className="svc-mindmap-wrap">
                      <svg className="mindmap-lines-svg" viewBox="0 0 300 160">
                        <line x1="80" y1="35" x2="150" y2="80" stroke="#e2e8f0" strokeWidth="1.5" />
                        <line x1="220" y1="35" x2="150" y2="80" stroke="#e2e8f0" strokeWidth="1.5" />
                        <line x1="60" y1="80" x2="150" y2="80" stroke="#e2e8f0" strokeWidth="1.5" />
                        <line x1="240" y1="80" x2="150" y2="80" stroke="#e2e8f0" strokeWidth="1.5" />
                        <line x1="90" y1="125" x2="150" y2="80" stroke="#e2e8f0" strokeWidth="1.5" />
                        <line x1="210" y1="125" x2="150" y2="80" stroke="#e2e8f0" strokeWidth="1.5" />
                      </svg>

                      <div className="mindmap-node node-top-left">Wireframes</div>
                      <div className="mindmap-node node-top-right">Prototypes</div>
                      <div className="mindmap-node node-mid-left">User Testing</div>
                      
                      <div className="mindmap-center-brand">
                        <span>UI / UX</span>
                      </div>

                      <div className="mindmap-node node-mid-right">Design System</div>
                      <div className="mindmap-node node-bot-left">Figma</div>
                      <div className="mindmap-node node-bot-right">Research</div>
                    </div>
                  )}

                  {/* 2. WEB DEVELOPMENT VISUAL: Code Window */}
                  {svc.visualType === 'webdev' && (
                    <div className="svc-code-wrap">
                      <div className="code-editor-box">
                        <div className="code-header">
                          <span className="code-tab active">&lt;WebEngine.tsx /&gt;</span>
                          <span className="code-status-pill">FAST 100</span>
                        </div>
                        <div className="code-lines-body">
                          <div className="code-line"><span className="c-blue">const</span> <span className="c-yellow">WebPlatform</span> = () =&gt; &#123;</div>
                          <div className="code-line indent"><span className="c-blue">return</span> &lt;<span className="c-green">ResponsiveApp</span> /&gt;</div>
                          <div className="code-line">&#125;</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. MOBILE APP DESIGN VISUAL: Phone Frame Mockup */}
                  {svc.visualType === 'mobile' && (
                    <div className="svc-mobile-wrap">
                      <div className="mobile-phone-frame">
                        <div className="phone-top-notch" />
                        <div className="phone-screen-content">
                          <div className="phone-app-header">
                            <span className="app-dot" />
                            <span className="app-title">Mobile App</span>
                          </div>
                          <div className="phone-widget-box">
                            <div className="widget-row active-widget">
                              <span className="widget-icon">📱</span>
                              <div className="widget-lines">
                                <span className="w-line w-long" />
                                <span className="w-line w-short" />
                              </div>
                            </div>
                            <div className="widget-row">
                              <span className="widget-icon">✨</span>
                              <div className="widget-lines">
                                <span className="w-line w-medium" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. CUSTOM SOFTWARE DESIGN VISUAL: Architecture Hub & Spoke */}
                  {svc.visualType === 'software' && (
                    <div className="svc-hubspoke-wrap">
                      <svg className="hubspoke-lines-svg" viewBox="0 0 240 180">
                        <line x1="120" y1="90" x2="60" y2="40" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                        <line x1="120" y1="90" x2="180" y2="40" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                        <line x1="120" y1="90" x2="40" y2="90" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                        <line x1="120" y1="90" x2="200" y2="90" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                        <line x1="120" y1="90" x2="60" y2="140" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                        <line x1="120" y1="90" x2="180" y2="140" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
                      </svg>

                      <div className="spoke-icon icon-top-left" title="Cloud API">☁️</div>
                      <div className="spoke-icon icon-top-right" title="Database">⚡</div>
                      <div className="spoke-icon icon-mid-left" title="Security">🔒</div>

                      <div className="spoke-center-hub">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="8" rx="2" />
                          <rect x="2" y="14" width="20" height="8" rx="2" />
                          <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
                          <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
                        </svg>
                      </div>

                      <div className="spoke-icon icon-mid-right" title="Microservices">⚙️</div>
                      <div className="spoke-icon icon-bot-left" title="Analytics">📊</div>
                      <div className="spoke-icon icon-bot-right" title="Scalability">🚀</div>
                    </div>
                  )}

                </div>

                <div className="svc-card-info-area">
                  <h3 className="svc-card-title">{svc.title}</h3>
                  <p className="svc-card-desc">{svc.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 3. SERVICE WORKFLOW / PROCESS SECTION */}
      <section className="svc-process-section">
        <div className="svc-process-container">
          
          <div className="svc-section-header-center">
            <span className="svc-small-tag">HOW WE WORK WITH YOU</span>
            <h2 className="svc-section-title">Simple, Transparent &amp; Human.</h2>
            <p className="svc-section-sub">
              We cut out agency fluff. Direct collaboration, clear weekly progress, and digital products built for real growth.
            </p>
          </div>

          <div className="svc-process-grid">
            {workflowSteps.map((step) => (
              <div key={step.num} className="svc-process-card">
                <div className="process-card-top">
                  <div className="process-icon-box">{step.icon}</div>
                  <span className="process-num-badge">{step.num}</span>
                </div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="orcodix-cta-section" id="quote">
        <div className="orcodix-cta-container">
          <div className="orcodix-cta-card">
            <div className="orcodix-cta-content">
              <span className="orcodix-cta-tag">// GET STARTED WITH ORCODIX</span>
              <h2 className="orcodix-cta-title">
                Ready to Build Your<br />Next Big Launch?
              </h2>
              <p className="orcodix-cta-desc">
                Partner with ORCODIX for UI/UX design, web development, mobile app experiences, and custom software architecture.
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

      {/* 6. MAIN SITE FOOTER */}
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
                <li><a href="#services-page">Services</a></li>
                <li><a href="#work" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>Projects</a></li>
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

import React from 'react'

export default function AboutPage({ onNavigateHome, onOpenContactModal }) {
  return (
    <div className="about-inner-page-wrapper">
      {/* HERO SECTION (EXACT DESIGN MATCHING USER REFERENCE IMAGE ONLY) */}
      <section className="about-exact-hero-section">
        <div className="about-exact-container">
          
          {/* Top Header Row: Split 2 Columns */}
          <div className="about-exact-header-grid">
            
            {/* Left Column: Eyebrow + Huge Title */}
            <div className="about-exact-left-col">
              <span className="about-exact-eyebrow">Who we are</span>
              <h1 className="about-exact-title">ABOUT US</h1>
            </div>

            {/* Right Column: Avatars + Stars + Testimonial Quote */}
            <div className="about-exact-right-col">
              <div className="about-exact-proof-row">
                {/* 3 Overlapping Avatars */}
                <div className="about-exact-avatar-group">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="User 1"
                    className="about-exact-avatar"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="User 2"
                    className="about-exact-avatar"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                    alt="User 3"
                    className="about-exact-avatar"
                  />
                </div>

                {/* 5 Magenta / Pink Stars */}
                <div className="about-exact-stars" aria-label="5 stars rating">
                  ★★★★★
                </div>
              </div>

              {/* Quote Text */}
              <p className="about-exact-quote-text">
                &ldquo;Working with Orvian completely transformed our brand. Their strategic thinking, creativity, and attention to detail helped us launch with confidence and stand out in a competitive market.&rdquo;
              </p>
            </div>

          </div>

          {/* Bottom Hero Banner: Full Width Team Image */}
          <div className="about-exact-image-wrapper">
            <img
              src="/assets/about_us_team_hero.jpg"
              alt="Orcodix / Orvian Team Collaborating in Modern Office"
              className="about-exact-hero-img"
              onError={(e) => {
                // Fallback if local asset is loading
                e.target.src = '/assets/about-team-hero.jpg'
              }}
            />
          </div>

        </div>
      </section>

      {/* HELPING STARTUPS SECTION */}
      <section className="about-helping-section">
        <div className="about-helping-container">

          {/* Heading */}
          <div className="about-helping-heading-wrap">
            <h2 className="about-helping-title">
              Helping <em>Startups, And Agencies</em><br />
              Execute their design
            </h2>
            <p className="about-helping-subtitle">
              At Orvian, we believe every successful business begins with a<br />
              remarkable brand. From strategy and visual identity.
            </p>
          </div>

          {/* Service Tags Cloud */}
          <div className="about-tags-section">
            <p className="about-tags-label">What are you looking for ?</p>
            <div className="about-tags-cloud">
              <span className="about-service-tag tag-pos-1">BRAND STRATEGY</span>
              <span className="about-service-tag tag-pos-2">VISUAL IDENTITY</span>
              <span className="about-service-tag tag-pos-3">UX DESIGN</span>
              <span className="about-service-tag tag-pos-4">BRAND GUIDELINES</span>
              <span className="about-service-tag tag-pos-5">SAAS DESIGN</span>
              <span className="about-service-tag tag-pos-6">WEBFLOW WEBSITE</span>
              <span className="about-service-tag tag-pos-7">BRAND DESIGN</span>
              <span className="about-service-tag tag-pos-8">UI DESIGN</span>
              <span className="about-service-tag tag-pos-9">Creative Direction</span>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICE CARDS + VIDEO BANNER SECTION */}
      <section className="about-showcase-section">
        <div className="about-showcase-container">

          {/* 3-Column Service Cards */}
          <div className="about-service-cards-grid">

            <div className="about-svc-card">
              <div className="about-svc-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=700&q=80"
                  alt="Brand Identity"
                  className="about-svc-img"
                />
              </div>
              <h3 className="about-svc-title">Brand Identity</h3>
              <p className="about-svc-desc">
                Helping emerging businesses establish a distinctive visual identity that connects with
                their audience and supports long-term growth.
              </p>
            </div>

            <div className="about-svc-card">
              <div className="about-svc-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80"
                  alt="Digital Experience"
                  className="about-svc-img"
                />
              </div>
              <h3 className="about-svc-title">Digital Experience</h3>
              <p className="about-svc-desc">
                Creating intuitive websites and digital products that combine exceptional design with
                seamless user experiences.
              </p>
            </div>

            <div className="about-svc-card">
              <div className="about-svc-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
                  alt="Development"
                  className="about-svc-img"
                />
              </div>
              <h3 className="about-svc-title about-svc-title--caps">DEVELOPMENT</h3>
              <p className="about-svc-desc">
                Developing bold creative concepts that strengthen brand awareness and inspire
                meaningful engagement.
              </p>
            </div>

          </div>

          {/* Full-Width Video / Brand Banner */}
          <div className="about-video-banner">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
              alt="Team meeting — Every great brand tells a story"
              className="about-video-bg-img"
            />
            {/* Dark overlay gradient */}
            <div className="about-video-overlay" />

            {/* Top-left badge */}
            <div className="about-video-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>

            {/* Centre Play Button */}
            <button className="about-video-play-btn" aria-label="Play brand story video">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>

            {/* Bottom-left caption */}
            <p className="about-video-caption">Every great brand tells a story</p>
          </div>

        </div>
      </section>

      {/* 4-COLUMN PROCESS STEPS SECTION */}
      <section className="about-process-section">
        <div className="about-process-container">
          <div className="about-process-grid">

            {/* Card 1 */}
            <div className="about-process-card">
              <div className="about-process-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </div>
              <h3 className="about-process-title">Research &amp;<br />Discovery</h3>
              <p className="about-process-desc">We uncover your goals, audience, and market insights to build a strong strategic foundation.</p>
            </div>

            {/* Card 2 */}
            <div className="about-process-card">
              <div className="about-process-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <h3 className="about-process-title">Strategy &amp;<br />Direction</h3>
              <p className="about-process-desc">We define your positioning, messaging, and creative direction with clarity and purpose.</p>
            </div>

            {/* Card 3 */}
            <div className="about-process-card">
              <div className="about-process-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <polyline points="7 8 10 11 7 14" />
                  <line x1="13" y1="14" x2="17" y2="14" />
                </svg>
              </div>
              <h3 className="about-process-title">Design &amp;<br />Development</h3>
              <p className="about-process-desc">We design compelling brand identities and digital experiences that connect and inspire.</p>
            </div>

            {/* Card 4 */}
            <div className="about-process-card">
              <div className="about-process-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h3 className="about-process-title">Launch &amp;<br />Growth</h3>
              <p className="about-process-desc">We deliver polished solutions and support your brand as it continues to grow.</p>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES / PRINCIPLES SECTION */}
      <section className="about-principles-section">
        <div className="about-principles-container">

          {/* Left Column: Label + Heading */}
          <div className="about-principles-left">
            <span className="about-principles-eyebrow">Our Values</span>
            <h2 className="about-principles-title">
              The <em>Principles Behind</em><br />
              Everything we create
            </h2>
          </div>

          {/* Right Column: Values List */}
          <div className="about-principles-right">

            <div className="about-principle-item">
              <div className="about-principle-header">
                <span className="about-principle-star">✦</span>
                <h3 className="about-principle-name">Strategic Thinking</h3>
              </div>
              <p className="about-principle-desc">Every creative decision starts with research, business goals, and a clear understanding of your audience.</p>
            </div>

            <div className="about-principle-item">
              <div className="about-principle-header">
                <span className="about-principle-star">✦</span>
                <h3 className="about-principle-name">Creative Excellence</h3>
              </div>
              <p className="about-principle-desc">We obsess over details to create timeless brands that remain relevant for years to come.</p>
            </div>

            <div className="about-principle-item">
              <div className="about-principle-header">
                <span className="about-principle-star">✦</span>
                <h3 className="about-principle-name">Honest Collaboration</h3>
              </div>
              <p className="about-principle-desc">Great work is built on trust, transparency, and close partnerships with every client.</p>
            </div>

            <div className="about-principle-item">
              <div className="about-principle-header">
                <span className="about-principle-star">✦</span>
                <h3 className="about-principle-name">Continuous Innovation</h3>
              </div>
              <p className="about-principle-desc">We embrace new technologies and creative thinking to deliver exceptional experiences.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. CTA SECTION (MATCHING HOME PAGE) */}
      <section className="orcodix-cta-section" id="quote">
        <div className="orcodix-cta-container">
          <div className="orcodix-cta-card">
            <div className="orcodix-cta-content">
              <span className="orcodix-cta-tag">// GET STARTED WITH ORCODIX</span>
              <h2 className="orcodix-cta-title">
                Ready to Build Your<br />Next Big Launch?
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

      {/* 9. MAIN SITE FOOTER (MATCHING HOME PAGE) */}
      <footer className="orcodix-footer">
        <div className="footer-ambient-glow" />

        <div className="orcodix-footer-inner">
          <div className="footer-main-grid">
            {/* COL 1: BRAND LOGO + DESC + QUICK CONTACT */}
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

            {/* COL 2: QUICK LINKS */}
            <div className="footer-col-nav">
              <h4 className="footer-nav-title">Quick Links</h4>
              <ul className="footer-menu-links">
                <li><a href="#home" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>Home</a></li>
                <li><a href="#about-page">About Us</a></li>
                <li><a href="#services" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>Services</a></li>
                <li><a href="#work" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>Projects</a></li>
                <li><a href="#quote" onClick={(e) => { e.preventDefault(); if (onOpenContactModal) onOpenContactModal(); }}>Contact Us</a></li>
              </ul>
            </div>

            {/* COL 3: SUPPORT */}
            <div className="footer-col-nav">
              <h4 className="footer-nav-title">Support</h4>
              <ul className="footer-menu-links">
                <li><a href="#process">FAQs</a></li>
                <li><a href="#quote" onClick={(e) => { e.preventDefault(); if (onOpenContactModal) onOpenContactModal(); }}>Support Center</a></li>
                <li><a href="#services">3D Motion</a></li>
                <li><a href="#services">Brand Identity</a></li>
              </ul>
            </div>

            {/* COL 4: GET IN TOUCH WITH US */}
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

        {/* GIANT BRAND WATERMARK AT BOTTOM */}
        <div className="footer-giant-watermark-wrap" aria-hidden="true">
          <span className="giant-watermark-text">ORCODIX</span>
        </div>
      </footer>

    </div>
  )
}


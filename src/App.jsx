import React, { useState, useEffect, useRef } from 'react'
import ParticleSphere from './components/ParticleSphere'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import './App.css'

function AnimatedCounter({ target, prefix = '', suffix = '', decimals = 0, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime = null

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            const currentCount = easeProgress * target
            setCount(currentCount)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [hasAnimated, target, duration])

  return (
    <span ref={ref} className="stat-number-val">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const serviceCardsData = [
  {
    id: 'web-design',
    title: 'WEB DESIGN',
    desc: 'Designing modern, responsive websites that are visually striking and optimized.',
    link: '#services',
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="service-iso-icon">
        <path d="M12 11L36 5L42 17L18 23L12 11Z" />
        <path d="M12 11V33L36 39V17" />
        <path d="M42 17V39L36 39" />
        <path d="M18 23V35" />
        <line x1="15" y1="16" x2="17" y2="15.5" strokeWidth="2" />
        <line x1="21" y1="14.5" x2="27" y2="13" strokeWidth="2" />
        <rect x="22" y="24" width="10" height="9" strokeWidth="1.4" />
        <line x1="14" y1="26" x2="16" y2="26" strokeWidth="1.4" />
        <line x1="14" y1="29" x2="16" y2="29" strokeWidth="1.4" />
        <line x1="14" y1="32" x2="16" y2="32" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: 'development',
    title: 'DEVELOPMENT',
    desc: 'Bringing designs to life with clean, fast, and scalable code built for performance.',
    link: '#services',
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-iso-icon">
        <path d="M16 12L8 24L16 36" />
        <path d="M19 10L11 22L19 34" stroke="#ffffff" strokeWidth="1.2" opacity="0.4" />
        <path d="M28 8L20 40" strokeWidth="2.2" />
        <path d="M32 12L40 24L32 36" />
        <path d="M35 10L43 22L35 34" stroke="#ffffff" strokeWidth="1.2" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'motion',
    title: 'MOTION',
    desc: 'Infusing motion and narrative through cinematic visuals and animation.',
    link: '#services',
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="service-iso-icon">
        <path d="M8 18L24 10L40 18V32L24 40L8 32V18Z" />
        <path d="M24 10V40" />
        <path d="M8 18L24 26L40 18" />
        <path d="M32 21L44 15V27L32 33V21Z" />
        <circle cx="38" cy="21" r="3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    title: 'E-COMMERCE',
    desc: 'Building high-converting digital storefronts and scalable e-commerce systems.',
    link: '#services',
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="service-iso-icon">
        <path d="M10 14L24 6L38 14V34L24 42L10 34V14Z" />
        <path d="M24 6V42" />
        <path d="M10 14L24 22L38 14" />
        <path d="M18 25L24 29L30 25" strokeWidth="1.6" />
        <path d="M16 10L32 19" opacity="0.4" />
      </svg>
    ),
  },
]

const selectedWorkData = [
  {
    id: 'case-ai',
    num: '01',
    title: 'CASE',
    category: 'AI Platform & Web App',
    image: 'https://i.pinimg.com/1200x/fe/82/6c/fe826cbb2c342cd30c2567796282302b.jpg',
    caseStudyLink: '#work',
    livePreviewLink: '#work',
  },
  {
    id: 'aura',
    num: '04',
    title: 'AURA',
    category: 'Studio Website & Mobile App',
    image: 'https://i.pinimg.com/736x/20/2e/56/202e56956a1b96859a1a37b2cdd0a2cc.jpg',
    caseStudyLink: '#work',
    livePreviewLink: '#work',
  },
  {
    id: 'revana',
    num: '01',
    title: 'REVANA',
    category: 'Fashion E-Commerce',
    image: 'https://i.pinimg.com/736x/0f/ac/d5/0facd5f6729fa68df616c6d5a0165e60.jpg',
    caseStudyLink: '#work',
    livePreviewLink: '#work',
  },
  {
    id: 'nexus',
    num: '02',
    title: 'NEXUS',
    category: 'Modern Web Application',
    image: 'https://i.pinimg.com/1200x/4c/93/0b/4c930b7176db6669fcd2a32d3a60ff22.jpg',
    caseStudyLink: '#work',
    livePreviewLink: '#work',
  },
]

const statsData = [
  { target: 45, prefix: '', suffix: '+', decimals: 0, label: 'Digital Products Launched' },
  { target: 99.4, prefix: '', suffix: '%', decimals: 1, label: 'Client Satisfaction Rate' },
  { target: 120, prefix: '$', suffix: 'M+', decimals: 0, label: 'Client Revenue Generated' },
  { target: 14, prefix: '', suffix: '', decimals: 0, label: 'Design & Tech Awards' },
]

const whyChooseCardsData = [
  {
    num: '01',
    theme: 'light',
    title: 'Brand First Approach',
    desc: 'We understand your brand, audience and goals before we design or build.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#ff542e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.5 4.5L23.5 8.5L10.5 21.5H6.5V17.5L19.5 4.5Z" />
        <path d="M15.5 8.5L19.5 12.5" />
        <circle cx="11.5" cy="15.5" r="1.5" fill="#ff542e" />
      </svg>
    ),
  },
  {
    num: '02',
    theme: 'dark',
    title: 'Design + Development',
    desc: 'Unified design and development under one team for better results.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#ff542e" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 10 3 14 8 18" />
        <polyline points="20 10 25 14 20 18" />
        <line x1="16" y1="7" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: '03',
    theme: 'light',
    title: 'Clear Communication',
    desc: 'Transparent process, regular updates and defined milestones.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#ff542e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="14" width="4.5" height="9" rx="1.5" />
        <rect x="11.75" y="6" width="4.5" height="17" rx="1.5" />
        <rect x="18.5" y="11" width="4.5" height="12" rx="1.5" />
      </svg>
    ),
  },
  {
    num: '04',
    theme: 'dark',
    title: 'Long-Term Partnership',
    desc: 'Ongoing support to help your business grow beyond launch.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#ff542e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 19.5C3.5 21 3 24 3 24S6 23.5 7.5 21.5C8.5 20.5 8.5 19 7.5 18C6.5 17 5 17 4.5 18.5" />
        <path d="M14 13L10.5 9.5C11.5 8 13.5 5 19 3C21 3 24 5 24 8C22 13.5 19 15.5 17.5 16.5L14 13Z" />
        <circle cx="17.5" cy="8.5" r="1.5" fill="#ff542e" />
        <path d="M10.5 9.5L5 11.5L8.5 15" />
        <path d="M14 13L16 18.5L12.5 15" />
      </svg>
    ),
  },
]

const processStepsData = [
  {
    step: '01',
    phase: 'PHASE 01',
    duration: 'WEEK 1 – 2',
    title: 'Discovery & Strategy',
    desc: 'We analyze your brand vision, target market, and business goals to architect an actionable strategic roadmap.',
    tags: ['Market Research', 'UX Strategy', 'Brand Architecture'],
    iconImg: '/assets/process_3d_discovery.jpg',
  },
  {
    step: '02',
    phase: 'PHASE 02',
    duration: 'WEEK 2 – 4',
    title: 'UI/UX & Interactive Design',
    desc: 'Crafting high-fidelity visual identities, interactive prototypes, and design systems built to captivate and convert.',
    tags: ['Design Systems', '3D Motion', 'Prototyping'],
    iconImg: '/assets/process_3d_design.jpg',
  },
  {
    step: '03',
    phase: 'PHASE 03',
    duration: 'WEEK 4 – 6',
    title: 'Engineering & Motion',
    desc: 'Bringing designs to life with clean, fast code, WebGL canvas shaders, fluid motion, and scalable infrastructure.',
    tags: ['React & Vite', 'WebGL Animations', 'Scalable Code'],
    iconImg: '/assets/process_3d_code.jpg',
  },
  {
    step: '04',
    phase: 'PHASE 04',
    duration: 'LAUNCH & BEYOND',
    title: 'QA, Launch & Growth',
    desc: 'Rigorous performance auditing, SEO optimization, and smooth deployment followed by 24/7 post-launch support.',
    tags: ['Speed Audit', 'SEO & Analytics', '24/7 Support'],
    iconImg: '/assets/process_3d_launch.jpg',
  }
]

const testimonialsData = [
  {
    quote: "ORCODIX completely transformed how our brand is perceived online. The attention to detail, motion design, and speed of delivery was unlike anything we had experienced before.",
    author: "Alex Monroe",
    role: "CEO, Apex Digital",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    platform: "linkedin",
    date: "10/14/2024",
    featured: false
  },
  {
    quote: "Partnering with ORCODIX was a game-changer for us. They redesigned our entire platform — the result was a 210% boost in user engagement and a design that genuinely wows every visitor.",
    author: "Sophia Reeves",
    role: "Head of Product, Lumina SaaS",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    platform: "twitter",
    date: "09/30/2024",
    featured: true
  },
  {
    quote: "We launched our e-commerce store with ORCODIX and hit record sales in the first month. Their full-stack execution is world-class and the brand identity they crafted is simply stunning.",
    author: "David Vance",
    role: "Founder, Revana Commerce",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    platform: "linkedin",
    date: "11/02/2024",
    featured: false
  },
  {
    quote: "From brand identity to full-stack development, ORCODIX handled everything flawlessly. Our website now converts 3x better and the design gets compliments from every client we show it to.",
    author: "Priya Nair",
    role: "Marketing Director, Nexora Labs",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    platform: "twitter",
    date: "12/08/2024",
    featured: false
  }
]

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [activeNav, setActiveNav] = useState('Home')
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Design', budget: '$10k - $25k', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const navLinks = [
    { label: 'Home', page: 'home', href: '#home' },
    { label: 'About Us', page: 'about', href: '#about-page' },
    { label: 'Services', page: 'services', href: '#services-page' },
    { label: 'Projects', page: 'projects', href: '#projects-page' },
    { label: 'Case Studies', page: 'home', href: '#work' },
    { label: 'Why Us', page: 'home', href: '#about' },
    { label: 'Our Process', page: 'home', href: '#process' },
    { label: 'Contact', page: 'home', href: '#quote' },
  ]

  const handleNavClick = (item, e) => {
    if (e) e.preventDefault()
    setActiveNav(item.label)

    if (item.page === 'about') {
      setCurrentPage('about')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (item.page === 'services') {
      setCurrentPage('services')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (item.page === 'projects') {
      setCurrentPage('projects')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home')
        setTimeout(() => {
          const target = document.querySelector(item.href)
          if (target) target.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const target = document.querySelector(item.href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setFormSubmitted(true)
    }
  }

  return (
    <div className="app-viewport">
      {/* Floating Glass Pill Navbar (Sticky across all pages) */}
      <header className="hero-nav-bar glass-pill-nav">
        <div className="nav-left">
          <a
            href="#home"
            className="brand-logo-wrap"
            aria-label="ORCODIX"
            onClick={(e) => handleNavClick({ label: 'Home', page: 'home', href: '#home' }, e)}
          >
            <img src="/assets/logo.png" alt="ORCODIX" className="brand-logo-img" />
          </a>
        </div>

        <nav className="nav-center-menu">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-menu-link ${activeNav === item.label ? 'active' : ''}`}
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button
            type="button"
            onClick={() => setIsContactModalOpen(true)}
            className="btn-get-estimate pill-btn"
          >
            <span>Contact Us</span>
          </button>
        </div>
      </header>

      {/* RENDER CURRENT PAGE */}
      {currentPage === 'about' ? (
        <AboutPage
          onNavigateHome={() => {
            setCurrentPage('home')
            setActiveNav('Home')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      ) : currentPage === 'services' ? (
        <ServicesPage
          onNavigateHome={() => {
            setCurrentPage('home')
            setActiveNav('Home')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      ) : currentPage === 'projects' ? (
        <ProjectsPage
          onNavigateHome={() => {
            setCurrentPage('home')
            setActiveNav('Home')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      ) : (
        <>
          {/* 1. HERO SECTION */}
          <div className="hero-viewport-card" id="home">
            
            {/* Atmospheric Deep Black & Orange Ambient Layer */}
            <div className="hero-atmosphere-bg" aria-hidden="true">
              <div className="bg-subtle-grid" />
              <div className="bg-glow-orange-right" />
              <div className="bg-glow-orange-top" />
              <div className="bg-vignette" />
            </div>

            {/* Hero Main Body: 2 Columns */}
            <div className="hero-grid-body">

          {/* Left Column: Typography & CTAs */}
          <div className="hero-left-column">
            {/* Top Eyebrow Bar */}
            <div className="hero-eyebrow-bar">
              <span className="eyebrow-dash-line" />
              <span className="eyebrow-accent">LATE NIGHT</span>
              <span className="eyebrow-separator">—</span>
              <span className="eyebrow-slogan">THE BEST BRANDS LAUNCH WHEN NO ONE’S WATCHING</span>
            </div>

            {/* 3-Row Signature Headline */}
            <h1 className="hero-heading-showcase">
              <span className="heading-row-outline">WE BRING</span>
              <span className="heading-row-brand">GROWTH</span>
              <span className="heading-row-solid">TO BRANDS</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="hero-description-showcase">
              We don’t just do marketing — we redefine it.<br />
              AI strategies. Licensed experts. Real results.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-showcase">
              <a href="#quote" className="btn-hero-brand-pill">
                <span>START YOUR PROJECT</span>
                <span className="btn-arrow-right">→</span>
              </a>

              <a href="#work" className="btn-hero-link-underline">
                <span>SEE WORK</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Particle Sphere */}
          <div className="hero-right-column">
            <ParticleSphere />
          </div>
        </div>

        {/* Hero Bottom Bar Info */}
        <footer className="hero-bottom-footer">
          <div className="footer-scroll-hint">
            <span>Scroll for more</span>
            <span className="footer-down-arrow">↓</span>
          </div>

          <div className="footer-est">
            <span>Est. In 2026</span>
          </div>
        </footer>

      </div>

      {/* 2. SERVICES SECTION */}
      <section className="showcase-capabilities-section" id="services">
        <div className="dark-services-section-wrap">
          <div className="dark-services-grid">
            {serviceCardsData.map((service) => (
              <div key={service.id} className="dark-service-card">
                <div className="dark-service-icon-wrap">
                  {service.icon}
                </div>
                <h3 className="dark-service-title">{service.title}</h3>
                <p className="dark-service-desc">{service.desc}</p>
                <a href={service.link} className="dark-service-learn-more">
                  <span>LEARN MORE</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK SECTION */}
      <section className="selected-work-section" id="work">
        <div className="selected-work-header-wrap">
          <h2 className="selected-work-main-title">Selected work</h2>
        </div>

        <div className="selected-work-marquee-viewport">
          <div className="selected-work-marquee-track">
            {/* Group 1 */}
            <div className="selected-work-marquee-group">
              {[...selectedWorkData, ...selectedWorkData].map((item, idx) => (
                <div key={`g1-${item.id}-${idx}`} className="work-showcase-card">
                  <div className="work-card-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="work-card-img"
                      loading="lazy"
                    />
                    <div className="work-card-overlay" />
                  </div>

                  <div className="work-card-bottom-bar">
                    <div className="work-card-info">
                      <span className="work-item-num">{item.num} —</span>
                      <h3 className="work-item-title">{item.title}</h3>
                    </div>

                    <div className="work-card-actions">
                      <a href={item.caseStudyLink} className="work-action-btn btn-case-study">
                        <span>Case Study</span>
                      </a>
                      <a href={item.livePreviewLink} className="work-action-btn btn-live-preview">
                        <span>Live Preview</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Group 2 */}
            <div className="selected-work-marquee-group" aria-hidden="true">
              {[...selectedWorkData, ...selectedWorkData].map((item, idx) => (
                <div key={`g2-${item.id}-${idx}`} className="work-showcase-card">
                  <div className="work-card-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="work-card-img"
                      loading="lazy"
                    />
                    <div className="work-card-overlay" />
                  </div>

                  <div className="work-card-bottom-bar">
                    <div className="work-card-info">
                      <span className="work-item-num">{item.num} —</span>
                      <h3 className="work-item-title">{item.title}</h3>
                    </div>

                    <div className="work-card-actions">
                      <a href={item.caseStudyLink} className="work-action-btn btn-case-study">
                        <span>Case Study</span>
                      </a>
                      <a href={item.livePreviewLink} className="work-action-btn btn-live-preview">
                        <span>Live Preview</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS & IMPACT SECTION */}
      <section className="impact-stats-section">
        <div className="impact-stats-container">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card-item">
              <AnimatedCounter
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
              <span className="stat-label-text">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY BRANDS CHOOSE ORCODIX SECTION */}
      <section className="why-choose-brands-section" id="about">
        <div className="why-choose-bg-wrap" aria-hidden="true">
          <div className="why-bg-grid" />
          <div className="why-bg-ambient-glow" />
          
          <div className="why-3d-torus-left">
            <svg width="420" height="420" viewBox="0 0 420 420" fill="none" className="torus-svg">
              <defs>
                <radialGradient id="torusGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="25%" stopColor="#ffa07a" stopOpacity="0.75" />
                  <stop offset="55%" stopColor="#ff542e" stopOpacity="0.85" />
                  <stop offset="85%" stopColor="#e03210" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
                </radialGradient>
                <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <circle cx="210" cy="210" r="150" stroke="url(#torusGrad)" strokeWidth="48" opacity="0.88" filter="url(#glassBlur)" />
              <circle cx="210" cy="210" r="174" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" opacity="0.9" />
              <circle cx="210" cy="210" r="126" stroke="rgba(255,100,50,0.5)" strokeWidth="2" opacity="0.8" />
            </svg>
          </div>

          <div className="why-3d-cube cube-top-right" />
          <div className="why-3d-cube cube-bottom-right" />
          <div className="why-3d-cube cube-bottom-left" />
        </div>

        <div className="why-choose-content-container">
          <div className="why-choose-header">
            <h2 className="why-choose-heading">
              <span className="why-heading-solid">WHY BRANDS</span>
              <span className="why-heading-line-two">
                <span className="why-heading-outline">CHOOSE </span>
                <span className="why-heading-brand">ORCODIX.</span>
              </span>
            </h2>
            <p className="why-choose-subtitle">
              We combine thoughtful design, reliable development, and a focus on creating digital experiences that move your business forward.
            </p>
          </div>

          <div className="why-choose-cards-grid">
            {whyChooseCardsData.map((item) => (
              <div
                key={item.num}
                className={`why-brand-card why-brand-card-${item.theme}`}
              >
                <div className="why-card-top-row">
                  <div className="why-card-icon-badge">
                    {item.icon}
                  </div>
                  <span className="why-card-number">{item.num}</span>
                </div>

                <div className="why-card-text-body">
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-description">{item.desc}</p>
                </div>

                <div className="why-card-bottom-row">
                  <span className="why-card-arrow-icon" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* 6. HOW IT WORKS SECTION (100% MATCHING USER REFERENCE MODEL WITH ORCODIX CONTENT) */}
        <section className="how-it-works-section" id="process">
        {/* Background Dashed Polygon Lines */}
        <div className="hiw-dashed-bg-wrap" aria-hidden="true">
          <svg className="hiw-dashed-svg" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <path d="M-50 120 L350 40 L850 180 L1490 20" stroke="rgba(0, 0, 0, 0.08)" strokeWidth="1.5" strokeDasharray="6 6" />
            <path d="M-20 480 L420 320 L980 500 L1480 360" stroke="rgba(0, 0, 0, 0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="hiw-container">
          {/* Header Area */}
          <div className="hiw-header-area">
            {/* Top Left Eyebrow */}
            <div className="hiw-top-left-eyebrow">
              <span>Trusted by ambitious brands</span>
            </div>

            {/* Center Header Stack */}
            <div className="hiw-header-center">
              <span className="hiw-center-tag">HOW IT WORKS</span>

              <h2 className="hiw-main-title">
                Effortless Design,<br />Scalable Results.
                <svg className="hiw-title-flare" width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <path d="M17 2V10" stroke="#0a0a0f" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M26 6L20 12" stroke="#0a0a0f" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M32 17H24" stroke="#0a0a0f" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </h2>

              <p className="hiw-subtitle">
                Simplify end-to-end digital creation with ORCODIX. Achieve effortless design and high-performance results, from brand strategy to data-driven launch.
              </p>
            </div>

            {/* Top Right Floating Badge + Curved Arrow */}
            <div className="hiw-top-right-callout">
              <div className="hiw-pill-badge">
                <span>Effortless step</span>
              </div>
              <svg className="hiw-curved-arrow-svg" width="60" height="60" viewBox="0 0 80 80" fill="none">
                <path d="M65 15 C 55 35, 30 20, 20 45 C 15 58, 32 65, 45 52 C 55 42, 35 30, 22 42 M 22 42 L 30 52 M 22 42 L 18 30" stroke="#0a0a0f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* 5 Staggered Cards Grid */}
          <div className="hiw-cards-grid">

            {/* CARD 1: Discover & Strategy */}
            <div className="hiw-card hiw-card-1">
              <div className="hiw-card-visual visual-box-1">
                {/* Floating Tech Badges around central document */}
                <div className="hiw-badge-icon badge-in">in</div>
                <div className="hiw-badge-icon badge-github">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </div>
                <div className="hiw-badge-icon badge-glint">
                  <span className="glint-text">GLIN1</span>
                </div>
                <div className="hiw-badge-icon badge-chat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
                </div>

                {/* Central Document Graphic */}
                <div className="hiw-doc-card">
                  <div className="doc-corner-fold" />
                  <div className="doc-line line-1" />
                  <div className="doc-line line-2" />
                  <div className="doc-line line-3" />
                  <span className="doc-label">Strategy Blueprint</span>
                </div>

                {/* Bottom Action Pill + Hand Cursor */}
                <div className="hiw-visual-btn-wrap">
                  <div className="hiw-visual-pill-btn">
                    <span>Publish Strategy</span>
                  </div>
                  <div className="hiw-mouse-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 3l7.5 17 2.5-7 7-2.5L3 3z" stroke="#0a0a0f" strokeWidth="2" fill="#ffffff" /><path d="M13 13l6 6" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" /></svg>
                  </div>
                </div>
              </div>

              <div className="hiw-card-content">
                <h3 className="hiw-card-title">01. Discover & Strategy</h3>
                <p className="hiw-card-desc">
                  AI-driven brand positioning, market research, and interactive design roadmaps.
                </p>
              </div>
            </div>

            {/* CARD 2: Craft & Prototype */}
            <div className="hiw-card hiw-card-2">
              <div className="hiw-card-visual visual-box-2">
                {/* Crop Bracket Frame Corners */}
                <div className="crop-bracket bracket-tl" />
                <div className="crop-bracket bracket-tr" />
                <div className="crop-bracket bracket-bl" />
                <div className="crop-bracket bracket-br" />

                {/* Center Avatar Image */}
                <div className="hiw-avatar-frame">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="UI Design" className="hiw-avatar-img" />
                </div>

                {/* Progress Indicators */}
                <div className="hiw-progress-stack">
                  <div className="progress-bar bar-green" />
                  <div className="progress-bar bar-grey-1" />
                  <div className="progress-bar bar-grey-2" />
                </div>

                {/* Bottom Action Pill */}
                <div className="hiw-visual-pill-btn btn-analyse">
                  <span className="analyse-spinner" />
                  <span>Analyse UI & Motion</span>
                </div>
              </div>

              <div className="hiw-card-content">
                <h3 className="hiw-card-title">02. Craft & Prototype</h3>
                <p className="hiw-card-desc">
                  Intelligent UI/UX design systems, 3D motion graphics, and rapid interactive prototypes.
                </p>
              </div>
            </div>

            {/* CARD 3: Engineer & Build */}
            <div className="hiw-card hiw-card-3">
              <div className="hiw-card-visual visual-box-3">
                {/* Stacked Layers Deck behind front card */}
                <div className="stacked-card-layer layer-3" />
                <div className="stacked-card-layer layer-2" />
                <div className="stacked-card-layer layer-1" />

                {/* Front White Card */}
                <div className="hiw-front-hire-card">
                  <div className="hire-card-user">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Engineer Lead" className="hire-user-avatar" />
                    <div className="hire-user-text">
                      <h4 className="hire-user-name">David Lee</h4>
                      <span className="hire-user-role">Code Approved</span>
                    </div>
                  </div>

                  <div className="hire-gold-btn">
                    <span>Build Approved</span>
                  </div>
                </div>
              </div>

              <div className="hiw-card-content">
                <h3 className="hiw-card-title">03. Engineer & Build</h3>
                <p className="hiw-card-desc">
                  Full-stack React/Next.js development, WebGL performance, and clean code architecture.
                </p>
              </div>
            </div>

            {/* CARD 4: Optimize & Audit */}
            <div className="hiw-card hiw-card-4">
              <div className="hiw-card-visual visual-box-4">
                {/* Concentric Performance Ring Graphic */}
                <div className="hiw-score-circle">
                  <svg width="110" height="110" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" stroke="rgba(0, 0, 0, 0.06)" strokeWidth="8" fill="none" />
                    <circle cx="60" cy="60" r="50" stroke="#7fa42d" strokeWidth="8" strokeDasharray="314" strokeDashoffset="18" strokeLinecap="round" fill="none" />
                  </svg>
                  <div className="score-text-center">
                    <span className="score-val">100%</span>
                    <span className="score-lbl">AUDIT</span>
                  </div>
                </div>

                {/* Floating Audit Badges */}
                <div className="hiw-mini-audit-tag tag-speed">⚡ 99 Speed</div>
                <div className="hiw-mini-audit-tag tag-seo">🔍 100 SEO</div>

                {/* Bottom Action Pill */}
                <div className="hiw-visual-pill-btn btn-audit">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#215212" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Audit Passed</span>
                </div>
              </div>

              <div className="hiw-card-content">
                <h3 className="hiw-card-title">04. Optimize & Audit</h3>
                <p className="hiw-card-desc">
                  Page speed optimization, SEO auditing, cross-device responsiveness, and security hardening.
                </p>
              </div>
            </div>

            {/* CARD 5: Deploy & Scale */}
            <div className="hiw-card hiw-card-5">
              <div className="hiw-card-visual visual-box-5">
                {/* Live Pulse Header */}
                <div className="hiw-live-status-pill">
                  <span className="live-dot" />
                  <span>PROD READY</span>
                </div>

                {/* Central Growth/Deploy Box */}
                <div className="hiw-deploy-card">
                  <div className="deploy-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff542e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/></svg>
                  </div>
                  <div className="deploy-metrics">
                    <span className="metric-title">Traffic Scale</span>
                    <span className="metric-value">+340%</span>
                  </div>
                </div>

                {/* Bottom Golden Action Pill */}
                <div className="hiw-visual-pill-btn btn-finalize">
                  <span>Finalize Launch</span>
                </div>
              </div>

              <div className="hiw-card-content">
                <h3 className="hiw-card-title">05. Deploy & Scale</h3>
                <p className="hiw-card-desc">
                  Seamless cloud deployment, live performance monitoring, data analytics, and ongoing growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testi-inner">

          {/* Header Row */}
          <div className="testi-header-row">
            <div className="testi-header-left">
              <span className="testi-tag">// TESTIMONIALS</span>
              <h2 className="testi-headline">
                Trusted by <span className="testi-headline-accent">200+</span> growing<br />
                businesses worldwide!
              </h2>
            </div>
            <div className="testi-header-right">
              <a href="#quote" className="testi-cta-btn">
                <span>Start a Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>

          {/* Marquee Track */}
          <div className="testi-marquee-wrap">
            <div className="testi-marquee-track">
              {/* Render cards twice for seamless infinite loop */}
              {[...testimonialsData, ...testimonialsData].map((t, idx) => (
                <div
                  key={idx}
                  className={`testi-card${t.featured ? ' testi-card--featured' : ''}`}
                >
                  {/* Card Top: Avatar + Name + Platform Icon */}
                  <div className="testi-card-top">
                    <img src={t.avatar} alt={t.author} className="testi-card-avatar" />
                    <div className="testi-card-author">
                      <span className="testi-card-name">{t.author}</span>
                      <span className="testi-card-role">{t.role}</span>
                    </div>
                    <div className="testi-card-platform">
                      {t.platform === 'twitter' ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      )}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <div className="testi-card-body">
                    <p className="testi-card-quote">&ldquo;{t.quote}&rdquo;</p>
                  </div>

                  {/* Card Footer: Stars + Date */}
                  <div className="testi-card-footer">
                    <div className="testi-card-stars">
                      {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                    </div>
                    <span className="testi-card-date">{t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. NEW REFERENCE-BASED CTA SECTION */}
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
                onClick={() => setIsContactModalOpen(true)}
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Inquiry Modal */}
      {isContactModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactModalOpen(false)}>
          <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="contact-modal-close"
              onClick={() => setIsContactModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <span className="contact-tag">// LET'S TALK</span>
            <h3 className="contact-modal-title">Start Your Project With ORCODIX</h3>
            <p className="contact-modal-sub">
              Tell us about your goals. We'll respond within 24 hours with a custom roadmap.
            </p>

            {formSubmitted ? (
              <div className="contact-success-card">
                <div className="success-icon-wrap">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false)
                    setIsContactModalOpen(false)
                  }}
                  className="btn-reset-form"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-input-box">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-input-box">
                    <label>Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-input-box">
                  <label>Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Web Design">Web Design</option>
                    <option value="Development">Full-Stack Development</option>
                    <option value="Motion">Motion & 3D Visuals</option>
                    <option value="E-Commerce">E-Commerce System</option>
                    <option value="Full Package">Brand & Digital Package</option>
                  </select>
                </div>

                <div className="form-input-box">
                  <label>Project Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="< $10k">&lt; $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k+">$50k+</option>
                  </select>
                </div>

                <div className="form-input-box">
                  <label>Project Details</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project vision, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-submit-inquiry">
                  <span>Send Inquiry</span>
                  <span className="btn-arrow-right">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 9. NEW REFERENCE-BASED MAIN SITE FOOTER */}
      <footer className="orcodix-footer">
        <div className="footer-ambient-glow" />

        <div className="orcodix-footer-inner">
          <div className="footer-main-grid">
            {/* COL 1: BRAND LOGO + DESC + QUICK CONTACT */}
            <div className="footer-col-brand">
              <a href="#home" className="footer-brand-logo-link">
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
                <li><a href="#home" onClick={(e) => handleNavClick({ label: 'Home', page: 'home', href: '#home' }, e)}>Home</a></li>
                <li><a href="#about-page" onClick={(e) => handleNavClick({ label: 'About Us', page: 'about', href: '#about-page' }, e)}>About Us</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick({ label: 'Services', page: 'home', href: '#services' }, e)}>Services</a></li>
                <li><a href="#work" onClick={(e) => handleNavClick({ label: 'Case Studies', page: 'home', href: '#work' }, e)}>Projects</a></li>
                <li><a href="#quote" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }}>Contact Us</a></li>
              </ul>
            </div>

            {/* COL 3: SUPPORT */}
            <div className="footer-col-nav">
              <h4 className="footer-nav-title">Support</h4>
              <ul className="footer-menu-links">
                <li><a href="#process">FAQs</a></li>
                <li><a href="#quote" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }}>Support Center</a></li>
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
      </>
      )}

      {/* Floating 'Chat with us' Pill Widget */}
      <a
        href="#quote"
        className="floating-chat-pill"
        aria-label="Chat with us"
        onClick={(e) => {
          e.preventDefault()
          setIsContactModalOpen(true)
        }}
      >
        <div className="chat-pill-icon-circle">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </div>
        <span className="chat-pill-text">Chat with us</span>
      </a>
    </div>
  )
}


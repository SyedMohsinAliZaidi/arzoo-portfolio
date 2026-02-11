"use client";
import { Shuffle, Square, Layers, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector(".hero-image img") as HTMLElement;
      if (!image) return;

      const scrollY = window.scrollY;
      image.style.transform = `translateY(${scrollY * 0.08}px) scale(1.03)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>

      {/* NAVBAR */}
      {/* <header className="nav">
        <div className="nav-inner">
          <div className="logo">
            <Image
              src="/images/Logo.svg"
              alt="Arzoo Agha logo"
              width={120}
              height={120}
              priority
            />
          </div>


          <nav className="nav-links">
            <a href="#hero">About</a>
            <a href="#projects">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#cta" className="nav-cta">Contact</a>
          </nav>
        </div>
      </header> */}

      <header className="nav">
        <div className="nav-inner">

          <div className="logo">
            <Image
              src="/images/logo.svg"
              alt="Arzoo Agha logo"
              width={60}
              height={60}
              priority
            />
          </div>

          <nav className="nav-links desktop">
            <a href="#home">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>


      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-inner">
          <div className="hero-image">
            <img src="/images/heronew.png" alt="Arzoo Agha portrait" />
          </div>

          <div className="hero-text">
            <h1>Arzoo Agha</h1>
            <p className="hero-subtitle">
              Fashion and digital designer crafting visual stories that resonate.
              Design with purpose, executed with precision.
            </p>

            <div className="hero-actions">
              <a href="/portfolio" className="button">Portfolio</a>
              <a href="/contact" className="button secondary">Contact</a>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section id="projects" className="projects" data-reveal>
        <div className="projects-inner">
          <div className="section-header">
            <h2 data-reveal-item>Selected projects and creative direction</h2>
            <p>
              Each project reflects a distinct approach to visual storytelling,
              blending fashion sensibility with digital innovation.
            </p>
          </div>

          <div className="project-grid">

            <a href="/portfolio/kalashify" className="project-card" data-reveal-item>
              <div className="project-media">
                <img
                  src="/images/KelashProject.jpg"
                  alt="KALASH-ify project"
                />
              </div>

              <div className="project-content">
                <h3>KALASH-ify</h3>
                <p>Digitally Classifying The Kalash Valley’s Cultural Identity</p>
              </div>
            </a>

            <a href="/portfolio/project-two" className="project-card" data-reveal-item>
              <div className="project-media">
                <img
                  src="/images/ItalianProject2.webp"
                  alt="Fashion culture in Italy"
                />
              </div>

              <div className="project-content">
                <h3>Fashion culture in Italy</h3>
                <p>
                  An analysis of the book
                  <em> The Italian Style: Economy, Culture & Society</em>
                </p>
              </div>
            </a>

            <a href="/portfolio/project-three" className="project-card" data-reveal-item>
              <div className="project-media">
                <img
                  src="/images/Project3.webp"
                  alt="SHIVERTALE project"
                />
              </div>

              <div className="project-content">
                <h3>SHIVERTALE</h3>
                <p>
                  A Gothic cultural narrative inspired by
                  <em> Crimson Peak</em>
                </p>
              </div>
            </a>

          </div>

          <div className="projects-cta">
            <a href="/portfolio" className="button secondary">
              Explore →
            </a>
          </div>
        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="services" data-reveal>
        <div className="services-inner">

          <div className="services-image" data-reveal-item>
            <img src="/images/services.png" alt="Studio work" />
          </div>

          <div className="services-text" data-reveal-item>
            <h2>Design with intention</h2>
            <div className="intent-item">
              <Shuffle size={18} strokeWidth={1.5} />
              <div>
                <h4>Strategic Vision</h4>
                <p>Aligning visual language with brand clarity.</p>
              </div>
            </div>

            <div className="intent-item" data-reveal-item>
              <Square size={18} strokeWidth={1.5} />
              <div>
                <h4>Visual Consistency</h4>
                <p>Cohesive systems across platforms.</p>
              </div>
            </div>

            <div className="intent-item" data-reveal-item>
              <Layers size={18} strokeWidth={1.5} />
              <div>
                <h4>Creative Collaboration</h4>
                <p>Thoughtful design decisions with your brand.</p>
              </div>
            </div>
            <div className="services-btn" data-reveal-item>
              <a href="/services" className="button secondary">
                Services
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="testimonial" className="testimonial">
        <div className="testimonial-inner">
          <p className="testimonial-quote">
            “Arzoo brought clarity to our brand identity. The work was thoughtful,
            precise, and elevated our entire visual presence.”
          </p>

          <div className="testimonial-author">
            <div className="author-avatar">
              <img src="/images/fabric-2.jpeg" alt="Creative Director" />
            </div>
            <div className="author-meta">
              <strong>Creative Director</strong>
              <span>Luxury Fashion Studio</span>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section id="cta" className="cta" data-reveal>
        <div className="cta-inner">
          <div className="cta-text" data-reveal-item>
            <h2>Ready to elevate<br />your brand</h2>
            <p>
              Let’s create something meaningful together.
              Reach out to discuss your next project.
            </p>

            <div className="cta-actions">
              <a href="/portfolio" className="btn primary">Portfolio</a>
              <a href="/contact" className="btn outline">Contact</a>
            </div>
          </div>

          <div className="cta-image">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Creative workspace"
            />
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h4>Stay in the loop</h4>
            <p>Get updates on new work and creative insights.</p>

            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>

            <span className="privacy-note">
              We respect your privacy. No spam.
            </span>
          </div>

          <div className="footer-links">
            <div>
              <h5>Work</h5>
              <a>Portfolio</a>
              <a>Services</a>
              <a>Projects</a>
              <a>About</a>
            </div>

            <div>
              <h5>Connect</h5>
              <a>Instagram</a>
              <a>LinkedIn</a>
              <a>Email</a>
            </div>

            <div>
              <h5>Resources</h5>
              <a>Process</a>
              <a>Philosophy</a>
              <a>Journal</a>
            </div>

            <div>
              <h5>Legal</h5>
              <a>Privacy</a>
              <a>Terms</a>
              <a>Cookies</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Arzoo Agha</span>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            {/* <a href="#" aria-label="Behance">
              <Behance size={18} strokeWidth={1.5} />
            </a> */}
          </div>
        </div>
      </footer>

    </main>
  );
}

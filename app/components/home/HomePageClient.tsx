"use client";

import { Shuffle, Square, Layers, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
    {
        title: "KALASH-ify",
        description: "Digitally Classifying The Kalash Valley’s Cultural Identity",
        href: "/work/kalashify",
        image: "/images/KelashProject.jpg",
        alt: "KALASH-ify project",
    },
    {
        title: "Italian Fashion Culture",
        description:
            "Research on Italian craftsmanship, economy, and design culture.",
        href: "/work/italian-fashion",
        image: "/images/ItalianProject2.webp",
        alt: "Fashion culture in Italy project",
    },
    {
        title: "SHIVERTALE",
        description:
            "A gothic costume and visual storytelling project inspired by Crimson Peak.",
        href: "/work/shivertale",
        image: "/images/Project3.webp",
        alt: "SHIVERTALE project",
    },
];

export default function HomePageClient() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const image = document.querySelector(".hero-image img") as HTMLElement | null;
            if (!image) return;

            const scrollY = window.scrollY;
            image.style.transform = `translateY(${scrollY * 0.08}px) scale(1.03)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main>
            <header className="nav">
                <div className="nav-inner">
                    <div className="logo">
                        <Image
                            src="/images/Logo.svg"
                            alt="Arzoo Agha logo"
                            width={60}
                            height={60}
                            priority
                        />
                    </div>

                    <nav className="nav-links desktop">
                        <a href="#hero">About</a>
                        <a href="#projects">Portfolio</a>
                        <a href="#services">Services</a>
                        <a href="/contact" className="nav-cta">
                            Contact
                        </a>
                    </nav>

                    <button
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <a href="#hero" onClick={() => setMenuOpen(false)}>
                    About
                </a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                    Portfolio
                </a>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                    Services
                </a>
                <a href="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                </a>
            </div>

            <section id="hero" className="hero">
                <div className="hero-inner">
                    <div className="hero-image">
                        <Image src="/images/heronew.png" alt="Arzoo Agha portrait"
                            width={900}
                            height={900}
                            priority
                            className="hero-img" />
                    </div>

                    <div className="hero-text">
                        <h1>Arzoo Agha</h1>
                        <p className="hero-subtitle">
                            Fashion and digital designer crafting visual stories that resonate.
                            Design with purpose, executed with precision.
                        </p>

                        <div className="hero-actions">
                            <a href="#projects" className="button">
                                Portfolio
                            </a>
                            <a href="/contact" className="button secondary">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </section>

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
                        {projects.map((project) => (
                            <a
                                key={project.title}
                                href={project.href}
                                className="project-card"
                                data-reveal-item
                            >
                                <div className="project-media">
                                    <Image src={project.image} alt={project.alt}
                                        width={800}
                                        height={600}
                                        className="project-img"
                                    />
                                </div>

                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <span className="project-link">View project →</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="projects-cta">
                        <a href="#projects" className="button secondary">
                            Explore →
                        </a>
                    </div>
                </div>
            </section>

            <section id="services" className="services" data-reveal>
                <div className="services-inner">
                    <div className="services-image" data-reveal-item>
                        <Image src="/images/services.png" alt="Studio work"
                            width={900}
                            height={700}
                        />
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
                            <a href="#cta" className="button secondary">
                                Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonial" className="testimonial">
                <div className="testimonial-inner">
                    <p className="testimonial-quote">
                        “Arzoo brought clarity to our brand identity. The work was thoughtful,
                        precise, and elevated our entire visual presence.”
                    </p>

                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <Image src="/images/fabric-2.jpeg" alt="Creative Director"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="author-meta">
                            <strong>Creative Director</strong>
                            <span>Luxury Fashion Studio</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="cta" data-reveal>
                <div className="cta-inner">
                    <div className="cta-text" data-reveal-item>
                        <h2>
                            Ready to elevate
                            <br />
                            your brand
                        </h2>
                        <p>
                            Let’s create something meaningful together.
                            Reach out to discuss your next project.
                        </p>

                        <div className="cta-actions">
                            <a href="#projects" className="btn primary">
                                Portfolio
                            </a>
                            <a href="/contact" className="btn outline">
                                Contact
                            </a>
                        </div>
                    </div>

                    <div className="cta-image">
                        <Image
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                            alt="Creative workspace"
                            width={1200}
                            height={800}
                        />
                    </div>
                </div>
            </section>

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
                            <a href="/#projects">Portfolio</a>
                            <a href="#services">Services</a>
                            <a href="/#projects">Projects</a>
                            <a href="/#hero">About</a>
                        </div>

                        <div>
                            <h5>Connect</h5>
                            <a
                                href="https://www.instagram.com/arzified/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.linkedin.com/in/arzooa/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a href="mailto:arzoo.wish123@gmail.com">Email</a>
                        </div>

                        <div>
                            <h5>Resources</h5>
                            <a href="/work/kalashify">Process</a>
                            <a href="/work/italian-fashion">Philosophy</a>
                            <a href="/work/shivertale">Journal</a>
                        </div>

                        <div>
                            <h5>Legal</h5>
                            <a href="/contact">Privacy</a>
                            <a href="/contact">Terms</a>
                            <a href="/contact">Cookies</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 Arzoo Agha</span>

                    <div className="footer-socials">
                        <a
                            href="https://www.instagram.com/arzified/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <Instagram size={18} strokeWidth={1.5} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/arzooa/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
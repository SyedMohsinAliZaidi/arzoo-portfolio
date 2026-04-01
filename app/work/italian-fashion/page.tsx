import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Italian Fashion Culture",
    description:
        "A research project exploring Italian craftsmanship, fashion identity, production culture, and the relationship between design, economy, and society.",
};

export default function ItalianFashionPage() {
    return (
        <main className="project-page">
            <section className="project-hero">
                <div className="project-container project-hero-grid">
                    <div className="project-hero-copy">
                        <a href="/#projects" className="project-back-link">← Back to projects</a>
                        <p className="project-eyebrow">Project 02</p>
                        <h1>Italian Fashion Culture</h1>
                        <p className="project-subtitle">
                            A research project exploring Italian craftsmanship, fashion
                            identity, production culture, and the relationship between design,
                            economy, and society.
                        </p>

                        <div className="project-meta-grid">
                            <div>
                                <span className="project-meta-label">Category</span>
                                <p>Fashion Research / Cultural Analysis / Visual Study</p>
                            </div>
                            <div>
                                <span className="project-meta-label">Year</span>
                                <p>2023</p>
                            </div>
                            <div>
                                <span className="project-meta-label">Focus</span>
                                <p>Italian style, craftsmanship, manufacturing, cultural value</p>
                            </div>
                            <div>
                                <span className="project-meta-label">Role</span>
                                <p>Research, analysis, documentation, visual presentation</p>
                            </div>
                        </div>
                    </div>

                    <div className="project-hero-media">
                        <Image
                            src="/images/ItalianProject2.webp"
                            alt="Italian Fashion Culture project cover"
                            fill
                            priority
                            className="project-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="project-section">
                <div className="project-container project-intro-grid">
                    <div>
                        <h2>Project overview</h2>
                    </div>
                    <div>
                        <p>
                            This project investigates the meaning of Italian fashion culture
                            through both theory and observation. It connects ideas from
                            writing on Italian style with real-world examples of artisanship,
                            production methods, and the value systems that shape Italian
                            design.
                        </p>
                        <p>
                            The work studies how quality, heritage, and craftsmanship are not
                            only part of fashion aesthetics, but also part of Italy’s wider
                            cultural and economic identity. It presents fashion as a system of
                            social meaning as well as a design practice.
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-section project-muted">
                <div className="project-container">
                    <h2 className="project-section-title">Core objectives</h2>

                    <div className="project-cards-three">
                        <article className="project-card-box">
                            <h3>Understand Italian style</h3>
                            <p>
                                Explore how fashion in Italy reflects national identity,
                                cultural values, design history, and social perception.
                            </p>
                        </article>

                        <article className="project-card-box">
                            <h3>Study craftsmanship</h3>
                            <p>
                                Examine the role of artisans, production knowledge, and material
                                quality in shaping high-value Italian products.
                            </p>
                        </article>

                        <article className="project-card-box">
                            <h3>Connect theory and practice</h3>
                            <p>
                                Relate written research to observed examples from fashion
                                production and workshop-based learning.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="project-section">
                <div className="project-container">
                    <h2 className="project-section-title">Research and design process</h2>

                    <div className="project-timeline">
                        <div className="project-timeline-item">
                            <span className="project-step">01</span>
                            <div>
                                <h3>Contextual research</h3>
                                <p>
                                    Review of the cultural and economic meaning of Italian style,
                                    with focus on how fashion represents social values and
                                    heritage.
                                </p>
                            </div>
                        </div>

                        <div className="project-timeline-item">
                            <span className="project-step">02</span>
                            <div>
                                <h3>Craft analysis</h3>
                                <p>
                                    Study of materials, making processes, and artisan knowledge as
                                    central parts of product identity and perceived value.
                                </p>
                            </div>
                        </div>

                        <div className="project-timeline-item">
                            <span className="project-step">03</span>
                            <div>
                                <h3>Workshop observation</h3>
                                <p>
                                    Documentation of production culture through direct exposure to
                                    shoemaking and the practical environment of Italian craft.
                                </p>
                            </div>
                        </div>

                        <div className="project-timeline-item">
                            <span className="project-step">04</span>
                            <div>
                                <h3>Interpretation</h3>
                                <p>
                                    Translation of findings into a structured visual and written
                                    project that links theory, practice, and cultural reflection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section">
                <div className="project-container">
                    <h2 className="project-section-title">Selected visuals</h2>

                    <div className="project-gallery">
                        <div className="project-gallery-item project-gallery-large">
                            <Image
                                src="/images/ItalianProject2.webp"
                                alt="Italian Fashion Culture featured visual"
                                fill
                                className="project-cover"
                            />
                        </div>

                        <div className="project-gallery-item">
                            <Image
                                src="/images/KelashProject.jpg"
                                alt="Italian research visual placeholder"
                                fill
                                className="project-cover"
                            />
                        </div>

                        <div className="project-gallery-item">
                            <Image
                                src="/images/Project3.webp"
                                alt="Italian craftsmanship visual placeholder"
                                fill
                                className="project-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-muted">
                <div className="project-container project-results-grid">
                    <div>
                        <h2>Outcome</h2>
                    </div>

                    <div>
                        <p>
                            The project frames Italian fashion not only as a design outcome
                            but as a cultural ecosystem shaped by artisanship, quality, and
                            historical continuity. It demonstrates how fashion research can
                            reveal the deeper structures behind what makes Italian products
                            globally respected.
                        </p>

                        <ul className="project-result-list">
                            <li>Clear understanding of Italian design culture</li>
                            <li>Strong connection between craftsmanship and identity</li>
                            <li>Theory supported by observational learning</li>
                            <li>Portfolio-ready research narrative with cultural depth</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="project-next-section">
                <div className="project-container project-next-card">
                    <div>
                        <p className="project-eyebrow">Next project</p>
                        <h2>SHIVERTALE</h2>
                        <p>
                            A gothic-inspired fashion narrative exploring atmosphere and
                            visual storytelling.
                        </p>
                    </div>

                    <a href="/work/shivertale" className="project-button">
                        View next project
                    </a>
                </div>
            </section>
        </main>
    );
}
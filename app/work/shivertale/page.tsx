import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "SHIVERTALE",
    description:
        "A gothic-inspired fashion narrative exploring atmosphere, storytelling, costume design, and emotional visual expression through cinematic influence.",
};

export default function ShivertalePage() {
    return (
        <main className="project-page">
            <section className="project-hero">
                <div className="project-container project-hero-grid">
                    <div className="project-hero-copy">
                        <a href="/#projects" className="project-back-link">← Back to projects</a>
                        <p className="project-eyebrow">Project 03</p>
                        <h1>SHIVERTALE</h1>
                        <p className="project-subtitle">
                            A gothic-inspired fashion narrative exploring atmosphere,
                            storytelling, costume design, and emotional visual expression
                            through cinematic influence.
                        </p>

                        <div className="project-meta-grid">
                            <div>
                                <span className="project-meta-label">Category</span>
                                <p>Fashion Design / Costume / Visual Storytelling</p>
                            </div>
                            <div>
                                <span className="project-meta-label">Year</span>
                                <p>2022</p>
                            </div>
                            <div>
                                <span className="project-meta-label">Focus</span>
                                <p>Gothic aesthetics, narrative design, character mood</p>
                            </div>
                            <div>
                                <span className="project-meta-label">Role</span>
                                <p>Concept development, garment design, visual direction</p>
                            </div>
                        </div>
                    </div>

                    <div className="project-hero-media">
                        <Image
                            src="/images/Project3.webp"
                            alt="SHIVERTALE project cover"
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
                            SHIVERTALE is a conceptual fashion project inspired by gothic
                            storytelling and cinematic atmosphere. The design direction draws
                            influence from dark romantic narratives, emotional symbolism, and
                            dramatic visual composition.
                        </p>
                        <p>
                            The project focuses on how clothing can communicate character,
                            mood, and narrative. Through fabric selection, silhouette
                            exploration, and visual styling, the work creates a fictional
                            fashion world rooted in storytelling and imagination.
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-section project-muted">
                <div className="project-container">
                    <h2 className="project-section-title">Core objectives</h2>

                    <div className="project-cards-three">
                        <article className="project-card-box">
                            <h3>Create narrative fashion</h3>
                            <p>
                                Design garments that express emotion and story rather than
                                purely functional clothing.
                            </p>
                        </article>

                        <article className="project-card-box">
                            <h3>Explore gothic aesthetics</h3>
                            <p>
                                Investigate dark romantic visual language through color,
                                silhouette, texture, and styling.
                            </p>
                        </article>

                        <article className="project-card-box">
                            <h3>Develop visual identity</h3>
                            <p>
                                Build a cohesive visual world that connects costume design,
                                character concept, and storytelling.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="project-section">
                <div className="project-container">
                    <h2 className="project-section-title">Design process</h2>

                    <div className="project-timeline">
                        <div className="project-timeline-item">
                            <span className="project-step">01</span>
                            <div>
                                <h3>Concept inspiration</h3>
                                <p>
                                    Exploration of gothic cinema, emotional storytelling, and
                                    dramatic character narratives as the foundation for design.
                                </p>
                            </div>
                        </div>

                        <div className="project-timeline-item">
                            <span className="project-step">02</span>
                            <div>
                                <h3>Moodboard development</h3>
                                <p>
                                    Creation of visual references combining architecture, costume,
                                    lighting, and texture to define the project atmosphere.
                                </p>
                            </div>
                        </div>

                        <div className="project-timeline-item">
                            <span className="project-step">03</span>
                            <div>
                                <h3>Garment exploration</h3>
                                <p>
                                    Experimentation with silhouette, fabric, and layering to
                                    create dramatic and expressive clothing forms.
                                </p>
                            </div>
                        </div>

                        <div className="project-timeline-item">
                            <span className="project-step">04</span>
                            <div>
                                <h3>Visual presentation</h3>
                                <p>
                                    Styling, photography direction, and layout design to present
                                    the project as a cohesive fashion narrative.
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
                                src="/images/Project3.webp"
                                alt="SHIVERTALE featured visual"
                                fill
                                className="project-cover"
                            />
                        </div>

                        <div className="project-gallery-item">
                            <Image
                                src="/images/KelashProject.jpg"
                                alt="SHIVERTALE concept visual placeholder"
                                fill
                                className="project-cover"
                            />
                        </div>

                        <div className="project-gallery-item">
                            <Image
                                src="/images/ItalianProject2.webp"
                                alt="SHIVERTALE design visual placeholder"
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
                            The project demonstrates how fashion design can function as visual
                            storytelling. By combining cinematic influence with garment
                            creation, SHIVERTALE presents clothing as a narrative medium that
                            communicates emotion, identity, and atmosphere.
                        </p>

                        <ul className="project-result-list">
                            <li>Strong narrative-driven fashion concept</li>
                            <li>Clear visual identity and mood direction</li>
                            <li>Creative exploration of gothic aesthetics</li>
                            <li>Portfolio-ready fashion storytelling project</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="project-next-section">
                <div className="project-container project-next-card">
                    <div>
                        <p className="project-eyebrow">Back to</p>
                        <h2>Selected Projects</h2>
                        <p>
                            Explore the full collection of design and research work.
                        </p>
                    </div>

                    <a href="/#projects" className="project-button">
                        View projects
                    </a>
                </div>
            </section>
        </main>
    );
}
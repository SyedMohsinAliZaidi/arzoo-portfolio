import Image from "next/image";

export default function PortfolioPage() {
    return (
        <main className="portfolio-page">

            {/* HEADER */}
            <section className="portfolio-hero">
                <div className="portfolio-container">
                    <h1>Portfolio</h1>
                    <p>
                        A curated selection of research, design, and visual storytelling
                        projects exploring culture, fashion, and digital expression.
                    </p>
                </div>
            </section>

            {/* PROJECT GRID */}
            <section className="portfolio-section">
                <div className="portfolio-container">

                    <div className="portfolio-grid">

                        {/* PROJECT 1 */}
                        <a href="/work/kalashify" className="portfolio-card">

                            <div className="portfolio-media">
                                <Image
                                    src="/images/KelashProject.jpg"
                                    alt="KALASH-ify project"
                                    fill
                                    className="portfolio-cover"
                                />
                            </div>

                            <div className="portfolio-content">
                                <h3>KALASH-ify</h3>
                                <p>
                                    Digitally communicating the cultural identity of the Kalash
                                    Valley through research-led visual storytelling.
                                </p>
                            </div>

                        </a>

                        {/* PROJECT 2 */}
                        <a href="/work/italian-fashion" className="portfolio-card">

                            <div className="portfolio-media">
                                <Image
                                    src="/images/ItalianProject2.webp"
                                    alt="Italian Fashion Culture"
                                    fill
                                    className="portfolio-cover"
                                />
                            </div>

                            <div className="portfolio-content">
                                <h3>Italian Fashion Culture</h3>
                                <p>
                                    Research exploring the relationship between craftsmanship,
                                    economy, and identity within Italian fashion.
                                </p>
                            </div>

                        </a>

                        {/* PROJECT 3 */}
                        <a href="/work/shivertale" className="portfolio-card">

                            <div className="portfolio-media">
                                <Image
                                    src="/images/Project3.webp"
                                    alt="SHIVERTALE project"
                                    fill
                                    className="portfolio-cover"
                                />
                            </div>

                            <div className="portfolio-content">
                                <h3>SHIVERTALE</h3>
                                <p>
                                    A gothic-inspired fashion narrative exploring atmosphere,
                                    storytelling, and visual identity.
                                </p>
                            </div>

                        </a>

                    </div>

                </div>
            </section>

        </main>
    );
}
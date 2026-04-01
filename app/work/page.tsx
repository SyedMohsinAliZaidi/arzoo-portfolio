import Image from "next/image";
export default function Work() {
    return (
        <main className="work-index">

            <header className="work-header">
                <h1>Selected Work</h1>
                <p>
                    Research-led digital design projects exploring culture,
                    systems, and visual narrative.
                </p>
            </header>

            {/* PROJECT 1 */}
            <section className="work-item">
                <a href="/work/kalashify">
                    <Image
                        src="/images/kalash-thumb.jpg"
                        alt="KALASH-ify project"
                        width={800}
                        height={600}
                    />
                </a>
                <div className="work-meta">
                    <span>Master’s Thesis</span>
                    <h2>KALASH-ify</h2>
                    <p>
                        A research-driven digital fashion project focused on preserving
                        the cultural identity of the Kalash Valley through systems
                        and narrative design.
                    </p>
                </div>
            </section>

            {/* PROJECT 2 */}
            <section className="work-item">
                <a href="/work/project-two">
                    <Image src="/images/fabric-1.jpg" alt="Project two" width={800}
                        height={600} />
                </a>
                <div className="work-meta">
                    <span>Digital Design</span>
                    <h2>Project Two</h2>
                    <p>
                        An exploratory digital project focusing on materiality,
                        form, and visual systems.
                    </p>
                </div>
            </section>

            {/* PROJECT 3 */}
            <section className="work-item">
                <a href="/work/project-three">
                    <Image src="/images/fabric-2.jpg" alt="Project three" width={800} height={600} />
                </a>
                <div className="work-meta">
                    <span>Visual Research</span>
                    <h2>Project Three</h2>
                    <p>
                        A visual research project examining texture, structure,
                        and editorial composition.
                    </p>
                </div>
            </section>

        </main>
    );
}

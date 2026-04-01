export default function Loading() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                background: "#f4f3f1",
                color: "#111",
            }}
        >
            <div style={{ textAlign: "center" }}>
                <p
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "2rem",
                        marginBottom: "12px",
                    }}
                >
                    Loading...
                </p>
                <p style={{ color: "#666", fontSize: "14px" }}>
                    Preparing the experience.
                </p>
            </div>
        </main>
    );
}
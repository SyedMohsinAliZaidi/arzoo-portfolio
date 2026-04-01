export default function NotFound() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                background: "#f4f3f1",
                color: "#111",
                padding: "24px",
            }}
        >
            <div style={{ textAlign: "center", maxWidth: "560px" }}>
                <p
                    style={{
                        fontSize: "12px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#666",
                        marginBottom: "14px",
                    }}
                >
                    404
                </p>

                <h1
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        lineHeight: 1.05,
                        marginBottom: "16px",
                    }}
                >
                    Page not found
                </h1>

                <p
                    style={{
                        color: "#555",
                        lineHeight: 1.7,
                        marginBottom: "28px",
                    }}
                >
                    The page you are looking for does not exist or may have been moved.
                </p>

                <a
                    href="/"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "14px 22px",
                        borderRadius: "999px",
                        background: "#111",
                        color: "#fff",
                        textDecoration: "none",
                    }}
                >
                    Back to home
                </a>
            </div>
        </main>
    );
}
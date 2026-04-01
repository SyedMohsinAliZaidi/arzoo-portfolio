"use client";

import { FormEvent, useState } from "react";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactPageClient() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (!form.name || !form.email || !form.subject || !form.message) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                setErrorMessage(data.error || "Failed to send message.");
                return;
            }

            setSuccessMessage("Your message has been sent successfully.");
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch {
            setErrorMessage("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="contact-container">
                    <p className="contact-eyebrow">Contact</p>
                    <h1>Let’s create something meaningful.</h1>
                    <p className="contact-intro">
                        For collaborations, freelance work, design opportunities, or creative
                        inquiries, feel free to get in touch.
                    </p>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-container contact-grid">
                    <div className="contact-details">
                        <div className="contact-block">
                            <h2>Email</h2>
                            <a href="mailto:arzoo.wish123@gmail.com">arzoo.wish123@gmail.com</a>
                        </div>

                        <div className="contact-block">
                            <h2>LinkedIn</h2>
                            <a
                                href="https://www.linkedin.com/in/arzooa/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                linkedin.com/in/arzooa
                            </a>
                        </div>

                        <div className="contact-block">
                            <h2>Instagram</h2>
                            <a
                                href="https://www.instagram.com/arzified/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @arzified
                            </a>
                        </div>

                        <div className="contact-block">
                            <h2>Location</h2>
                            <p>Rome, Italy</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-field">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm((prev) => ({ ...prev, name: e.target.value }))
                                }
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm((prev) => ({ ...prev, email: e.target.value }))
                                }
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                placeholder="Project inquiry"
                                value={form.subject}
                                onChange={(e) =>
                                    setForm((prev) => ({ ...prev, subject: e.target.value }))
                                }
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Tell me a little about your project or idea."
                                value={form.message}
                                onChange={(e) =>
                                    setForm((prev) => ({ ...prev, message: e.target.value }))
                                }
                            />
                        </div>

                        {successMessage ? (
                            <p className="contact-success">{successMessage}</p>
                        ) : null}

                        {errorMessage ? (
                            <p className="contact-error">{errorMessage}</p>
                        ) : null}

                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send message"}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
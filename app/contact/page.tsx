import type { Metadata } from "next";
import ContactPageClient from "../components/contact/ContactPageClient";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Arzoo Agha for collaborations, freelance opportunities, design work, and creative inquiries.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
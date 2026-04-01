"use client";

import { useEffect } from "react";
import Cursor from "./Cursor";
import { initScrollReveal } from "../../utils/scrollReveal";

export default function ClientShell({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const timer = window.setTimeout(() => {
            initScrollReveal();
        }, 50);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <>
            <Cursor />
            {children}
        </>
    );
}
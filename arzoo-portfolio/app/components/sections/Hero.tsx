"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero span", {
      y: 120,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="hero">
      <h1>
        <span>Designing</span>
        <br />
        <span>Culture</span>
        <br />
        <span>Into Form</span>
      </h1>

      <p>
        Fashion, cultural research, and digital product systems shaped through
        contemporary design thinking.
      </p>

      <img
        src="https://images.unsplash.com/photo-1520974735194-6c1fc6f8b2e0?auto=format&fit=crop&w=1600&q=80"
        alt="Editorial fashion portrait"
      />
    </section>
  );
}

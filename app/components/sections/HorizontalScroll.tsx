"use client";

import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  // useEffect(() => {
  //   gsap.to(".track", {
  //     xPercent: -200,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".horizontal",
  //       start: "top top",
  //       end: "+=2000",
  //       scrub: 1,
  //       pin: true,
  //     },
  //   });
  // }, []);

  return (
    <section className="horizontal">
      <div className="track">
        <div className="panel">
          <h2>KALASH-ify</h2>
          <img src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1600&q=80" />
        </div>

        <div className="panel">
          <h2>Italian Fashion Culture</h2>
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80" />
        </div>

        <div className="panel">
          <h2>Shiver Tale</h2>
          <img src="https://images.unsplash.com/photo-1520975922215-6c1fc6f8b2e0?auto=format&fit=crop&w=1600&q=80" />
        </div>
      </div>
    </section>
  );
}

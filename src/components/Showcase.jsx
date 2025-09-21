"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ProjectShowcase({
  title = "Kera",
  description = "A social media website I built with Next.js.",
  image = "/kera-preview.png",
  link = "#",
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    const onEnter = () => {
      gsap.to(el, {
        scale: 1.05,
        boxShadow: "0 0 25px 8px rgba(255, 230, 0, 0.6)",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
        boxShadow: "0 0 0px 0px rgba(255, 230, 0, 0)",
        duration: 0.4,
        ease: "power2.inOut",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-zinc-900 border border-yellow-500/30 text-white 
                 rounded-2xl overflow-hidden w-[350px] hover:cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-yellow-400">{title}</h2>
        <p className="text-gray-300">{description}</p>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded-xl font-semibold 
                     bg-yellow-400 text-black text-center
                     hover:bg-yellow-300 transition-colors"
        >
          Visit {title}
        </a>
      </div>
    </div>
  );
}
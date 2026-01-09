"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow motion
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen md:h-[100vh] flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Video Background with subtle reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
        animate={{ opacity: 0.4, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Cinematic Overlays and seamless fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Connection Gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030303] to-transparent z-20" />

      {/* Too Easy Logo - Floating over video with reveal */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-30"
      >
        <Image
          src="/logo-too-easy.png"
          alt="Too Easy"
          width={120}
          height={120}
          className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-luxury hover:scale-105"
        />
      </motion.div>


      <div className="relative z-20 flex flex-col justify-center gap-8 max-w-5xl mx-auto px-6">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-center text-white tracking-tight leading-[1.05]"
          >
            <span className="block mb-4">Haz tu negocio inteligente.</span>
            Hazlo{" "}
            <span className="text-gradient">
              Too Easy.
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl text-center text-white/50 max-w-2xl mx-auto leading-relaxed font-light mb-4"
        >
          Sistemas operativos impulsados por IA para reducir fricción y aumentar el control en todos los departamentos. Escala sin caos.
        </motion.p>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="https://wa.me/34643774904"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium text-lg transition-luxury hover:bg-white/10 hover:border-white/20 hover:scale-[1.05] active:scale-[0.98] group"
          >
            Contactarnos
            <span className="ml-3 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}

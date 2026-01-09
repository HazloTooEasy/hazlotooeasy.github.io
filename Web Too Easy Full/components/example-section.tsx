"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";

const steps = [
  {
    title: "Detectamos fricción",
    description: "Tu equipo no necesita “trabajar más”. Necesita trabajar sin lastre.\n\nEntramos, observamos y detectamos dónde se rompe el flujo: tareas repetitivas, pasos innecesarios, esperas, duplicidades y micro-errores que drenan energía cada día.\n\nLo que hoy parece “normal”, mañana será el primer cuello de botella que te frena el crecimiento. Nosotros lo encontramos y lo convertimos en claridad.",
    gradient: "from-[#60A5FA] to-[#A855F7]"
  },
  {
    title: "Actuamos de inmediato",
    description: "No hacemos auditorías eternas ni promesas bonitas. Hacemos que el cambio se note rápido.\n\nCuando identificamos fricción, atacamos el punto exacto donde se acumula el caos: automatizamos, conectamos y dejamos el proceso funcionando con lógica real.\n\nResultados visibles desde el primer día: menos interrupciones, menos incendios, menos “¿quién lo hace?” y más control sin añadir carga al equipo.",
    gradient: "from-[#A855F7] to-[#60A5FA]"
  },
  {
    title: "Diseñamos a medida",
    description: "Cada negocio tiene su ritmo. Cada equipo, su manera de operar.\n\nPor eso no vendemos plantillas: diseñamos sistemas que se adaptan a tu forma de trabajar, no al revés.\n\nHablamos con cada departamento, entendemos su día a día y construimos un flujo claro, estable y escalable. Lo sientes porque tu operación deja de depender de “personas clave” y empieza a depender de procesos que sostienen el negocio.",
    gradient: "from-[#60A5FA] to-[#A855F7]"
  },
  {
    title: "Ejecutamos sin ruido",
    description: "La mayoría teme automatizar porque “puede romper algo”. Nosotros trabajamos para que eso no pase.\n\nProbamos, validamos y desplegamos sin interrumpir la operativa, con un enfoque limpio: cambios progresivos, medidos y estables.\n\nEl resultado es simple: menos estrés, menos errores, menos fricción interna… y una empresa que se siente más ligera, más profesional y más preparada para escalar.",
    gradient: "from-[#A855F7] to-[#60A5FA]"
  }
];

function ExampleSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // Very slow motion
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Slower staggering
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 }, // Slightly more move
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8, // Cinema duration
        ease: [0.16, 1, 0.3, 1], // Natural ease
      },
    },
  };

  return (
    <section id="metodologia" className="relative py-32 md:py-60 overflow-hidden bg-[#030303]">
      {/* Astronaut Video Background with deep cinematic layers */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 md:opacity-40"
        >
          <source src="/processes-automation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Subtle Spatial Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      {/* Explicit Top/Bottom Blur for Section Transitions */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030303] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030303] to-transparent z-20 pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
          >
            Convertimos tareas en <br className="hidden md:block" />{" "}
            <span className="text-gradient">
              procesos automatizados.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-premium-gray max-w-2xl mx-auto mb-32"
          >
            Analizamos cómo trabaja tu equipo y transformamos procesos manuales en sistemas claros, automáticos y eficientes.
          </motion.p>

          {/* Narrative Grid 2x2 with Staggered Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-52"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full relative transition-all duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-[1.01]">
                  {/* The Glass Card Container */}
                  <div className="h-full glass-card p-10 md:p-14 rounded-[3rem] border-white/5 bg-black/30 backdrop-blur-2xl transition-all duration-1000 group-hover:backdrop-blur-3xl group-hover:bg-black/50 group-hover:border-white/10 relative overflow-hidden text-left flex flex-col justify-start">

                    {/* Floating Glow on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                      <div className={`absolute -inset-[500px] bg-gradient-to-br ${step.gradient} opacity-[0.03] blur-[120px]`} />
                    </div>

                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${step.gradient} group-hover:brightness-125 transition-all duration-1000`}>
                      {step.title}
                    </h3>

                    <div className="space-y-4">
                      {step.description.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-[17px] md:text-lg text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-all duration-1000 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Subtle Corner Accent (Halo effect on border) */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Phrase with Cinematic Entry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <p className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              Haz tu negocio inteligente. <br />
              <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                Hazlo Too Easy.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;


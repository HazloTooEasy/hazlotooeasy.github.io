"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import React from "react";

const testimonials = [
  {
    name: "Daneury Silverio",
    company: "Amics Consulting Group",
    country: "Estados Unidos",
    image: "https://drive.google.com/thumbnail?id=1e-pnP9f74IMXY_eIa_3MdY0CwVDt5sMg&sz=w400",
    quote: "Antes dedicaba gran parte del día a gestionar correos y organizar clientes. Ahora todo está automatizado y centralizado en un solo sistema. Too Easy me ayudó a crear la web, un dashboard para gestionar clientes y un sistema de email marketing que realmente trae resultados. He reducido mi carga diaria alrededor de un 50 % y puedo centrarme en conseguir más clientes y hacer crecer el negocio.",
    position: "object-top"
  },
  {
    name: "Vie-Riche Paris",
    company: "Marca de moda",
    country: "Estados Unidos",
    image: "https://drive.google.com/thumbnail?id=1kjNT9dLK9vdgpj0WmBEL60ulQ1K5mzMT&sz=w400",
    quote: "Nuestro mayor problema era la atención al cliente y la falta de tiempo para crear contenido. Con el sistema que implementó Too Easy respondemos en segundos y solo intervenimos cuando hace falta. Hemos ahorrado hasta un 70 % del tiempo en atención al cliente y ahora siempre tenemos contenido para redes sin bloquear al equipo. La diferencia se nota en el día a día.",
    position: "object-center"
  },
  {
    name: "Bryan Rubiera",
    company: "Refricentro Rubiera",
    country: "República Dominicana",
    image: "https://drive.google.com/thumbnail?id=1hsvYpYnv1UHmdo6t4BknN9Urb5h86MR9&sz=w400",
    quote: "La gestión de facturas y el papeleo nos quitaban demasiado tiempo. Con la automatización que hizo Too Easy ahora todo está organizado y controlado sin esfuerzo. La IA gestiona clientes, facturas y documentos, y nosotros podemos centrarnos en vender y atender mejor a nuestros clientes. Nos quitamos un peso enorme de encima.",
    position: "object-center"
  },
  {
    name: "Dr. Christoph Jethon",
    company: "PraxisClinic Jadore",
    country: "Alemania",
    image: "https://drive.google.com/thumbnail?id=1e9jLTVR30vRz3NRbMedT2g0yohBKxp37&sz=w400",
    quote: "Queríamos mejorar nuestra visibilidad online y posicionarnos como un referente real en cirugía masculina. Con Too Easy trabajamos el posicionamiento SEO apoyado en inteligencia artificial y la estrategia de contenidos. El resultado fue un aumento progresivo de citas y una presencia mucho más sólida en buscadores. Hoy la clínica atrae pacientes mucho más cualificados.",
    position: "object-top"
  }
];

function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="casos-de-exito" className="py-32 md:py-48 bg-transparent relative overflow-hidden">
      {/* Background illumination for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Fog */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none -z-10" />
      {/* Bottom Fog */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter"
          >
            Nuestros casos de éxito
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-premium-gray"
          >
            Veredictos reales de personas que ya han hecho su negocio Too Easy.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group glass-card p-10 md:p-12 rounded-[2.5rem] transition-luxury hover:bg-black/60 hover:-translate-y-3 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Profile Image with premium glow */}
              <div className="absolute top-10 right-10 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-black">
                <img
                  src={t.image}
                  alt={t.name}
                  className={`w-full h-full object-cover ${t.position || "object-center"} scale-[1.15] hover:scale-[1.25] transition-luxury`}
                />
              </div>

              <div className="flex flex-col h-full">
                <div className="mb-12 pr-20 md:pr-24">
                  <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light italic group-hover:text-white/80 transition-luxury">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {t.name}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-2">
                    <span className="text-white/40 text-sm font-medium">
                      {t.company}
                    </span>
                    <span className="hidden sm:inline w-[3px] h-[3px] rounded-full bg-white/20" />
                    <span className="text-premium-gray text-xs uppercase tracking-widest">
                      {t.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle Ambient Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#60A5FA]/5 to-[#A855F7]/5 opacity-0 group-hover:opacity-100 transition-luxury -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

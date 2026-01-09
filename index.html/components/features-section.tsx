"use client";

import { motion } from 'framer-motion'
import {
  Check,
  ArrowRight,
  FileText,
  Settings,
  Rocket,
  Headset,
  Folder,
  Share2
} from 'lucide-react'
import React from 'react'

const features = [
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: "Finanzas y control",
    quote: "¿Cierres mensuales eternos?",
    items: [
      "Automatización de facturas y conciliación.",
      "Cashflow y previsiones en tiempo real.",
      "Auditoría continua por IA."
    ],
    glowColor: "group-hover:shadow-[#60A5FA]/20",
    gradient: "from-[#A855F7] to-[#60A5FA]"
  },
  {
    icon: <Settings className="h-6 w-6 text-white" />,
    title: "Operaciones internas",
    quote: "¿Procesos manuales y repetitivos?",
    items: [
      "Workflows 100% autónomos.",
      "Reducción drástica de errores humanos.",
      "Escalabilidad sin aumentar plantilla."
    ],
    glowColor: "group-hover:shadow-[#A855F7]/20",
    gradient: "from-[#60A5FA] to-[#A855F7]"
  },
  {
    icon: <Rocket className="h-6 w-6 text-white" />,
    title: "Ventas y gestión",
    quote: "¿Leads perdidos por falta de seguimiento?",
    items: [
      "Cualificación y scoring automático.",
      "CRM inteligente y autogestionado.",
      "Outreach personalizado a escala."
    ],
    glowColor: "group-hover:shadow-[#60A5FA]/20",
    gradient: "from-[#A855F7] to-[#60A5FA]"
  },
  {
    icon: <Headset className="h-6 w-6 text-white" />,
    title: "Atención al cliente",
    quote: "¿Soporte colapsado?",
    items: [
      "Agentes IA empáticos 24/7.",
      "Resolución instantánea de tickets.",
      "Análisis de sentimiento en tiempo real."
    ],
    glowColor: "group-hover:shadow-[#A855F7]/20",
    gradient: "from-[#60A5FA] to-[#A855F7]"
  },
  {
    icon: <Folder className="h-6 w-6 text-white" />,
    title: "Backoffice",
    quote: "¿Enterrado en papeleo?",
    items: [
      "Lectura y extracción de datos via OCR.",
      "Generación automática de contratos.",
      "Archivo digital inteligente."
    ],
    glowColor: "group-hover:shadow-[#60A5FA]/20",
    gradient: "from-[#A855F7] to-[#60A5FA]"
  },
  {
    icon: <Share2 className="h-6 w-6 text-white" />,
    title: "Integración y datos",
    quote: "¿Información aislada en silos?",
    items: [
      "Conexión fluida entre herramientas.",
      "Dashboards unificados de toda la empresa.",
      "Centralización de la verdad."
    ],
    glowColor: "group-hover:shadow-[#A855F7]/20",
    gradient: "from-[#60A5FA] to-[#A855F7]"
  }
];

function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="soluciones" className="py-24 md:py-40 bg-transparent relative z-10 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Top Fog */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none -z-10" />
      {/* Bottom Fog */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
          >
            Conecta tu negocio con <br />
            <span className="text-gradient">
              Inteligencia Artificial.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-premium-gray max-w-2xl mx-auto"
          >
            Conectamos tus herramientas, automatizamos procesos y aplicamos IA donde realmente aporta control y velocidad.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative p-10 rounded-[2.5rem] bg-black/30 backdrop-blur-2xl border border-white/5 transition-luxury hover:bg-black/50 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] ${feature.glowColor}`}
            >
              <div className="flex flex-col h-full relative z-10">
                {/* Icon Box with Gradient */}
                <div className={`mb-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] group-hover:scale-105 transition-luxury`}>
                  <div className="w-full h-full rounded-[15px] bg-[#030303] flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`} />
                    <div className="relative transform group-hover:scale-110 transition-luxury">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>

                {/* Quote with Bar */}
                <div className="flex gap-4 mb-8 items-start">
                  <div className={`w-[2px] h-6 bg-gradient-to-b ${feature.gradient} rounded-full mt-1 shrink-0`} />
                  <p className="text-white/50 italic text-sm leading-relaxed">
                    "{feature.quote}"
                  </p>
                </div>

                {/* Feature List */}
                <ul className="space-y-4 flex-grow">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className={`mt-1 bg-gradient-to-br ${feature.gradient} rounded-full p-[1px] shrink-0 transform group-hover:scale-110 transition-luxury`}>
                        <div className="bg-[#030303] rounded-full p-1">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-500 leading-relaxed font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sophisticated Glow on Hover */}
              <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-luxury -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection;
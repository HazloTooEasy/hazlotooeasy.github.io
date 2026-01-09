"use client";

import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ExampleSection from "@/components/example-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";

const Starfield = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 10% 10%, white, transparent),
                           radial-gradient(1px 1px at 20% 40%, white, transparent),
                           radial-gradient(1px 1px at 30% 20%, white, transparent),
                           radial-gradient(1px 1px at 40% 70%, white, transparent),
                           radial-gradient(1px 1px at 50% 30%, white, transparent),
                           radial-gradient(1px 1px at 60% 80%, white, transparent),
                           radial-gradient(1px 1px at 70% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, white, transparent),
                           radial-gradient(1px 1px at 90% 60%, white, transparent)`,
          backgroundSize: '300px 300px',
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 15% 15%, white, transparent),
                           radial-gradient(2px 2px at 35% 45%, white, transparent),
                           radial-gradient(2px 2px at 55% 25%, white, transparent),
                           radial-gradient(2px 2px at 75% 75%, white, transparent),
                           radial-gradient(2px 2px at 95% 35%, white, transparent)`,
          backgroundSize: '500px 500px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.03)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
    </div>
  );
};

export default function Component() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans relative selection:bg-purple-500/30">
      <Starfield />
      <div className="relative z-10 flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <ExampleSection />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </div>
  );
}

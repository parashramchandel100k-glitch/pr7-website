import { WHAT_I_DO } from "@/config/content";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhatIDo() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Four things I focus on"
          subtitle="Everything I build sits somewhere on this map."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_I_DO.map(({ icon: Icon, title, description }, i) => (
            <GlassCard
              key={title}
              className="flex flex-col gap-4 p-7 animate-fade-up"
              glow={i % 2 === 0 ? "indigo" : "cyan"}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/15 to-cyan-500/10">
                <Icon className="h-5 w-5 text-indigo-300" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

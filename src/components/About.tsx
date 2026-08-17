import { ABOUT_TEXT } from "@/config/content";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Who Am I?" title="Building in public, from zero." />

        <GlassCard className="mt-12 p-8 sm:p-12" glow="indigo">
          <p className="text-balance text-center text-lg leading-relaxed text-white/70 sm:text-xl">
            {ABOUT_TEXT}
          </p>
        </GlassCard>
      </div>
    </section>
  );
}

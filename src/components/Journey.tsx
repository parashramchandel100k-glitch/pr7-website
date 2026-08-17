import { Youtube, Instagram } from "lucide-react";
import { JOURNEY_TEXT } from "@/config/content";
import { SOCIAL_LINKS } from "@/config/links";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Journey() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Follow The Journey" title="Learning loud, in public" />

        <GlassCard className="mt-12 flex flex-col items-center gap-8 p-8 text-center sm:p-12" glow="amber">
          <p className="max-w-xl text-balance text-lg leading-relaxed text-white/65">
            {JOURNEY_TEXT}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={SOCIAL_LINKS.youtube} icon={Youtube} iconPosition="left">
              Watch on YouTube
            </Button>
            <Button
              href={SOCIAL_LINKS.instagram}
              variant="secondary"
              icon={Instagram}
              iconPosition="left"
            >
              Follow on Instagram
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

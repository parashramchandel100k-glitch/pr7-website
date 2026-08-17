import { Mail } from "lucide-react";
import { CONTACT_INFO, type SocialPlatform } from "@/config/links";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialButton from "@/components/ui/SocialButton";
import GlassCard from "@/components/ui/GlassCard";

const CHANNELS: SocialPlatform[] = ["whatsapp", "telegram", "instagram", "youtube"];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Pick whichever channel is easiest for you."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CHANNELS.map((platform) => (
            <SocialButton key={platform} platform={platform} variant="card" />
          ))}

          <GlassCard className="flex items-center gap-4 p-5 sm:col-span-2" glow="none">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/15 to-cyan-500/10">
              <Mail className="h-5 w-5 text-indigo-300" />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-sm font-medium text-white">
                Email
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-xs text-white/50 transition-colors hover:text-white/80"
              >
                {CONTACT_INFO.email}
              </a>
            </span>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

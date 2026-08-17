import { Youtube, ArrowRight, User } from "lucide-react";
import { SITE, SOCIAL_LINKS, type SocialPlatform } from "@/config/links";
import Button from "@/components/ui/Button";
import SocialButton from "@/components/ui/SocialButton";

const SOCIAL_ORDER: SocialPlatform[] = [
  "youtube",
  "instagram",
  "whatsapp",
  "telegram",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-1.5 font-mono text-xs tracking-wide text-emerald-300 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for projects
        </div>

        {/* Profile placeholder */}
        <div
          className="relative mb-8 h-28 w-28 shrink-0 animate-fade-up sm:h-32 sm:w-32"
          style={{ animationDelay: "80ms" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-cyan-400 to-amber-400 opacity-70 blur-md" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/20 bg-ink-800">
            {/*
              Replace this placeholder with your real photo:
              <img src="/profile.jpg" alt="Parshuram" className="h-full w-full object-cover" />
            */}
            <User className="h-12 w-12 text-white/30" strokeWidth={1.5} />
          </div>
        </div>

        <h1
          className="animate-fade-up font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          style={{ animationDelay: "140ms" }}
        >
          {SITE.name.toUpperCase()}
        </h1>

        <p
          className="mt-5 animate-fade-up text-balance text-xl font-medium text-gradient sm:text-2xl md:text-3xl"
          style={{ animationDelay: "200ms" }}
        >
          {SITE.tagline}
        </p>

        <p
          className="mt-6 max-w-xl animate-fade-up text-balance text-base text-white/55 sm:text-lg"
          style={{ animationDelay: "260ms" }}
        >
          I build AI-powered websites, experiment with new ideas, and document
          the journey from zero.
        </p>

        <div
          className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "320ms" }}
        >
          <Button href={SOCIAL_LINKS.youtube} icon={Youtube} iconPosition="left">
            Watch My YouTube
          </Button>
          <Button
            href="#contact"
            external={false}
            variant="secondary"
            icon={ArrowRight}
          >
            Work With Me
          </Button>
        </div>

        <div
          className="mt-14 flex w-full max-w-2xl animate-fade-up flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "380ms" }}
        >
          {SOCIAL_ORDER.map((platform) => (
            <SocialButton key={platform} platform={platform} variant="pill" />
          ))}
        </div>
      </div>
    </section>
  );
}

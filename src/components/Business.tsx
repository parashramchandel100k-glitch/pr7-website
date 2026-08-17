import { MessageCircle, Send } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/links";
import Button from "@/components/ui/Button";

export default function Business() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-10 text-center shadow-glow-indigo sm:p-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[100px]" />

        <div className="relative flex flex-col items-center gap-5">
          <span className="eyebrow">Let's Talk</span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
            Have an idea?
          </h2>
          <p className="max-w-md text-balance text-lg text-white/55">
            Let's build something powerful.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button
              href={SOCIAL_LINKS.whatsapp}
              icon={MessageCircle}
              iconPosition="left"
            >
              Message Me on WhatsApp
            </Button>
            <Button
              href={SOCIAL_LINKS.telegram}
              variant="secondary"
              icon={Send}
              iconPosition="left"
            >
              Join My Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

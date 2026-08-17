import { MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/links";

export default function FloatingWhatsApp() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}

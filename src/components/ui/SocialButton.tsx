import { Youtube, Instagram, MessageCircle, Send } from "lucide-react";
import { type SocialPlatform, SOCIAL_LINKS } from "@/config/links";

type PlatformMeta = {
  label: string;
  icon: typeof Youtube;
  accent: string;
  hoverShadow: string;
};

const PLATFORM_META: Record<SocialPlatform, PlatformMeta> = {
  youtube: {
    label: "YouTube",
    icon: Youtube,
    accent: "from-red-500/20 to-red-500/0 text-red-400",
    hoverShadow: "hover:shadow-[0_0_30px_-8px_rgba(239,68,68,0.5)]",
  },
  instagram: {
    label: "Instagram",
    icon: Instagram,
    accent: "from-pink-500/20 to-amber-400/0 text-pink-400",
    hoverShadow: "hover:shadow-[0_0_30px_-8px_rgba(236,72,153,0.5)]",
  },
  whatsapp: {
    label: "WhatsApp",
    icon: MessageCircle,
    accent: "from-emerald-500/20 to-emerald-500/0 text-emerald-400",
    hoverShadow: "hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.5)]",
  },
  telegram: {
    label: "Telegram",
    icon: Send,
    accent: "from-cyan-500/20 to-cyan-500/0 text-cyan-400",
    hoverShadow: "hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.5)]",
  },
};

type SocialButtonProps = {
  platform: SocialPlatform;
  variant?: "pill" | "card";
  subtitle?: string;
};

export default function SocialButton({
  platform,
  variant = "pill",
  subtitle,
}: SocialButtonProps) {
  const meta = PLATFORM_META[platform];
  const Icon = meta.icon;
  const href = SOCIAL_LINKS[platform];

  if (variant === "card") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${meta.label}`}
        className={`glass-panel glass-panel-hover ${meta.hoverShadow} flex items-center gap-4 rounded-2xl p-5 transition-all duration-300`}
      >
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${meta.accent} border border-white/10`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="flex flex-col text-left">
          <span className="font-display text-sm font-medium text-white">
            {meta.label}
          </span>
          <span className="text-xs text-white/50">
            {subtitle ?? `Connect on ${meta.label}`}
          </span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${meta.label}`}
      className={`group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white ${meta.hoverShadow}`}
    >
      <Icon className={`h-4 w-4 ${meta.accent.split(" ").pop()}`} />
      {meta.label}
    </a>
  );
}

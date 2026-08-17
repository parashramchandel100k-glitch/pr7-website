import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  glow?: "indigo" | "cyan" | "amber" | "none";
  hover?: boolean;
  as?: "div" | "article";
};

const GLOW_STYLES: Record<NonNullable<GlassCardProps["glow"]>, string> = {
  indigo: "hover:shadow-glow-indigo",
  cyan: "hover:shadow-glow-cyan",
  amber: "hover:shadow-glow-amber",
  none: "",
};

export default function GlassCard({
  children,
  className = "",
  glow = "indigo",
  hover = true,
  as = "div",
}: GlassCardProps) {
  const Tag = as;
  return (
    <Tag
      className={`glass-panel ${
        hover ? "glass-panel-hover " + GLOW_STYLES[glow] : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

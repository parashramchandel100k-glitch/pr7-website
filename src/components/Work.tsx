import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type ProjectStatus } from "@/config/content";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Live: "border-emerald-400/25 bg-emerald-400/[0.08] text-emerald-300",
  "In Progress": "border-amber-400/25 bg-amber-400/[0.08] text-amber-300",
  "Coming Soon": "border-white/15 bg-white/[0.05] text-white/50",
};

export default function Work() {
  return (
    <section id="work" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My Work"
          title="Things I'm building"
          subtitle="A live snapshot of what's in motion — some shipped, some still taking shape."
        />

        <div
          id="projects"
          className="mt-14 grid scroll-mt-24 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <GlassCard
              key={project.name}
              className="flex flex-col justify-between gap-6 p-7"
              glow="cyan"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide ${
                      STATUS_STYLES[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/55">
                  {project.description}
                </p>
              </div>

              <Button
                href={project.url}
                variant="ghost"
                icon={ArrowUpRight}
                className="!justify-start !px-0"
              >
                View Project
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

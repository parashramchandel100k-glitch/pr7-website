import { type ReactNode, type MouseEventHandler } from "react";
import { type LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
};

type LinkProps = BaseProps & {
  href: string;
  onClick?: never;
  external?: boolean;
};

type ButtonProps = BaseProps & {
  href?: undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
  external?: never;
};

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-glow-indigo hover:shadow-glow-cyan hover:brightness-110",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white backdrop-blur-md hover:border-white/30 hover:bg-white/[0.08]",
  ghost: "text-white/70 hover:text-white",
};

const baseClasses =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm transition-all duration-300 ease-out active:scale-[0.97] whitespace-nowrap";

function Content({
  children,
  icon: Icon,
  iconPosition = "right",
}: Pick<BaseProps, "children" | "icon" | "iconPosition">) {
  return (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );
}

export default function Button(props: LinkProps | ButtonProps) {
  const { children, variant = "primary", icon, iconPosition, className = "" } =
    props;
  const classes = `${baseClasses} ${VARIANT_STYLES[variant]} ${className}`;

  if ("href" in props && props.href) {
    const isExternal = props.external ?? props.href.startsWith("http");
    return (
      <a
        href={props.href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <Content children={children} icon={icon} iconPosition={iconPosition} />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={(props as ButtonProps).onClick}
      className={classes}
    >
      <Content children={children} icon={icon} iconPosition={iconPosition} />
    </button>
  );
}

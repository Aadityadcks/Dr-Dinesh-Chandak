import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils.js";

const map = {
  primary: "btn-primary",
  outline: "btn-outline",
  dark: "btn-dark",
  onDarkFilled: "btn-on-dark-filled",
  onDarkOutline: "btn-on-dark-outline",
};

export function PillLink({ to, variant = "primary", className, children }) {
  return (
    <Link to={to} className={cn("btn-pill", map[variant], className)}>
      {children}
    </Link>
  );
}

export function PillAnchor({ variant = "primary", className, ...rest }) {
  return <a className={cn("btn-pill", map[variant], className)} {...rest} />;
}

import { forwardRef } from "react";
import { cn } from "@/lib/utils.js";

const map = {
  primary: "btn-primary",
  outline: "btn-outline",
  dark: "btn-dark",
  onDarkFilled: "btn-on-dark-filled",
  onDarkOutline: "btn-on-dark-outline",
};

export const PillButton = forwardRef(
  ({ variant = "primary", className, ...rest }, ref) => (
    <button ref={ref} className={cn("btn-pill", map[variant], className)} {...rest} />
  ),
);
PillButton.displayName = "PillButton";

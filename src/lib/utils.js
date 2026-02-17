import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for constructing className strings conditionally.
 * Combines clsx and tailwind-merge - the standard shadcn/ui pattern.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import {
  LucideIcon,
  Flame,
  SquareMousePointer,
  WifiPen,
} from "lucide-react";

/**
 * Central mapping of icon keys → Lucide icons
 * Used by both desktop & mobile header
 */
export const headerIconMap: Record<string, LucideIcon> = {
  search: SquareMousePointer,
  layers: WifiPen,
  trending: Flame,
};

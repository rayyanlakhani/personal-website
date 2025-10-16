"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="group mt-5 inline-flex rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 backdrop-blur-lg px-4 py-2 mb-8 items-center justify-center gap-3 transition-all duration-700 hover:from-primary/15 hover:via-primary/10 hover:to-primary/15 hover:border-primary/50 hover:scale-105 hover:shadow-lg">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full relative overflow-hidden transition-all duration-700 hover:scale-110 hover:bg-gradient-to-br from-primary/20 to-primary/10 group"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {/* Animated background orbit */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary/30 border-r-primary/20 transition-all duration-1000 group-hover:rotate-180" />

          {/* Sun Icon with glow */}
          <FaSun className="h-5 w-5 transition-all duration-700 transform-gpu rotate-0 scale-100 dark:-rotate-180 dark:scale-0 text-amber-500 dark:text-amber-400 drop-shadow-sm" />

          {/* Moon Icon with glow */}
          <FaMoon className="h-5 w-5 absolute transition-all duration-700 transform-gpu rotate-180 scale-0 dark:rotate-0 dark:scale-100 text-slate-300 drop-shadow-sm" />

          {/* Pulse animation on click */}
          <span className="absolute inset-0 rounded-full bg-primary/30 scale-0 transition-transform duration-300" />
        </Button>

        {/* Text with fade and slide animation */}
        <div className="relative overflow-hidden">
          <span className="text-sm font-medium text-foreground transition-all duration-700 transform-gpu block translate-y-0 dark:-translate-y-6">
            Business Card
          </span>
          <span className="text-sm font-medium text-foreground transition-all duration-700 transform-gpu block absolute top-0 translate-y-6 dark:translate-y-0">
            Miami Vice
          </span>
        </div>

        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10 scale-110 opacity-0 transition-all duration-700 group-hover:opacity-30" />
      </div>
    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className=" inline-flex rounded-full bg-primary/20 border border-primary/30 backdrop-blur-lg px-4 py-2 mb-8 items-center justify-center">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <FaSun className=" absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></FaSun>
          <FaMoon className=" absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100 "></FaMoon>
        </Button>
        <span className="text-sm font-medium text-foreground ml-3">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
      </div>
     
    </>
  );
}

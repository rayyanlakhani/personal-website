"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "./button";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { RxDownload } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";

export const navigationItems = [
  {
    title: "Home",
    href: "/#home",
    items: [],
  },
  {
    title: "About",
    href: "/#about",
    items: [],
  },
  {
    title: "Skills",
    href: "/#skills",
    items: [],
  },
  {
    title: "Projects",
    href: "/#projects",
    items: [],
  },
  {
    title: "Contact",
    href: "/#contact",
    items: [],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function
  const smoothScroll = (href: string) => {
    const targetId = href.replace("/#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle click on navigation items
  const handleNavClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    smoothScroll(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-2xl md:border md:border-primary/30 md:bg-background/20 p-3 md:backdrop-blur-lg md:rounded-2xl">
      <div className="flex w-full items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="relative rounded-lg px-4 py-2 font-medium text-foreground transition-all hover:bg-primary/20 hover:text-primary hover:shadow-lg active:bg-primary/20"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
            onClick={() => {
              window.open("https://github.com/rayyanlakhani", "_blank");
            }}
          >
            <LuGithub className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/rayyan-lakhani-6b6950297/",
                "_blank"
              );
            }}
          >
            <CiLinkedin className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Download my resume"
            className="rounded-xl text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
            onClick={() => {
              window.open("/Rayyan Lakhani Next.js.pdf", "_blank");
            }}
          >
            <RxDownload className="size-5" />
          </Button>
          <Button
            className="rounded-xl bg-primary px-6 text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/40"
            onClick={(e) => handleNavClick("/#contact", e)}
          >
            <IoCallOutline className="mr-0.5 size-4" />
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl bg-primary/10 px-4 py-2 text-primary transition-all hover:bg-primary/30 hover:shadow-lg backdrop-blur-lg"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
        } w-full`}
      >
        {/* Apply blur to the outer container instead */}
        <div className="bg-background/20 backdrop-blur-lg rounded-2xl border border-primary/30 shadow-lg">
          <div className="p-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="block rounded-lg px-4 py-3 font-medium text-card-foreground transition-all hover:bg-primary/20 hover:text-primary"
              >
                {item.title}
              </a>
            ))}
            <div className="mt-2 flex gap-2 pt-2 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 rounded-lg text-card-foreground hover:bg-primary/20 hover:text-primary"
                onClick={() => {
                  window.open("https://github.com/rayyanlakhani", "_blank");
                }}
              >
                <LuGithub className="mr-2 size-4" />
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 rounded-lg text-card-foreground hover:bg-primary/20 hover:text-primary"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/rayyan-lakhani-6b6950297/",
                    "_blank"
                  );
                }}
              >
                <CiLinkedin className="mr-2 size-4" />
                LinkedIn
              </Button>
            </div>
            <div className="mt-1 flex gap-2 border-border">
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 rounded-lg text-card-foreground hover:bg-primary/20 hover:text-primary"
                onClick={(e) => handleNavClick("/#contact", e)}
              >
                <IoCallOutline className="mr-2 size-4" />
                Contact
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 rounded-lg text-card-foreground hover:bg-primary/20 hover:text-primary"
                onClick={() => {
                  window.open("/Rayyan Lakhani Next.js.pdf", "_blank");
                }}
              >
                <RxDownload className="mr-2 size-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

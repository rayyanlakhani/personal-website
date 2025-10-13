"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "./button";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { RxDownload } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";

export const navigationItems = [
  {
    title: "Home",
    href: "/",
    items: [],
  },
  {
    title: "About",
    href: "/about",
    items: [],
  },
  {
    title: "Skills",
    href: "/skills",
    items: [],
  },
  {
    title: "Projects",
    href: "/projects",
    items: [],
  },
  {
    title: "Contact",
    href: "/contact",
    items: [],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-2xl border border-primary/30 bg-background/20 p-3 backdrop-blur-lg md:rounded-2xl">
      <div className="flex w-full items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group relative rounded-lg p-1 transition-all hover:scale-105"
          >
            <div className="absolute inset-0 rounded-lg bg-primary/20 blur-sm transition-all group-hover:bg-primary/30" />
            <Image
              src="/logo.png"
              alt="Rayyan"
              width={45}
              height={45}
              className="relative rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-lg px-4 py-2 font-medium text-foreground transition-all hover:bg-primary/20 hover:text-primary hover:shadow-lg"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
          >
            <LuGithub className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
          >
            <CiLinkedin className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Download my CV"
            className="rounded-xl text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
          >
            <RxDownload className="size-5" />
          </Button>
          <Button className="rounded-xl bg-primary px-6 text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/40">
            <IoCallOutline className="mr-0.5 size-4" />
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden items-center gap-2 flex">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl px-4 text-primary bg-background/20 p-3 backdrop-blur-lg"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex w-full flex-col gap-2 rounded-2xl border border-primary/30 bg-background/20 backdrop-blur-lg md:rounded-2xl p-4 shadow-lg md:hidden ">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-card-foreground transition-all hover:bg-primary/20 hover:text-primary "
            >
              {item.title}
            </Link>
          ))}
          <div className="mt-2 flex gap-2 pt-2 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 rounded-lg text-card-foreground"
            >
              <LuGithub className="mr-2 size-4" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 rounded-lg text-card-foreground"
            >
              <CiLinkedin className="mr-2 size-4" />
              LinkedIn
            </Button>
          </div>
          <div className="mt-1 flex gap-0.5  border-border">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 rounded-lg text-card-foreground"
            >
              <IoCallOutline className="mr-2 size-4" />
              Contact
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 rounded-lg text-card-foreground"
            >
              <RxDownload className="mr-2 size-4" />
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, GraduationCap } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/assistant", label: "AI Assistant" },
  { to: "/notes", label: "Notes" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("studymate:theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("studymate:theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-card mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold" aria-label="StudyMate AI home">
          <span className="btn-gradient inline-flex h-9 w-9 items-center justify-center rounded-xl">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg tracking-tight">
            Study<span className="text-gradient">Mate</span> AI
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-accent/60" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground hover:bg-accent/40" }}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground transition-colors hover:bg-accent"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/60 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-card mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-accent text-primary" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
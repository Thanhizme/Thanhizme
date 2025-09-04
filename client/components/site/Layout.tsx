import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/60 backdrop-blur-sm transition hover:bg-secondary"
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

function Brand() {
  return (
    <NavLink to="/" className="group inline-flex items-center gap-2">
      <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-primary/10 text-primary">
        <span className="absolute inset-0 bg-radial-fade" />
        <span className="font-bold">T</span>
      </span>
      <span className="font-semibold">Phạm Quang Tiến Thành</span>
    </NavLink>
  );
}

function NavLinkItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "rounded-md px-3 py-2 text-sm font-medium transition",
          isActive
            ? "bg-primary text-primary-foreground shadow"
            : "text-foreground/80 hover:bg-secondary hover:text-foreground",
        )
      }
      end
    >
      {label}
    </NavLink>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/60 text-foreground">
      <header className="sticky top-0 z-30 border-b bg-background/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Brand />
          <nav className="hidden gap-1 md:flex">
            <NavLinkItem to="/" label="Home" />
            <NavLinkItem to="/projects" label="Projects" />
            <NavLinkItem to="/about" label="About" />
            <NavLinkItem to="/contact" label="Contact" />
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:contact@example.com"
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90 md:inline-block"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-radial-fade" />
        {children}
      </main>
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
          <p className="text-foreground/70">
            © {new Date().getFullYear()} Phạm Quang Tiến Thành
          </p>
          <div className="flex items-center gap-4 text-foreground/70">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href="mailto:contact@example.com" className="hover:text-foreground">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

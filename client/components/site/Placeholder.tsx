import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="container flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="max-w-prose text-foreground/70">{description}</p>
      <div className="flex gap-3 pt-2">
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/projects">View Projects</Link>
        </Button>
      </div>
    </div>
  );
}

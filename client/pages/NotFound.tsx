import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="container flex min-h-[80vh] flex-col items-center justify-center py-16">
      <div className="mx-auto max-w-lg text-center">
        {/* Large 404 number */}
        <div className="relative">
          <h1 className="text-[8rem] font-bold text-primary/20 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="h-16 w-16 text-primary/40" />
          </div>
        </div>
        
        {/* Error message */}
        <h2 className="mt-8 text-3xl font-bold tracking-tight">
          Oops! Page not found
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Current path info */}
        <div className="mt-6 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            Attempted to access: 
            <code className="ml-2 rounded bg-background px-2 py-1 text-foreground">
              {location.pathname}
            </code>
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild size="lg" className="min-w-[160px]">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </Button>
        </div>

        {/* Additional helpful links */}
        <div className="mt-8 text-sm text-muted-foreground">
          <p>You might be looking for:</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <Link 
              to="/about" 
              className="rounded-md px-3 py-1 hover:bg-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="rounded-md px-3 py-1 hover:bg-secondary hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="rounded-md px-3 py-1 hover:bg-secondary hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
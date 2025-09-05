import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Brain, 
  BarChart3, 
  Server, 
  GraduationCap, 
  Target,
  Mail,
  MapPin 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Passionate about data and intelligent systems
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Bio Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hello! My name is <strong>Pham Thanh</strong>, a former student of PTNK High School 
                and currently pursuing my studies at <strong>Ho Chi Minh University of Technology (HCMUT)</strong>. 
                I have a strong passion for data and intelligent systems, especially in the areas of 
                data cleaning, big data, database management, and machine learning.
              </p>
              
              <p className="leading-relaxed text-muted-foreground">
                My long-term goal is to build impactful projects that can handle real-world data challenges. 
                In the near future, I aim to work on projects that bridge the gap between data engineering 
                and data science, focusing on creating end-to-end solutions—from data collection and cleaning, 
                to analysis, to deploying intelligent models in production.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                Ultimately, I want to contribute to building data-driven systems that can bring measurable 
                value to both businesses and society.
              </p>
            </CardContent>
          </Card>

          {/* Areas of Interest */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Areas of Interest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">Data Cleaning & Preprocessing</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developing efficient pipelines to transform raw, messy data into reliable datasets.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">Big Data Systems</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Exploring distributed processing frameworks to manage and analyze large-scale datasets.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">Database Engineering</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Designing scalable, optimized, and secure database architectures.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">Machine Learning & AI</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Applying algorithms to uncover insights, automate processes, and support decision-making.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span>Student at HCMUT</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="mailto:tienthanhpq.phamquang@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "React",
                  "TypeScript",
                  "Machine Learning",
                  "Data Science",
                  "Pandas",
                  "NumPy",
                  "scikit-learn",
                  "Database Design",
                  "Big Data",
                  "Data Cleaning",
                  "ETL Pipelines",
                  "Git",
                  "Linux"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Let's Collaborate</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in data projects or want to connect? I'd love to hear from you!
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <a href="mailto:tienthanhpq.phamquang@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/projects">
                    View My Projects
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Future Goals Section */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Future Goals & Vision
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg">
              My vision is to create <strong>end-to-end data solutions</strong> that bridge the gap 
              between data engineering and data science. I'm particularly excited about:
            </p>
            
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <div className="p-4 rounded-lg border bg-muted/50">
                <h3 className="font-semibold mb-2">Real-World Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Building data-driven systems that solve actual business problems and create 
                  measurable value for organizations and society.
                </p>
              </div>
              
              <div className="p-4 rounded-lg border bg-muted/50">
                <h3 className="font-semibold mb-2">Production-Ready Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Moving beyond proof-of-concepts to deploy robust, scalable machine learning 
                  models and data pipelines in production environments.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
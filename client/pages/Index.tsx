import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="relative">
      <section className="border-b bg-grid-pattern bg-grid">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div className="relative z-10 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border bg-background/60 px-3 py-1 text-xs text-foreground/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Available for data projects
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Phạm Quang Tiến Thành
            </h1>
            <p className="max-w-prose text-lg text-foreground/80">
              Data scientist and AI engineer crafting end-to-end machine
              learning systems — from data pipelines and feature engineering to
              model training, evaluation, and production deployment. I care
              about reliable results, clear communication, and responsible AI.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "PyTorch",
                "TensorFlow",
                "scikit-learn",
                "Pandas",
                "MLOps",
                "LLMs",
                "Data Viz",
              ].map((t) => (
                <Badge key={t} variant="secondary" className="text-sm">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg">
                <Link to="/projects" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button variant="secondary" asChild size="lg">
                <a href="tienthanhpq.phamquang@gmail.com">Contact Me</a>
              </Button>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Thanhizme"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-secondary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ph%E1%BA%A1m-quang-ti%E1%BA%BFn-th%C3%A0nh-7b651036a/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="tienthanhpq.phamquang@gmail.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-secondary"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent blur-2xl" />
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border bg-secondary/40 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_10%,hsl(var(--primary)/0.15),transparent)]" />
              <div className="flex h-full items-center justify-center p-4">
                <img
                  src="/images/avatar.jpg"
                  alt="Phạm Quang Tiến Thành"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Featured Projects
            </h2>
            <p className="text-foreground/70">
              A selection of applied ML and AI work.
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link to="/projects">
              See all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Time-Series Forecasting Pipeline",
              desc: "End‑to‑end forecasting for demand planning with feature stores, model registry, and CI for retraining.",
              tags: ["Python", "scikit-learn", "Airflow", "MLflow"],
            },
            {
              title: "LLM Chat Assistant",
              desc: "Retrieval-augmented generation with tools, evaluation, and guardrails.",
              tags: ["LLMs", "RAG", "Vector DB"],
            },
            {
              title: "Vision Model Deployment",
              desc: "Real-time object detection service with GPU inference and observability.",
              tags: ["PyTorch", "FastAPI", "Docker"],
            },
          ].map((p) => (
            <Card key={p.title} className="group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {p.title}
                  <span className="text-sm text-foreground/50">2025</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary/40">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              What I care about
            </h2>
            <p className="mt-4 max-w-prose text-foreground/80">
              Building trustworthy AI systems: robust data pipelines, thoughtful
              evaluation, monitoring, and user-centric experiences.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "MLOps",
              "Experiment Tracking",
              "Feature Engineering",
              "Model Evaluation",
              "Responsible AI",
              "Visualization & Storytelling",
              "Generative AI",
              "Data Engineering",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-background p-4 text-sm shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="rounded-2xl border bg-gradient-to-tr from-primary/10 to-accent/10 p-8 text-center shadow-md md:p-12">
          <h3 className="text-2xl font-bold md:text-3xl">
            Let's build intelligent products
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-foreground/80">
            I'm open to collaborations around data science, ML platforms, and
            applied AI.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="tienthanhpq.phamquang@gmail.com">Contact Me</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Time-Series Forecasting Pipeline",
    year: "2025",
    description:
      "End-to-end demand forecasting with Airflow orchestration, feature store, and automated retraining.",
    tags: ["Python", "scikit-learn", "Airflow", "MLflow"],
  },
  {
    title: "LLM Chat Assistant",
    year: "2024",
    description:
      "RAG system with vector search, function calling, and evaluation harness.",
    tags: ["LLMs", "RAG", "Vector DB"],
  },
  {
    title: "Vision Model Deployment",
    year: "2024",
    description:
      "GPU-accelerated object detection service with FastAPI, Triton, and Prometheus metrics.",
    tags: ["PyTorch", "FastAPI", "Docker"],
  },
  {
    title: "Feature Store POC",
    year: "2023",
    description:
      "Centralized, versioned features enabling online/offline parity across teams.",
    tags: ["Feast", "Data Engineering"],
  },
  {
    title: "Analytical Dashboards",
    year: "2022",
    description:
      "Interactive dashboards that communicate insights with clarity.",
    tags: ["Data Viz", "D3", "Storytelling"],
  },
];

export default function Projects() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">Projects</h1>
          <p className="mt-2 max-w-prose text-foreground/70">
            A curated collection of recent work and experiments.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {p.title}
                <span className="text-sm text-foreground/50">{p.year}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-foreground/80">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
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
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { Code2, Database, Lock, Zap } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React 18", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Python", "PostgreSQL", "Redis", "REST API"]
  },
  {
    category: "Security",
    icon: Lock,
    items: ["Role-based Access", "Data Encryption", "Audit Logs", "2FA Support"]
  },
  {
    category: "Performance",
    icon: Zap,
    items: ["Fast Response", "Caching Layer", "Optimized Queries", "CDN Ready"]
  }
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by industry-leading technologies for reliability and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-hover transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{tech.category}</h3>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

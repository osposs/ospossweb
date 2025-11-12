import { Users, Building2, Globe2, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15,000",
    label: "Active Users"
  },
  {
    icon: Building2,
    value: "3,000",
    label: "Companies"
  },
  {
    icon: Globe2,
    value: "150+",
    label: "Countries"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "User Rating"
  }
];

export const Stats = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-block mb-3 p-3 bg-primary/10 rounded-lg">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

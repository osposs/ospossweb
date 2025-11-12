import { Card } from "@/components/ui/card";
import { Cloud, HardDrive, CheckCircle } from "lucide-react";

export const Deployment = () => {
  return (
    <section id="deployment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flexible Deployment Options
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose how you want to run OSPos - on your own servers or in the cloud
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover:shadow-hover transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <HardDrive className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              On-Premise Installation
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              Install OSPos on your own infrastructure for complete control and data ownership
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Full control over your data and infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">No recurring hosting fees</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Works offline and on local networks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Customizable to your specific needs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Ideal for organizations with strict data policies</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 hover:shadow-hover transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Cloud className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Cloud Deployment
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              Deploy OSPos on cloud platforms for easy scaling and maintenance
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Quick setup and deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Automatic backups and updates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Access from anywhere with internet</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Scalable infrastructure as you grow</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Reduced IT maintenance overhead</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Both options provide the same powerful features - choose what works best for your organization
          </p>
        </div>
      </div>
    </section>
  );
};

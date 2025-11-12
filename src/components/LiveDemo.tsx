import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

export const LiveDemo = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Request Demo Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the full power of OSPos with our interactive demo. Contact us to get demo access and see how it can transform your business operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                  <Play className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interactive Demo Environment
                </h3>
                <p className="text-muted-foreground mb-8 max-w-xl">
                  Contact us to receive demo access. Test drive OSPos with sample data and explore all features.
                </p>
                <Button 
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-lg px-8"
                >
                  Contact Us for Demo Access <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Full Access</h4>
              <p className="text-sm text-muted-foreground">
                Explore all modules and features without limitations
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Sample Data</h4>
              <p className="text-sm text-muted-foreground">
                Pre-loaded with realistic business data to test workflows
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">No Setup</h4>
              <p className="text-sm text-muted-foreground">
                Start immediately without installation or configuration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

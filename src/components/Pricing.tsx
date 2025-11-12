import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const features = [
  "All POS modules included",
  "Unlimited users",
  "Lifetime software license",
  "Free updates forever",
  "Full source code access",
  "Complete customization rights",
  "No monthly fees",
  "Priority email support",
  "Community forum access",
  "Mobile app access",
  "API access",
  "Export all your data anytime"
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pay once, own forever. No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 shadow-hover border-2 border-primary/20 bg-gradient-card">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
                ONE-TIME PAYMENT
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl md:text-7xl font-bold text-foreground">$200</span>
                <span className="text-2xl text-muted-foreground">USD</span>
              </div>
              <p className="text-muted-foreground">
                Lifetime license • No recurring fees
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Everything included:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                🔒 Secure payment • 30-day money-back guarantee
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

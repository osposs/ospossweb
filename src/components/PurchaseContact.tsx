import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const PurchaseContact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:enquiry.ospos@gmail.com";
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact Us for Purchase Processes, Software Documentation and Other Enquiries
          </h2>
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={handleEmailClick}
              className="text-lg px-8 shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

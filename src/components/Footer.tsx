import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-bold text-xl text-primary mb-4">OSPos</h3>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Complete Open Source Point of Sale solution with lifetime access for one low price.
          </p>
          <Separator className="my-8" />
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} OSPos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

import { Card } from "@/components/ui/card";
import { 
  Calculator, 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  Package, 
  Factory, 
  FolderKanban, 
  Laptop,
  Store,
  Award,
  Headphones,
  UserCircle,
  Code,
  Building,
  FileText,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Accounting",
    description: "Complete financial management with invoicing, expense tracking, and financial reports"
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
    description: "Purchase orders, supplier management, and automated procurement workflows"
  },
  {
    icon: TrendingUp,
    title: "Sales & Invoicing",
    description: "Sales orders, quotations, invoicing, and payment tracking"
  },
  {
    icon: Users,
    title: "CRM",
    description: "Customer relationship management, lead tracking, and opportunity management"
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time stock tracking, warehouse management, and inventory optimization"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production planning, bill of materials, work orders, and shop floor management"
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "Task tracking, time sheets, project costing, and resource planning"
  },
  {
    icon: Laptop,
    title: "Asset Management",
    description: "Fixed assets tracking, depreciation, maintenance scheduling"
  },
  {
    icon: Store,
    title: "Point of Sale",
    description: "Complete POS system with offline mode, inventory sync, and receipt printing"
  },
  {
    icon: Award,
    title: "Quality Management",
    description: "Quality inspections, procedures, goals, and review management"
  },
  {
    icon: Headphones,
    title: "Support & Helpdesk",
    description: "Ticket management, SLA tracking, customer support portal"
  },
  {
    icon: UserCircle,
    title: "HR & Payroll",
    description: "Employee management, attendance, leave, payroll processing, and expense claims"
  },
  {
    icon: Code,
    title: "No-Code Builder",
    description: "Custom forms, workflows, and reports without coding"
  },
  {
    icon: Building,
    title: "Multi-Company",
    description: "Manage multiple companies and consolidate reports"
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Centralized document storage with version control"
  },
  {
    icon: Globe,
    title: "Multi-Currency & Multi-Language",
    description: "Support for international operations with localization"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive business management modules, all included in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-hover transition-all duration-300 border-border bg-gradient-card group cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { FileText, CheckCircle, FileCheck, Truck, DollarSign } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "RFQ",
    description: "Receive buyer request",
    detail: "Exporter uploads quote"
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "AIiIMEX validates policies instantly",
    detail: "AI agent pops up with checklist"
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Auto-generate export docs",
    detail: "PDF animation with ✓ stamp"
  },
  {
    icon: Truck,
    title: "Shipment & Bank",
    description: "Logistics and finance in sync",
    detail: "Moving container animation"
  },
  {
    icon: DollarSign,
    title: "Payment & Closure",
    description: "No mismatches, no penalties",
    detail: "Green tick, payment notification"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            From RFQ to Payment – One Clear Path
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />
            
            {/* Steps */}
            <div className="grid md:grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mb-4 shadow-glow relative z-10">
                    <step.icon className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{step.description}</p>
                  <p className="text-xs text-muted-foreground/80">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <button className="text-primary hover:text-primary-glow transition-colors text-lg font-medium underline underline-offset-4">
            See AIiIMEX in Action →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

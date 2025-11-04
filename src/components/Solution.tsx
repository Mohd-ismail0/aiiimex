import { Brain, Workflow, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import automationImage from "@/assets/automation-visual.jpg";

const features = [
  {
    icon: Brain,
    title: "AI Compliance Agent",
    description: "Instantly interprets DGFT/WTO/FTA policies"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Creates and tracks shipping docs with one click"
  },
  {
    icon: Users,
    title: "Multi-Stakeholder Visibility",
    description: "Shared real-time dashboards for all parties"
  },
  {
    icon: Shield,
    title: "Built-in Trust Layer",
    description: "Verified data and transparent progress logs"
  }
];

const Solution = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet AIiIMEX
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AIiIMEX connects every stakeholder in your export workflow — exporter, importer, 
            bank, and freight forwarder — on one AI-powered platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
          <div className="space-y-6 animate-slide-up">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-4 rounded-lg hover:bg-secondary transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={automationImage} 
                alt="AI-powered automation visualization" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-xl font-medium text-muted-foreground mb-6">
            Think of it as your AI-powered export operations team.
          </p>
          <Button variant="outline" size="lg">
            Watch 1-Min Explainer Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;

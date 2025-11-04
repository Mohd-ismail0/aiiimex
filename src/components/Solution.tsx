import { Brain, Workflow, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import automationImage from "@/assets/automation-visual.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet AIiIMEX
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AIiIMEX connects every stakeholder in your export workflow — exporter, importer, 
            bank, and freight forwarder — on one AI-powered platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
          <div ref={featuresRef} className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex gap-4 p-4 rounded-lg hover:bg-secondary transition-all duration-500 scroll-slide-left ${featuresVisible ? 'visible' : ''}`}
                style={{ 
                  transitionDelay: featuresVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

          <div 
            ref={imageRef}
            className={`relative scroll-slide-right ${imageVisible ? 'visible' : ''}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-shadow duration-500">
              <img 
                src={automationImage} 
                alt="AI-powered automation visualization" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        <div 
          ref={ctaRef}
          className={`text-center scroll-fade-in ${ctaVisible ? 'visible' : ''}`}
        >
          <p className="text-xl font-medium text-muted-foreground mb-6">
            Think of it as your AI-powered export operations team.
          </p>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300">
            Watch 1-Min Explainer Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;

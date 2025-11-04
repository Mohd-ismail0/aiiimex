import { AlertCircle, FileX, Globe, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: FileX,
    title: "Disconnected Portals",
    description: "Navigate DGFT, customs, GST, and bank systems separately"
  },
  {
    icon: AlertCircle,
    title: "Document Mismatches",
    description: "Manual errors trigger delays and costly penalties"
  },
  {
    icon: Globe,
    title: "Unclear Compliance",
    description: "Country-specific requirements are complex and changing"
  },
  {
    icon: TrendingDown,
    title: "Lost Buyer Confidence",
    description: "Lack of visibility erodes trust and relationships"
  }
];

const Problem = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Where Exports Get Stuck
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            "Exporters don't lose business because of bad products — they lose it because of bad processes."
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 border-border scroll-fade-in ${cardsVisible ? 'visible' : ''}`}
              style={{ 
                transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <problem.icon className="w-12 h-12 text-accent mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </Card>
          ))}
        </div>

        <div 
          ref={footerRef}
          className={`text-center mt-12 scroll-fade-in ${footerVisible ? 'visible' : ''}`}
        >
          <p className="text-xl font-medium text-foreground">
            India's exporters deserve a simpler, smarter system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;

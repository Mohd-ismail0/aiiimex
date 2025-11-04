import { AlertCircle, FileX, Globe, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

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
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Where Exports Get Stuck
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            "Exporters don't lose business because of bad products — they lose it because of bad processes."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 animate-slide-up border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <problem.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-xl font-medium text-foreground">
            India's exporters deserve a simpler, smarter system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
